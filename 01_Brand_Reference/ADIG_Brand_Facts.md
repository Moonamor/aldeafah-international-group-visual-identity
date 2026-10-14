# Al Deafah International Group — Brand Facts (Phase 0)

Reference sheet for any agent or designer working on the Al Deafah International Group (ADIG) identity. Every value below was read from the designer's original files; the source file (and page where relevant) follows each line. Nothing here is proposed or invented. Items marked **GAP** are not defined anywhere in the source files and need a decision before use.

File names are the originals; the `Folder__` prefix is the upload naming only. "Manual" = `Branding manual AlDeafah International Group.pdf` (34 pp). "HR manual" = `Branding manual AlDeafah International Group Hotels and Resorts_final.pdf` (35 pp).

## 1. Brand structure

- Branded House: one master brand, sub-brands differentiated by a determinator tagline and one decorative colour each. Logo, typefaces, elements and rules are otherwise identical. Source: Manual pp. 4–6; `Brand structure AlDeafah International Group.pdf`.
- Sub-brand logotypes (Hotels & Resorts, Umrah Services, Transportation) exist only as a future sheet: `Final Al Deafah Logotypes Company Structure Future Final.pdf` and the four trademark PDFs. **Per project decision they are not treated as existing.**
- Sub-brand colour assignment on the manual's palette page: International Group = Black/Grey/Yellow; Hotels & Resorts = Dark Blue/Blue; Umrah Services = Dark Green/Green; Transportation = Dark Red/Beige (column headings). Source: Manual p. 14; HR manual p. 13.

## 2. Logotype

### 2.1 Elements and colour
- Three elements: Arabian-horse symbol, Arabic name مجموعة الضيافة العالمية, English line AL DEAFAH INTERNATIONAL GROUP. Source: Manual p. 8.
- Symbol and English line: gradient gold (CMYK) or gold ink (Pantone 871 C). Arabic name: always black, or white in negative versions. Source: Manual p. 8; master files.
- **Gradient gold** (CMYK masters, axial, left→right across the symbol): stop 0 = C16 M32 Y82 K4, stop 1 = C36 M43 Y89 K29 (rounded from 0.1641/0.3164/0.8164/0.0430 and 0.3555/0.4258/0.8945/0.2891). Source: `AI__AlDeafah-International-Group-CMYK.ai` shading function; identical in all CMYK logo masters and in `ADIG_decor_pattern_CMYK.ai`.
- **Solid gold**: spot PANTONE 871 C at 100 %, Lab 50.2 / 2 / 24. Source: `…-SOLID GOLD.ai` separation; ASE file.
- **Logo black** (Arabic name in CMYK/SOLID GOLD; whole logo in BLACK): CMYK 0/0/0/100, not the palette's rich Deafah Black. Source: content streams of the CMYK, SOLID GOLD and BLACK masters.
- **Logo white** (NEG and WHITE versions): CMYK 0/0/0/0. Source: `…-NEG-CMYK.ai`, `…-WHITE.ai`.
- Embedded working profile in every .ai master: Coated FOGRA39 (ISO 12647-2:2004). Source: ICC stream in the masters.
- The manual states RGB versions exist (p. 9). The designer's official RGB PNG set (12 files: stacked/Left/Right × CMYK, NEG-CMYK, SOLID GOLD, BLACK, WHITE, supplied 2026-10-14) is the screen reference. Measured values: gradient gold #D6AA42 (stop 0) → #8E732A (stop 1) with the 18 intermediate stops sampled per position (build/rgb_gradient_map.json); SOLID GOLD on screen #BC9639; logo black #000000; logo white #FFFFFF. Geometry of the RGB files is pixel-identical to the .ai masters (overlay check). **GAP-03 closed.**

### 2.2 Versions (file set)
Stacked (default), Left (symbol left of the name) and Right (symbol right of the name), each in: CMYK, NEG-CMYK, SOLID GOLD, NEG-SOLID GOLD, BLACK, WHITE → 18 .ai + 16 PDF (PDF set lacks Left_WHITE and Right_WHITE … see inventory). Source: `Logo/AI`, `Logo/PDF`; Manual pp. 10–11.
- Manual names the versions `…_POS_CMYK`, `…_Left_POS_SOLID_GOLD` etc.; the files drop "POS" and mix "-" and "_". Source: Manual pp. 10–11 vs file names.
- Stacked logo is the default; Left/Right only "when more practical or pleasing". Source: Manual p. 11.

