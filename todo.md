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
- [ ] Set up cal.com — create service types matching the product ladder (Scan & Start, Practice Package, Transformation)
- [ ] Embed cal.com widget in start.html #book section (placeholder already in HTML)
- [ ] Embed or link cal.com from SYT index.html contact section
- [ ] Test booking flow end-to-end on mobile and desktop

## 12. Trust & Local SEO
- [ ] Add "What to expect on your first session" mini-section — reduce first-timer hesitation
- [ ] Embed Google Map for Bophut studio location
- [ ] Add local business schema markup (JSON-LD) — name, address, phone, geo, hours
- [ ] Submit or claim Google Business Profile for "Samui Yoga Therapy"
- [ ] Add FAQ schema for common questions (What is yoga therapy? Do I need experience? etc.)

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
- [ ] Add cal.com booking widget to #book section once services are linked (placeholder comment in HTML)
- [ ] Make it reachable from both BSS and SYT with consistent link text (e.g. "Start with a scan →")

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
- [ ] Define what membership unlocks that drop-in doesn't (priority, community, content, Jungle Village access)
- [ ] Build a membership page or section — keep it invitation-only in tone, not open-enrollment
- [ ] Connect explicitly to Jungle Village as the next horizon for the most committed clients

### Step 7 — Connect to Jungle Village
- [ ] Add a "Where this leads" section to the Membership page pointing to Jungle Village
- [ ] Update Jungle Village (mydreams) to reflect the full client journey — BSS and SYT as the proven on-ramps
- [ ] Ensure Jungle Village contact form/CTA is reachable from the top of the funnel (not just from the membership tier)

### Step 8 — Cross-site navigation and visual coherence
- [ ] Audit all three sites for consistent brand language (shared terms, tone, naming conventions)
- [ ] Add a shared footer strip or nav element across BSS and SYT linking to each other and to Jungle Village
- [ ] Confirm the visual thread (colours, fonts, spacing) feels like one world across all three

### Step 9 — Email funnel mirrors the journey
- [ ] Map the Mailchimp welcome sequence to the product ladder: Still Water → Scan & Start → Practice Package → Transformation
- [ ] Write at minimum: welcome email (deliver Still Water) + one follow-up (introduce Scan & Start Package)
- [ ] Build separate BSS audience sequence once BSS Mailchimp list is live

## 7. Testing & Launch
- [ ] Add real photos (hero + about portrait)
- [ ] Test on mobile, tablet, and desktop
- [ ] Check all links and CTAs work
- [ ] Run Lighthouse audit (performance, accessibility, SEO)
- [ ] Choose a hosting platform (GitHub Pages, Netlify, or custom domain)
- [ ] Deploy and verify live site
