// Single source of truth for /journal content.
// scripts/build-journal.js reads this file and generates journal/index.html
// and journal/<slug>/index.html — do not hand-edit files under journal/.
//
// Field notes:
// - id: slug-safe string, becomes the URL at /journal/<id>/
// - brand: "syt" | "bss" — this repo only builds articles where brand === "syt".
//   (kept so the same file shape can be copied into the sibling BSS repo)
// - pillarVideoId: YouTube video ID of the long-form video this article supports
// - body: markdown string, rendered by the tiny parser in scripts/build-journal.js
// - ctaType: "booking" | "scan" | "membership" — picks the CTA block at the end
// - relatedProductIds: optional array of keys from PRODUCT_LINKS in
//   scripts/build-journal.js (e.g. "membership")

const articles = [
  {
    id: "why-yoga-therapy-is-not-a-vinyasa-class",
    brand: "syt",
    title: "Yoga Therapy Isn't a Vinyasa Class — Here's the Actual Difference",
    pillarVideoId: "dQw4w9WgXcQ",
    publishDate: "2026-07-01",
    heroImage: "assets/images/hero-placeholder.jpg",
    excerpt:
      "Yoga therapy in Bophut works from injury history and nervous system state, not a fixed sequence. Here's what that actually looks like in a private session on Koh Samui.",
    seoKeywords: [
      "yoga therapy Bophut",
      "sound healing Koh Samui",
      "private yoga Koh Samui",
      "yoga therapy vs vinyasa",
      "nervous system reset Samui"
    ],
    ctaType: "scan",
    body: `Most people book their first session expecting a class — a set sequence, a pace to keep up with, a room full of mats. Yoga therapy starts somewhere else entirely.

## It starts with your history, not a sequence

Before we ever move together, we talk. Injury history, what's guarded, what flares under stress, what your nervous system is actually doing day to day. A vinyasa class is built to move a room. A yoga therapy session is built around one body — yours — and what it needs that day, which is not always the same thing it needed last week.

## Why the scan comes first

Pairing a Styku 3D body scan with the first session gives us a baseline that isn't guesswork: posture, composition, range of motion, all measured before we ever touch a pose. That data shapes the session — not the other way around.

- Private, one-to-one — no room to keep pace with
- Sequenced from your scan data and your intake conversation
- Adjusted session to session, not fixed in advance
- Includes breathwork and nervous system regulation, not just poses

## What people notice first

Most clients expect to feel it in their body. What they mention afterward is usually something else — the guarding they didn't know they were doing, the breath they'd been holding without noticing. That's the part a vinyasa class was never built to find.`
  }
];

module.exports = { articles };
