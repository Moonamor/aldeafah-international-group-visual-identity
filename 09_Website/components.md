# AlDeafah International Group — Website UI (Phase 2, Specs §6)

Files: `tokens.css` (design tokens, light + dark), `index.html` (homepage, Arabic RTL default with English LTR toggle, both themes; self-contained), `artifact.html` (same page as published on claude.ai).
Everything derives from the Design System tokens (`tokens.json`): official palette from Brand Facts §Palette, UI sets (surface / ink / border) as approved proposals.

## Foundations
| Token | Light | Dark | Source |
|---|---|---|---|
| surface | #FFFFFF | #101820 (Deafah Black) | DS |
| surface-raised | #F5F2EE | #1C242E | DS proposal |
| ink / ink-muted | #101820 / #5C5853 | #FFFFFF / #B6ADA5 (Deafah Grey) | DS |
| accent / on-accent | #8E732A / white | #D29F13 (Deafah Yellow) / #101820 | DS |
| border | #B6ADA5 | #3A4350 | DS |
| pattern-ink @ 25 % | #8E732A | #D6AA42 | Specs §4 |

Type: Latin `"Avenir Next", Avenir, Arial` (Avenir Next web licence unknown → Arial is the live fallback until a licence is confirmed); Arabic `"Almarai"` (OFL, Google Fonts) 300/400/700/800 — the closest open match to the logo wordmark (decision 2026-10-14).
Scale: display 48/52 (AR 48/64 · 500), headline 24/30 (AR 24/36), body 16/22 (AR 16/28), label 12/16 · 600 · letter-spacing .14em (Latin only).
Spacing: 4 · 8 · 16 · 32 · 64 px. Radius: 0 everywhere; 2 px on inputs only. Motion: 200 ms on colour/border/transform; logo never animates except fade-in; `prefers-reduced-motion` respected.

## Logo rules on the web
- Horizontal lockups: **Left** in LTR, **Right** in RTL (why both masters exist). Positive on light surfaces, NEG on dark surfaces; the hero and footer are always Deafah Black → NEG.
- Nav height 44 px, footer 52 px, hero stacked logo ≤ 320 px wide. Free zone 0.42 × symbol height is kept by the grid gaps (≥ 32 px).
- The symbol alone (verified export) is the card icon at 40 px. No recolouring, no effects.

## Components
- **Nav** — sticky, surface ground, 1 px border; links 500 weight, 2 px accent underline on hover/focus; language + theme toggles as small secondary buttons. Collapses links below 900 px (hamburger to be added by the dev team).
- **Button primary** — accent ground, on-accent text, 600 weight, 12 × 24 px padding, radius 0, 1 px border same as ground; hover brightness +8 %; focus ring 2 px accent, offset 3 px. In the hero: Deafah Yellow on black.
- **Button secondary** — transparent, ink text, Deafah Grey border; hover: accent border + text.
- **Card** — surface-raised, radius 0, 32/16 px padding, symbol icon, English name 600, Arabic name in accent, muted description; hover lifts 2 px.
- **Pattern strip** — row of whole 2 × 2 tiles (SVG `<use>`), 6.5 % width each (max 52 px), gap 2.6 %, pattern-ink at 25 % (35 % gold in the footer). Never clipped, never to the edge.
- **Booking widget** — surface-raised panel; fields: destination (text), check-in / check-out (date), guests (select), primary Search button; labels 12 px uppercase; inputs 1 px border, radius 2 px, accent focus ring. Submit handled in script (demo).
- **Stats** — 2 px accent top rule, 40 px tabular figures in accent, muted label.
- **Footer** — Deafah Black; NEG lockup; address and phone from the letterhead (digits isolated with `<bdi>` so "+" stays on the number); pattern strip; copyright.

## Photography
Calm photography with a 40 % black gradient at the bottom for text; no Haram/Kaaba imagery as decoration.

## Open items
- Avenir Next web licence (GAP: unknown) — until confirmed, Arial renders for Latin text on the live site.
- Screen gold values are the designer's official RGB set (GAP-03 closed 2026-10-14).