### 2.3 Geometry (measured in the masters; proportions are what matter)
- Stacked master artboard 210 × 210 mm; logo bounding box 142.5 × 116.0 mm (ratio 1.23 : 1). Symbol 87.2 × 88.3 mm; Arabic name height 14.2 mm (0.161 × symbol height); English line height 4.9 mm; gap symbol→Arabic 5.3 mm; gap Arabic→English 3.3 mm. Source: `AI__AlDeafah-International-Group-SOLID GOLD.ai`.
- Horizontal masters artboard 279.5 × 110 mm; symbol 61.0 × 61.8 mm; Arabic 14.2 mm high; English 4.9 mm. Left lockup: symbol→text gap 10.8 mm, total width 214.3 mm. Right lockup: gap 4.8 mm, total width 208.3 mm. **Note:** the two lockups are not mirror images; the Right version sits 6 mm tighter. Source: `…-Left-SOLID GOLD.ai`, `…-Right_SOLID GOLD.ai`.
- Path counts: symbol + English line = 37 paths; Arabic name = 24 paths (text is outlined; no live fonts in any logo master). Source: all logo masters.

### 2.4 Rules
- **Free zone ("minimum margin")**: a square equal to the height of the horse's head, on all sides, and the same distance from page/screen edges. Measured on the manual's diagram: 1 unit = symbol height ÷ 2.37 ≈ 0.42 × symbol height ≈ 0.26 × stacked-logo width. Source: Manual p. 9 (rule text), p. 9 diagram (measurement).
- Full-colour version whenever possible; monochrome versions only when full colour is not possible. Source: Manual p. 9.
- Do's and don'ts (p. 12): allowed on white, black, and on calm photographic backgrounds with enough contrast; not allowed on busy photos or on patterned backgrounds. Source: Manual p. 12 (visual examples; no text beyond the heading).
- **GAP:** no minimum size (mm or px) is defined.
- When in doubt, consult Head Office. Source: Manual pp. 9, 12.


### 2.5 Minimum size (decision 2026-10-14 — the manual defines none)
| Lockup | Print | Screen | English line at that size |
|---|---|---|---|
| Stacked | 30 mm wide | 120 px wide | ≈ 1.0 mm / 4.1 px |
| Left / Right | 45 mm wide | 200 px wide | ≈ 1.0 mm / 4.6 px |
| Symbol alone | 10 mm | 40 px | — |
Below these sizes use the symbol alone; never shrink the English line. Basis: the English line is 3.4 % of the stacked width (4.91 mm of 142.5 mm). Source: proposal in ADIG_Phase2_Specs §8, approved by Badr 2026-10-14.

## 3. Colour palette

Source for names, CMYK, Pantone, RGB, HEX: Manual p. 14 and HR manual p. 13. Source for ASE values: `Aldeafah_Internatinal_Group_colors.ase` (group "Al Deafah Colours", all global process swatches except Pantone 871 C spot).

| Name (manual) | ASE name | CMYK (manual) | CMYK (ASE) | Pantone (manual) | RGB (manual) | HEX (manual) | Status |
|---|---|---|---|---|---|---|---|
| Deafah Black | ADIG BLACK | 30/30/30/100 | 30/30/30/100 | Black 6 C | 16/24/32 | #101820 | consistent |
| Deafah Dark Blue | ADIG DARK BLUE | 100/76/28/13 | 100/76/28/13 | 4154 C | 14/65/116 | #0E4174 | consistent |
| Deafah Dark Green | ADIG DARK GREEN | 90/52/85/70 | 90/52/85/70 | 627 | 19/50/43 | #13322B | consistent |
| Deafah Dark Red | ADIG DARK RED | 16/100/99/7 | 16/100/99/7 | 3517 C | 193/0/22 | #1b4379 | **HEX wrong in both manuals** (#1B4379 is a blue); RGB 193/0/22 = #C10016 |
| Deafah Grey | ADIG GREY | 30/27/31/7 | 30/27/31/7 | Warm Gray 4 | 182/173/165 | #B6ADA5 | consistent |
| Deafah Blue | ADIG BLUE | 30/27/31/7 (Group manual) / 82/31/6/0 (HR manual) | 80.7/31.9/5.9/0.2 | Warm Gray 4 (Group) / 6122 (HR) | 182/173/165 (Group) / 0/139/196 (HR) | #B6ADA5 (Group) / #008BC4 (HR) | **Group manual copied Grey's values by mistake**; HR manual + ASE are the true values |
| Deafah Green | ADIG GREEN | 51/17/57/2 | 51.1/17.0/57.4/1.8 | 4206 C | 141/174/129 | #8DAE81 | consistent |
| Deafah Beige | ADIG BEIGE | 12/29/55/2 | 12.3/29.3/55.0/2.1 | 7508 C | 225/184/127 | #E1B87F | consistent |
| Deafah Yellow | ADIG YELLOW | 12/29/55/2 | 17/36/97/6 | 7555 C | 210/159/19 | #D29F13 | **CMYK in both manuals duplicates Beige**; ASE 17/36/97/6 matches the RGB/HEX |
| Al Deafah Gold | PANTONE 871 C | – (print only, metallic) | spot, Lab 50.2/2/24 | 871 C | – | – | consistent |

