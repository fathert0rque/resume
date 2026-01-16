import { readFileSync, writeFileSync, mkdirSync, cpSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Handlebars from "handlebars";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");

const args = process.argv.slice(2);
const shouldPdf = args.includes("--pdf");
const shouldWatch = args.includes("--watch");

// Ensure dist directory exists
mkdirSync(DIST, { recursive: true });

// Custom renderer to handle -> prefix (location/date lines)
const renderer = new marked.Renderer();
const originalParagraph = renderer.paragraph.bind(renderer);
renderer.paragraph = (text) => {
  // Handle the textToken object structure from marked
  const content = typeof text === 'object' && text.text ? text.text : String(text);

  if (content.startsWith("->")) {
    return `<p class="meta">${content.slice(2).trim()}</p>`;
  }
  return originalParagraph(text);
};

marked.setOptions({ renderer });

async function build() {
  console.log("Building resume...");

  // Read source files
  const resumeRaw = readFileSync(join(ROOT, "resume.md"), "utf-8");
  const templateRaw = readFileSync(join(ROOT, "template.html"), "utf-8");

  // Parse frontmatter and markdown
  const { data: frontmatter, content } = matter(resumeRaw);
  const bodyHtml = marked(content);

  // Compile template
  const template = Handlebars.compile(templateRaw);
  const html = template({ ...frontmatter, body: bodyHtml });

  // Write HTML
  const htmlPath = join(DIST, "index.html");
  writeFileSync(htmlPath, html);
  console.log(`  -> ${htmlPath}`);

  // Copy CSS to dist for proper linking
  const cssContent = readFileSync(join(ROOT, "styles.css"), "utf-8");
  writeFileSync(join(DIST, "styles.css"), cssContent);

  // Copy fonts to dist
  cpSync(join(ROOT, "fonts"), join(DIST, "fonts"), { recursive: true });

  return htmlPath;
}

async function generatePdf(htmlPath) {
  console.log("Generating PDF...");
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.default.launch();
  const page = await browser.newPage();

  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

  const pdfPath = join(DIST, "resume.pdf");
  await page.pdf({
    path: pdfPath,
    format: "letter",
    margin: { top: "0.5in", bottom: "0.5in", left: "0.5in", right: "0.5in" },
    printBackground: true,
  });

  await browser.close();
  console.log(`  -> ${pdfPath}`);
}

async function startDev() {
  const bs = await import("browser-sync");
  const browserSync = bs.default.create();

  // Initial build
  await build();

  browserSync.init({
    server: DIST,
    files: [
      {
        match: [
          join(ROOT, "resume.md"),
          join(ROOT, "template.html"),
          join(ROOT, "styles.css"),
        ],
        fn: async () => {
          await build();
          browserSync.reload();
        },
      },
    ],
    open: true,
    notify: false,
  });

  console.log("\nWatching for changes... (Ctrl+C to stop)");
}

async function main() {
  if (shouldWatch) {
    await startDev();
  } else {
    const htmlPath = await build();
    if (shouldPdf) {
      await generatePdf(htmlPath);
    }
  }
}

main().catch(console.error);
