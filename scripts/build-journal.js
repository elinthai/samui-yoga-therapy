// Generates journal/index.html and journal/<slug>/index.html from articles-data.js.
// Run with: node scripts/build-journal.js
// Do not hand-edit anything under journal/ — re-run this script instead.

const fs = require("fs");
const path = require("path");
const { articles } = require("../articles-data.js");

const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://samui-yoga-therapy.vercel.app";
const BRAND = "syt";

// Known internal pages an article can cross-promote via relatedProductIds.
const PRODUCT_LINKS = {
  membership: { label: "Studio Membership", href: "../../membership.html" }
};

// ---- tiny markdown -> HTML (headings, paragraphs, bold/italic, links, lists) ----
function renderMarkdown(md) {
  const inline = (text) =>
    text
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");

  const blocks = md.trim().split(/\n\s*\n/);
  const html = blocks
    .map((block) => {
      const lines = block.split("\n").map((l) => l.trim());
      if (lines[0].startsWith("### ")) return `<h3>${inline(lines[0].slice(4))}</h3>`;
      if (lines[0].startsWith("## ")) return `<h2>${inline(lines[0].slice(3))}</h2>`;
      if (lines.every((l) => l.startsWith("- "))) {
        const items = lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("");
        return `<ul>${items}</ul>`;
      }
      return `<p>${inline(lines.join(" "))}</p>`;
    })
    .join("\n");

  return html;
}

function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}

function ctaBlock(ctaType) {
  if (ctaType === "booking") {
    return `
    <div class="journal-cta">
      <p class="section-intro">Ready to begin?</p>
      <h2>Book a private session.</h2>
      <p class="journal-cta-lead">One-to-one, sequenced around your body and your history — not a fixed class sequence.</p>
      <button data-cal-link="samui-wellness" data-cal-config='{"layout":"month_view"}' class="btn btn-primary">Book a session</button>
    </div>`;
  }
  if (ctaType === "scan") {
    return `
    <div class="journal-cta">
      <p class="section-intro">Where it begins</p>
      <h2>Start the 4-Week Intro Track.</h2>
      <p class="journal-cta-lead">A Styku baseline scan, a consultation, and eight private sessions built around what the data finds. ฿10,000.</p>
      <a href="https://cal.com/eli-caleb-fdhnnx/4-week-intro-track" class="btn btn-primary">Begin the track</a>
    </div>`;
  }
  // membership
  return `
    <div class="journal-cta">
      <p class="section-intro">Want to go deeper?</p>
      <h2>Talk to us about membership.</h2>
      <p class="journal-cta-lead">One scan and one session a month, member discounts, and community access — Eli will walk you through it.</p>
      <a href="https://wa.me/66660735431?text=Hi%20Eli%2C%20I%27d%20like%20to%20talk%20about%20membership." class="btn btn-primary" target="_blank" rel="noopener">Message Eli on WhatsApp</a>
    </div>`;
}

function relatedProductsBlock(ids) {
  if (!ids || !ids.length) return "";
  const links = ids
    .map((id) => PRODUCT_LINKS[id])
    .filter(Boolean)
    .map((p) => `<a href="${p.href}" class="btn btn-secondary">${p.label}</a>`)
    .join("\n      ");
  if (!links) return "";
  return `
    <div class="journal-related">
      <p class="section-intro">Related</p>
      <div class="journal-related-links">
      ${links}
      </div>
    </div>`;
}

const HEAD_LINKS = `
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/style.css" />
  <link rel="stylesheet" href="../../css/journal.css" />`;

const NAV = `
  <header class="site-header" id="site-header">
    <nav class="nav container">
      <a href="../../index.html" class="nav-logo">Samui Yoga Therapy</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="../../journal/index.html">Journal</a></li>
        <li><a href="../../index.html#about">About Eli</a></li>
        <li><a href="../../index.html#services">Sessions</a></li>
        <li><a href="../../index.html#contact" class="nav-cta">Message Eli</a></li>
      </ul>
    </nav>
  </header>`;

const FOOTER = `
  <footer class="site-footer">
    <div class="container">
      <p class="footer-name">Samui Yoga Therapy</p>
      <p class="footer-location">Bophut · Koh Samui · Thailand</p>
      <nav class="start-footer-nav">
        <a href="../../journal/index.html" style="font-size:0.72rem;color:var(--muted);text-decoration:none;">Journal</a>
        <span aria-hidden="true">·</span>
        <a href="https://body-sculpt-samui.vercel.app/" style="font-size:0.72rem;color:var(--muted);text-decoration:none;">Body Sculpt Samui</a>
        <span aria-hidden="true">·</span>
        <a href="https://mydreams-eight.vercel.app/" style="font-size:0.72rem;color:var(--muted);text-decoration:none;">Jungle Village</a>
      </nav>
      <p class="footer-copy">&copy; <span id="year"></span> Samui Yoga Therapy. All rights reserved.</p>
    </div>
  </footer>`;