Rules:
- Group main colours: Deafah Black, Deafah Grey, Deafah Yellow. Any palette colour may serve as a secondary accent; keep 4–5 colours per project. Source: Manual p. 14.
- All colours except Al Deafah Gold may be tinted down to a minimum of 20 %. Source: Manual p. 14.
- Al Deafah Gold is print-only metallic (signage, packaging, folders), used with restraint for details: Kufic pattern, décor, capitals. Gold leaf may replace it on important items. Source: Manual p. 14.
- Pantone numbers 4154 C, 4206 C, 6122, 3517 C are outside the classic Pantone range; verify against a current Pantone guide before ordering. (Observation, not a source statement.)
- Grey used on the built business cards: CMYK 0/5/10/40 (digital) and PANTONE P 178-2 C (PMS version) — neither is a palette colour. Source: business-card IDML files.

## 4. Typography

Source: Manual pp. 22–23; HR manual pp. 21–22.

| Role | English | Arabic |
|---|---|---|
| Headlines (≥ 18 pt) | Avenir Next Regular | Noto Sans Arabic |
| Introductions / preambles (12/18 or 16/22) | Avenir Next Ultra Light | Noto Sans Arabic |
| Body text (9/12 or 12/16) | Times Regular | Times Arabic |
| Captions (7/9 or 8/10) | Times Bold | Times Arabic |
| Fallback | Arial | Arial Arabic |

- Only Times Regular and Times Bold are permitted from Times; other Avenir Next / Noto Sans Arabic weights allowed "sensibly and with restraint". Point sizes are print recommendations, not requirements. Source: Manual pp. 22–23.
- Fonts in the package: `Avenir Next.ttc` (12 styles: Ultra Light, Regular, Medium, Demi Bold, Bold, Heavy + italics; Apple system build, no licence text) and `HelveticaNeue.ttc` (14 styles; Linotype licence notice; not mentioned in any manual, used only in a leftover text frame). No Arabic glyphs in either. Noto Sans Arabic, Times and Times Arabic are not in the package. Source: TTC name tables.
- **Contradiction:** the built Group stationery (letter, envelopes, folder) embeds **Almadinah-Light** for Arabic, which the Group manual never names; the HR manual names Almadinah Light only for hotel names. Source: font lists of `…_Letter_CMYK.ai`, `…_DLEnvelop_CMYK.ai`, `…_C5 Envelop_CMYK.ai`, `…_Document folder_CMYK.ai`; HR manual p. 9.
- Built business cards use Avenir Next Bold 7 pt (name), Demi Bold 5.5 pt (URL), Ultra Light 5.5 pt (details); Arabic name on the card is outlined artwork. Source: business-card IDML and PDF font lists.
- PowerPoint template uses Avenir Next and Arial on top of the default Office theme (Calibri; theme colours 4472C4/ED7D31… are Office defaults, not brand colours). Source: `AlDeafah_International_Group.pptx` theme XML.

## 5. Decorative pattern (square Kufic "Al Deafah")

