# Samui Yoga Therapy — Landing Page Todo

## 1. Content Planning
- [x] Define the core value proposition (one-sentence hook for the hero)
- [x] Write the "About" blurb — story, credentials, approach
- [x] List all services offered (e.g. private sessions, group classes, therapy types)
- [x] Write pricing section
- [ ] Gather or write 2–3 client testimonials (have 1)
- [ ] Write a short FAQ section (optional)
- [x] Draft call-to-action copy (booking button, contact prompt)
- [x] Decide on contact method — WhatsApp + email

## 2. Design & Assets
- [x] Choose a color palette — ocean & jungle (deep, tide, sea, jungle, mist)
- [x] Pick fonts — Fraunces (serif), Hanken Grotesk (sans), Sarabun (Thai)
- [ ] Source or create a logo (or text-based wordmark for now)
- [ ] Gather hero image — high quality, studio or practice
- [ ] Gather about image — portrait of Eli
- [ ] Define the page sections and their order ✓ done

## 3. Project Setup
- [x] Create project folder structure (`index.html`, `css/style.css`, `js/main.js`, `assets/`)
- [x] Set up HTML boilerplate with meta tags, OG tags, and font imports
- [x] Link stylesheet and script

## 4. Build — HTML Structure
- [x] Navigation bar (logo + anchor links + sticky CTA)
- [x] Hero section (headline, subheadline, CTA button, breathing rings)
- [x] About section
- [x] Services section (cards)
- [x] Pricing section
- [x] Testimonials section
- [x] Contact / Booking section (WhatsApp + email)
- [x] Footer

## 5. Build — CSS Styling
- [x] CSS reset / base styles
- [x] Typography scale and spacing
- [x] Color variables (CSS custom properties)
- [x] Navigation styles — sticky, scrolled state, mobile menu
- [x] Hero layout — breathing ring animation
- [x] Section-by-section styling (tide flow: deep → mist → jungle → deep)
- [x] Responsive layout (mobile-first, tablet/desktop breakpoints)

## 6. Build — JavaScript / Interactivity
- [x] Smooth scroll for anchor links
- [x] Mobile hamburger menu toggle
- [x] Scroll fade-in animations
- [ ] Contact form validation (not using a form — WhatsApp/email instead)

## 8. Lead Capture & Funnel
- [x] Design and build email opt-in section — soft CTA for non-ready visitors
- [ ] Create lead magnet incentive — audio titled "Still Water" — record and upload to Mailchimp, then link delivery automation
- [x] Set up email service provider — Mailchimp selected and account active
- [x] Wire opt-in form to email list — Mailchimp action URL and honeypot field live
- [ ] Write welcome/nurture email sequence (at minimum: welcome + 1 follow-up)
- [x] Update opt-in body copy with actual audio title — "Still Water" set in HTML
- [ ] Create separate Mailchimp audience for Body Sculpt Samui (different list, different offer)

## 9. Body Sculpt Samui / Styku Transformation Engine
- [x] Write the Body Sculpt / scan story — category-of-one narrative added to About and arc sections
- [x] Build scan → movement → sound → re-scan journey arc — live in Services section
- [x] Add 130-scan, two-year data proof — referenced in About with link to Body Sculpt Samui
- [x] Integrate Body Sculpt Samui branding — teaser strip + 3 cross-links live (bodysculptsamui.vercel.app)
- [ ] Source or create before/after or data visualisation assets
- [ ] Add "Who this is for" client types to Body Sculpt Samui site (parallel to yoga page)