function articlePage(article) {
  const title = `${article.title} — Samui Yoga Therapy Journal`;
  const url = `${SITE_URL}/journal/${article.id}/`;
  const ogImage = article.heroImage.startsWith("http")
    ? article.heroImage
    : `${SITE_URL}/${article.heroImage}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${article.excerpt}" />
  <meta name="keywords" content="${article.seoKeywords.join(", ")}" />
  <meta property="og:title" content="${article.title}" />
  <meta property="og:description" content="${article.excerpt}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:url" content="${url}" />
  <meta name="twitter:card" content="summary_large_image" />
${HEAD_LINKS}
</head>
<body>
${NAV}

  <main>
    <section class="journal-article-hero">
      <div class="container">
        <p class="section-intro">Journal</p>
        <h1>${article.title}</h1>
        <p class="journal-article-date">${formatDate(article.publishDate)}</p>
      </div>
    </section>

    <section class="journal-article">
      <div class="container journal-article-inner">
        <div class="journal-hero-image">
          <img src="../../${article.heroImage}" alt="${article.title}" onerror="this.parentElement.style.display='none'" />
        </div>

        <div class="journal-video">
          <iframe
            src="https://www.youtube.com/embed/${article.pillarVideoId}"
            title="${article.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

        <div class="journal-body">
${renderMarkdown(article.body)}
        </div>

${ctaBlock(article.ctaType)}
${relatedProductsBlock(article.relatedProductIds)}
      </div>
    </section>
  </main>
${FOOTER}

  <script src="../../js/main.js"></script>
  <script defer src="/_vercel/insights/script.js"></script>
</body>
</html>
`;
}

function indexPage(sorted) {
  const cards = sorted
    .map((a) => {
      return `
        <a href="${a.id}/index.html" class="journal-card fade-in">
          <div class="journal-card-img">
            <img src="../${a.heroImage}" alt="${a.title}" loading="lazy" onerror="this.parentElement.style.display='none'" />
          </div>
          <div class="journal-card-body">
            <p class="journal-card-date">${formatDate(a.publishDate)}</p>
            <h3>${a.title}</h3>
            <p class="journal-card-excerpt">${a.excerpt}</p>
          </div>
        </a>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Journal — Samui Yoga Therapy</title>
  <meta name="description" content="Notes on yoga therapy, sound healing, and private practice in Bophut, Koh Samui — from Samui Yoga Therapy." />
  <meta property="og:title" content="Journal — Samui Yoga Therapy" />
  <meta property="og:description" content="Notes on yoga therapy, sound healing, and private practice in Bophut, Koh Samui — from Samui Yoga Therapy." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${SITE_URL}/journal/" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/style.css" />
  <link rel="stylesheet" href="../css/journal.css" />
</head>
<body>

  <header class="site-header" id="site-header">
    <nav class="nav container">
      <a href="../index.html" class="nav-logo">Samui Yoga Therapy</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="../index.html">← Back to home</a></li>
        <li><a href="../index.html#contact" class="nav-cta">Message Eli</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="journal-index-hero">
      <div class="container">
        <p class="section-intro">Bophut · Koh Samui</p>
        <h1>The Journal.</h1>
        <p class="journal-index-sub">Notes on yoga therapy, sound healing, and private practice — from the studio in Bophut.</p>
      </div>
    </section>

    <section class="journal-index-section">
      <div class="container">
        <div class="journal-grid">
${cards}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p class="footer-name">Samui Yoga Therapy</p>
      <p class="footer-location">Bophut · Koh Samui · Thailand</p>
      <nav class="start-footer-nav">
        <a href="../index.html" style="font-size:0.72rem;color:var(--muted);text-decoration:none;">Home</a>
        <span aria-hidden="true">·</span>
        <a href="https://body-sculpt-samui.vercel.app/" style="font-size:0.72rem;color:var(--muted);text-decoration:none;">Body Sculpt Samui</a>
        <span aria-hidden="true">·</span>
        <a href="https://mydreams-eight.vercel.app/" style="font-size:0.72rem;color:var(--muted);text-decoration:none;">Jungle Village</a>
      </nav>
      <p class="footer-copy">&copy; <span id="year"></span> Samui Yoga Therapy. All rights reserved.</p>
    </div>
  </footer>

  <script src="../js/main.js"></script>
  <script defer src="/_vercel/insights/script.js"></script>
</body>
</html>
`;
}

function build() {
  const sytArticles = articles.filter((a) => a.brand === BRAND);
  const sorted = [...sytArticles].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

  const journalDir = path.join(ROOT, "journal");
  fs.mkdirSync(journalDir, { recursive: true });
  fs.writeFileSync(path.join(journalDir, "index.html"), indexPage(sorted));

  for (const article of sorted) {
    const dir = path.join(journalDir, article.id);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), articlePage(article));
  }

  console.log(`Built journal/index.html + ${sorted.length} article page(s).`);
}

build();