- The word "Al Deafah" in square Kufic (bannai), repeated into surfaces or stripes. Source: Manual p. 16.
- Versions: SOLID GOLD (Pantone 871 C), CMYK (same gradient gold as the logo, clipped to the pattern), BLACK (K100), WHITE (CMYK 0/0/0/0); CMYK and WHITE also used at 25 % tint. Source: pattern masters; Manual p. 17.
- Master artboard 210 × 299.1 mm, 14 × 20 tiles, 9 paths per tile. Tile pitch 14.92 mm = 13.85 mm ink square + 1.07 mm gutter; the Kufic unit stroke is 1.065 mm, i.e. the tile is a 13 × 13-unit grid and the repeat is 14 units. Source: `ADIG_decor_pattern_SOLID GOLD.ai` geometry.
- Rules: every Kufic square stays intact (never crop through one); minimum 2 × 2 squares; a stripe is at least 2 squares high/wide; always a margin around the pattern, never bled to the edge. Source: Manual pp. 18–19.
- Backgrounds (p. 20): gold or black pattern on black/white/gold/calm photo = yes; on busy pattern photos = no. Source: Manual p. 20.
- **Observation:** built stationery runs the pattern inside a black band that bleeds off the page edge (letter, correspondence card, envelopes) and crops tiles at the band edge; the manual's "margin, no bleed" rule is therefore applied to the pattern, not to its black band. Source: `…_Letter_CMYK.ai` etc.

## 6. Stationery as built (Group files; mm from trim edge)

- **Letterhead** A4 210 × 297, bleed 2 mm: black band x 0–24.3 (bleeds) carrying a gold pattern stripe; stacked logo top-right (symbol 32.5 × 33.4 at x 155.6–188.1, y 9.3–42.7; English line y 49.3–53.2, width 51.3); bilingual footer address + QR (10.3 mm) at x 187.3–197.7, y 247–257.3. Fonts Avenir Next Regular + Almadinah Light. Source: `AlDeafah International Group_Letter_CMYK.ai`.
- **Correspondence card** A6 105 × 148.5, bleed 2 mm: black band x 0–14.4 with pattern; stacked logo top-right (symbol 23.4 × 23.9 at y 5.6–29.5; English line y 33.5–36.9); footer Avenir Next Regular 6 pt (4 lines, from y 127.9) + QR 11.7 mm. Source: `…_Correspondence Card_CMYK.ai`.
- **Envelopes**: files are 230 × 110 (named DL; standard DL is 220 × 110) and 230 × 162 (C5, standard 229 × 162), bleed 3 mm; full black ground; Left lockup in NEG (symbol 23.9 mm) at x 6.8, lower-left; address in white below; vertical pattern stripe at the right edge. Source: `…_DLEnvelop_CMYK.ai`, `…_C5 Envelop_CMYK.ai`.
- **Business card** 90 × 50, bleed 3 mm, 2 sides. White version: Left lockup CMYK at x 3.7–84 (symbol 24.4 mm), name/title/contacts in Avenir Next, grey 0/5/10/40; back black with pattern stripes + QR. PMS version: black card, Pantone 871 C gold, Pantone P 178-2 C grey. Source: the two business-card PDFs/IDML.
- **Document folder** 564 × 420.7 spread (A4 folder, 2 pages): black stock, Al Deafah Gold, horse photograph, pattern panel. Source: `…_Document folder_CMYK.ai`; Manual p. 27.
- **Office sign** 210 × 210 master: black ground, stacked NEG logo (symbol 87.4 mm wide) with white Arabic. Source: `…-Office sign-BLACK.ai`; Manual p. 32.
- **Flags** 77 × 300 master (4 artboards): white/black grounds with pattern top and bottom + stacked logo; two all-pattern variants. Source: `AlDeafah-International-Group-Flags.ai`; Manual p. 31.
- **Name badge** master 105 × 148.5 with three 96 × 26 mm badge variants (gold, outline). Source: `ADIG Name badge.ai`; Manual p. 28.
- **Email signature**: Group source `Mail Sign.indd` was not uploaded (InDesign only); HR preview shows layout: text block, logo, contact lines, pattern strip at the bottom, on Dark Blue. Source: `ADIG_HR Mail Sign_preview.pdf`; Manual p. 30.
- **PowerPoint**: 4 slides, 16:9 (33.87 × 19.05 cm), 11 layouts, unbranded Office theme. Source: `AlDeafah_International_Group.pptx`.
- **Roll-up** 800 × 2000 mm, raster-heavy, no creator metadata; uses the stacked NEG logo plus a Umrah sub-brand lockup and hotel photos. Not from the identity designer. Source: `ROLLUP.pdf`.
- **Website**: proposal (13 pp) and one sample page only; no UI system. Source: `ALDEAFAH-WEB-PROPOSAL.pdf`, `WEB-SAMPLE.pdf`.