## 10. Digital Products — Courses & Audio
- [x] Inventory all Gumroad products: The Architect, Ground & Sound, Ashtanga Primary Series, audio work
- [x] Design a "Shop / Library" section — built in index.html, linked from nav as "Library"
- [x] Write copy for each product (title, one-line hook, what's inside)
- [ ] Add real prices to each product card (currently "Coming soon")
- [x] The Architect — linked (gumroad.com/l/zwsmt), $20, workbook + audiobook
- [ ] Update remaining cards (Ground & Sound, Ashtanga Primary Series, Studio Recordings) with live Gumroad URLs and prices
- [ ] Add audiobook / audio download listings with sample or preview (add cards as products go live)

## 11. Booking System
- [x] Decide on booking platform — cal.com selected
- [x] Set up cal.com — yoga-therapy-session, styku-scan-consultation, breathwork-session, sound-healing-session, styku-3d-body-scan live at cal.com/eli-caleb-fdhnnx
- [x] Embed cal.com popup in start.html — styku-scan-consultation
- [x] Embed cal.com popup in practice.html and transformation.html — yoga-therapy-session
- [x] Add cal.com "Book a session" as primary CTA in index.html contact section
- [x] Cal.com script loaded via main.js — active across all pages
- [x] Add cal.com bookings to BSS site — styku-3d-body-scan on nav, hero, scan package, hotels; styku-scan-consultation on contact section
- [x] Update SYT index.html general booking to samui-wellness routing calendar
- [ ] Test booking flow end-to-end on mobile and desktop

## 12. Trust & Local SEO
- [x] Add "What to expect on your first session" mini-section — reduce first-timer hesitation
- [x] Embed Google Map for Bophut studio location — update iframe src with real Place ID once Google Business Profile is claimed
- [x] Add local business schema markup (JSON-LD) — name, address, phone, geo, hours
- [ ] Submit or claim Google Business Profile for "Samui Yoga Therapy"
- [x] Add FAQ schema for common questions (What is yoga therapy? Do I need experience? etc.)

## 13. Connected Ecosystem — Three-Site Funnel
*Build order: define the products first, then build the convergence point, then wire the entry funnels toward it, then build the deeper tiers upward toward Jungle Village.*

### Step 1 — Define the product ladder (no build, decisions only)
- [x] Name and price the Scan & Start Package — 1 scan + consultation + 1 session · ฿5,000 · entry point for both BSS and SYT funnels
- [x] Define the Practice Package — 10 sessions · ฿12,000 standard / ฿10,000 member
- [x] Define the Transformation tier — 20 sessions · ฿22,000 standard / ฿18,000 member · add-on scans available separately (min. 2 weeks between scans)
- [x] Define the Membership Offer — 1 scan + 1 session/month + member discounts + community access (retreats, events, run club, hiking, newsletter, Jungle Village inside access) · ฿2,500/month · not publicly advertised — offered by Eli in the room
- [x] Additional services offered as add-ons at client request — extra scans, modalities, outcall — keeps entry packages simple and upsell in the relationship
- [x] Jungle Village connection — members get inside access to community projects, retreat spots, and Stage Two participation; not listed on any public page

### Step 2 — Build the convergence page (Scan & Start Package)
- [x] Decide where it lives — start.html in SYT repo, live at samui-yoga-therapy.vercel.app/start
- [x] Write the page: headline, what's included, product ladder, single CTA (WhatsApp to book)
- [x] Add cal.com booking widget to #book section once services are linked — eli-caleb-fdhnnx/styku-scan-consultation popup live
- [x] Make it reachable from both BSS and SYT with consistent link text — SYT featured pricing row + BSS bridge section both link to /start with ฿5,000 price

### Step 3 — Wire both entry funnels toward it
- [x] Add Scan & Start Package CTA to SYT — featured pricing row at top of pricing table, links to /start
- [x] Add Scan & Start Package CTA to BSS — bridge section after packages, links to samui-yoga-therapy.vercel.app/start
- [x] Align language across both sites — consistent "Start with a scan →" language and ฿5,000 price point

### Step 4 — Build the Practice Package tier
- [x] Create practice.html — 10 sessions, your pace, member rate callout, modalities, full ladder
- [x] Link from start.html — Practice Package row links to /practice
- [x] Update SYT index.html — Practice Pass renamed Practice Package, links to /practice

### Step 5 — Build the Transformation tier
- [x] Build transformation.html — 20 sessions, scan cadence arc, what the data tracks, membership earn section
- [x] Add Transformation to SYT index.html pricing table linking to /transformation
- [x] Wire /practice and /start ladder rows to link to /transformation
- [x] Membership earn section ends the page by raising the question without answering it

### Step 6 — Build the Membership Offer
- [x] Define what membership unlocks — priority access, community, newsletter, retreats, events, Jungle Village inside access, member rates on all packages
- [x] Build membership.html — invitation-only tone, noindex meta, no nav links, quiet hero, rates table, unlock grid, Jungle Village section
- [x] Connect to Jungle Village — dedicated section linking to mydreams-eight.vercel.app
- [x] Wire transformation.html — membership earn section links to /membership, ladder row links to /membership

### Step 7 — Connect to Jungle Village
- [x] Add a "Where this leads" section to the Membership page pointing to Jungle Village — already built in membership.html (JUNGLE VILLAGE CONNECTION section)
- [x] Update Jungle Village (mydreams) to reflect the full client journey — new "Community" section added between Proof and Staircase, naming SYT + BSS as on-ramps, with client journey cards and dark callout CTA
- [x] Ensure Jungle Village contact form/CTA is reachable from the top of the funnel — community section has direct "Start a conversation" button linking to #contact; "Studio client or community member" added as first contact form option

### Step 8 — Cross-site navigation and visual coherence
- [x] Audit all three sites for consistent brand language — naming consistent (Eli, Styku, Scan & Start, Koh Samui); fixed BSS footer which incorrectly linked to SYT Facebook page instead of samui-yoga-therapy.vercel.app
- [x] Add a shared footer strip or nav element across BSS and SYT linking to each other and to Jungle Village — SYT index.html footer now has BSS + JV links; BSS footer has SYT + JV links; JV footer has SYT + BSS links (added Step 7)
- [x] Confirm the visual thread — three deliberate aesthetics (ocean/jungle · black/lime · earthy gold) unified by consistent cross-links, shared journey language ("Start with a scan →"), and Eli's voice across all three

### Step 9 — Email funnel mirrors the journey
- [x] Map the Mailchimp welcome sequence to the product ladder: Still Water → Scan & Start → Practice Package → Transformation
- [x] Write at minimum: welcome email (deliver Still Water) + one follow-up (introduce Scan & Start Package)
- [x] Build separate BSS audience sequence once BSS Mailchimp list is live

## 7. Testing & Launch
- [ ] Add real photos (hero + about portrait)
- [ ] Test on mobile, tablet, and desktop
- [ ] Check all links and CTAs work
- [ ] Run Lighthouse audit (performance, accessibility, SEO)
- [ ] Choose a hosting platform (GitHub Pages, Netlify, or custom domain)
- [ ] Deploy and verify live site

---

## 14. Three-Site Audit — June 2026
*Findings from full cross-site code review. Ordered by priority.*

### Critical fixes (broken or invisible)
- [x] **JV** Fix broken link in Proof section (line 81 index.html) — split into two separate links: samui-yoga-therapy.vercel.app and body-sculpt-samui.vercel.app; inline styles moved to natural link styling
- [x] **JV** Add Open Graph meta tags (og:title, og:description, og:image, og:url) — uses hero image (tropical-village-rooftops.jpg) with absolute URL; also added favicon.svg
- [x] **JV** Add mobile navigation — hamburger button added to header, nav-drawer overlay with all 8 links, toggle wired in script.js; header-cta hidden at ≤860px
- [x] **BSS** Fix OG image — changed to absolute URL pointing to existing bodyscanner.jpg; added og:url

### Code cleanup (dead code, inline styles)
- [x] **BSS** Delete js/form.js — deleted
- [x] **BSS** Delete css/services.css — deleted
- [x] **BSS** Remove HTML comment on index.html line 472 — removed
- [x] **JV** Move inline styles from Proof section line 84 into a CSS class — removed entirely when link was split into two clean anchor tags

### SEO & schema
- [x] **BSS** Add JSON-LD LocalBusiness + FAQPage schema — LocalBusiness (address, geo, hours, priceRange) + FAQPage with 8 scan-specific Q&As
- [x] **JV** Add JSON-LD schema — Organization type (founder, address, sameAs links to SYT + BSS) + FAQPage with 5 investor Q&As
- [x] **JV** Add favicon — favicon.svg created (dark green + gold JV mark), linked in head
- [ ] **SYT** Claim Google Business Profile and update Google Map iframe src with real Place ID — manual action needed

### Asset gaps
- [ ] **SYT** Source hero image — studio or practice shot, high quality
- [ ] **SYT** Source about portrait — Eli
- [ ] **BSS** Create or export og-image.jpg (1200×630px, brand-consistent)
- [ ] **JV** Create og-image.jpg for social sharing

### Content gaps
- [ ] **SYT** Add 2 more testimonials (currently 1; page performs better with 3+)
- [ ] **JV** Add at least 1 testimonial — no social proof anywhere on the page
- [ ] **SYT** Update Ground & Sound, Ashtanga Primary Series, Studio Recordings — add real Gumroad URLs and prices (currently href="#" + "Coming soon")
- [ ] **SYT** Test cal.com booking flow end-to-end on mobile and desktop

### Analytics (all three sites)
- [ ] Set up basic analytics (Vercel Analytics is free and zero-config — enable in Vercel dashboard for each project)

## 14. Journal / Articles Section
**Status: SHIPPED** — new `/journal` content type, ported from the same pattern built for Body Sculpt Samui. Single source of truth in `articles-data.js` (root, `brand: "syt"`). `node scripts/build-journal.js` (or `npm run build:journal`) reads that file and generates `journal/index.html` (card grid, newest first) plus one static `journal/<slug>/index.html` per article — real per-page `<title>`/description/OG tags, YouTube pillar video embed, CTA block per `ctaType` (booking → `samui-wellness` Cal.com / scan → `styku-scan-consultation` / membership → WhatsApp), and cross-links to `start.html` / `practice.html` / `transformation.html` / `membership.html` via `relatedProductIds`. Styling in `css/journal.css` reuses the existing sage/gold/charcoal palette and Lora/Raleway fonts. One seed article shipped (`why-yoga-therapy-is-not-a-vinyasa-class`) with a placeholder video ID.

- [x] `package.json` added at repo root (didn't previously exist) with `build:journal` script
- [ ] No nav/footer link to `/journal` added on `index.html`/`start.html`/etc. yet — only reachable by direct URL. Add when ready to launch.
- [ ] Re-run `npm run build:journal` any time `articles-data.js` changes — generated `journal/` files are build output, don't hand-edit them.
- [ ] Real hero image needed for the seed article — currently points at `assets/images/hero-placeholder.jpg`, which doesn't exist yet (same gap noted above for the homepage hero); the `<img>` has an `onerror` fallback so it just hides until a real image is added.