## 7. Files that could not be used as intended
- `Mail Sign.indd`, `ADIG_HR_Directory_A4.indd`, `ADIG_HR_Menues.indd`, `ADIG HR_Business_Card.indd`, `ADIG_HR Mail Sign.indd`: InDesign only (not uploaded; unreadable here). PDF previews exist for all but the Group mail signature.
- Business-card IDML files contain a leftover hidden story in Turkish from another client ("ADM OTEL YÖNETİMİ…", Helvetica Neue Light 9 pt). Delete before reuse.
- `ADIG_decor_pattern_CMYK.ai` reads with "art outside its artboards" warnings in VectorCraft; the PDF part is complete.

## 8. Gaps (not defined in any source) — status 2026-10-14
Closed by Phase 2–3 builds (see `ADIG_Phase2_Specs.md` for the spec of each): C4 envelope · DL 220 × 110 · Group email signature · social-media kit (SVG/PNG + Canva import PDFs) · packaging bags S/M/L · website UI tokens and components · logo animation (sound brief only) · Canva kit · PowerPoint theme (8 variants) · Arabic typeface = Almarai (decision 2026-10-14, replaces the manual's Noto Sans Arabic) · corrected colour sheet · minimum logo size (§2.5).
Still open (need an outside input): Avenir Next web-font licence · printer confirmation of the DL size actually used · factory dieline for the bags · sound production (brief delivered) · photography set for the Property templates.

## 9. Phase 3 — Canva (as built, 2026-10-14)
- Connector bound to the personal Pro team (not the education team); Brand Kit "مجموعة الضيافة العالمية" id `kAHX_PTPweE`; brand root folder `Deafah_brand` (`FAHYA4eDjc0`) with `01_Logo_PNG`, `01_Logo_SVG`, `02_Symbol`, `03_Pattern`, `04_Profile_Covers` uploaded by Badr; eight connector-visible assets: logos CMYK `MAHYA5DYVtE`, NEG-CMYK `MAHYA4nkXYI`, Left `MAHYAw_6YrI`, Left NEG `MAHYA6HxQ84`, Right `MAHYAxcUxko`, Right NEG `MAHYA4d5MEQ`; pattern blocks CMYK `MAHYAxTSq7o`, SOLID GOLD `MAHYA9pEJ-U`.
- Social templates: 32 import PDFs (4 formats × 8 themes × 5 pages) built in `build/canva/build_canva.py` from the official PNG logos and pattern blocks; composition and theme table in `ADIG_Brand_Guidelines_AR.md` §7.1–7.2. Themes = the 8 PowerPoint variants.
- Public import host: GitHub `Moonamor/aldeafah-international-group-visual-identity` (exports only; the .ai masters stay private).
- Import route that works: PPTX from the repo's raw URL (`11_Canva/Import_PPTX/<format>/…`) → Canva imports at 96 px/in (720 px wide) → `resize-design` to the exact size → publish. PDF import breaks Arabic into presentation-form glyphs (not editable correctly) — never use PDF for Arabic templates.
- As built 2026-10-15: 32 Brand Templates published (`ADIG_Social_<Portrait|Square|Story|Landscape>_<Default|Green|Red|Blue>_<Light|Dark>`, 5 pages each: Announcement, Offer, Property, Seasonal, pre-publish checklist); 8 PowerPoint decks imported as Canva presentations (1920×1080, 16 slides) in `Deafah_brand/06_Presentations` (`FAHYBUpN_H4`); raw imports and tests in `Deafah_brand/_Imports_720_and_tests` (`FAHYBb2wSUs`, safe to delete).
- Brand check (Portrait Red Dark, read-only): every fill/text colour is a palette or approved theme value (#C10016, #A3000F, #E1B87F, #FFFFFF, #101820, UI border #3A4350); logo = official NEG PNG; pattern = whole 2×2 blocks; Arabic and Latin each use one font reference throughout. The connector does not expose font family names, so the font check is by consistency, not by name.
- Connector limits found: UI uploads/folders invisible to the connector (only files uploaded individually or by the connector); `edit-design` cannot set a font family (new text gets Canva's default), draw gradients or effects; `generate-design` ignores composition briefs; `upload` from this sandbox is blocked by the egress policy, so public-URL import is the working route.
