# Design System: Surat Than Catalog

A mobile-first digital catalog for a wholesale and retail raw cloth (Than) merchant in Surat's textile industry. The fabric is the hero; the interface is a calm, warm, trustworthy frame around it.

## 1. Design Intent
- **Theme name:** "Greige & Indigo": inspired by undyed raw cloth (greige) and indigo-dyed heritage textiles.
- **Mood:** Established, honest, precise. A modern textile trading house, not a flashy online shop.
- **Principle 1:** UI colors stay muted so that fabric photos are always the most colorful thing on screen.
- **Principle 2:** Green is reserved ONLY for WhatsApp actions. If it is green, it contacts the merchant.
- **Principle 3:** Everything is designed for one thumb, on a mid-range Android phone, on a mobile network.

## 2. Color Palette

### Core
| Role | Name | Hex | Usage |
|---|---|---|---|
| Canvas | Greige | `#F6F2EA` | Page background |
| Surface | Warm White | `#FFFDF9` | Cards, sheets, search bar |
| Surface Alt | Linen | `#EFE9DD` | Image placeholders, skeletons, chips (inactive) |
| Border | Thread | `#E3DBCB` | Card borders, dividers (1px) |
| Primary | Indigo Ink | `#1B2A4A` | Headings, logo, header, selected filter chip, primary text |
| Primary Soft | Indigo Mist | `#E8ECF4` | Selected chip background tint, info banners |

### Text
| Role | Hex | Contrast on Greige |
|---|---|---|
| Text Primary | `#1B2A4A` | High (AAA) |
| Text Secondary | `#566074` | AA |
| Text Muted | `#7A8294` | Use only for non-essential captions, 14px+ |
| Text on Primary | `#FFFDF9` | AAA |

### Accents
| Role | Name | Hex | Usage |
|---|---|---|---|
| Highlight | Zari Gold | `#B8862B` | MOQ badge outline, "New Arrival" tag, small decorative rules |
| Highlight Tint | Zari Mist | `#F8EFD9` | MOQ badge background (text in `#6B4A0E`) |
| Alert | Madder Red | `#A63D2F` | "Low stock" / "Out of stock" labels only |
| Alert Tint | Madder Mist | `#F8E4E0` | Alert label background |

### WhatsApp Action (strictly reserved)
| Role | Hex | Usage |
|---|---|---|
| CTA Green | `#0E7C4A` | All "Inquire on WhatsApp" buttons (white text, passes AA) |
| CTA Green Pressed | `#0A6139` | Active/pressed state |
| CTA Green Tint | `#E3F3EA` | Secondary WhatsApp elements (e.g. "Chat" link) |

### Rules
- Never use pure `#FFFFFF` or pure `#000000`.
- Maximum 3 colors visible in any one component (excluding the fabric image).
- No gradients on UI surfaces. Flat, matte, paper-like.
- Never place colored text over a fabric photo. If a label must overlay an image, use a Linen or Indigo pill with solid background.

## 3. Typography
- **Headings / Logo:** `Plus Jakarta Sans` (600-700), a modern geometric sans with a confident feel.
- **Body / Data:** `Inter` (400-500).
- **Gujarati and Hindi:** `Noto Sans Gujarati` and `Noto Sans Devanagari`. Layout must not break when labels are in these scripts (they run taller).
- **Numbers (MOQ, GSM, width):** Inter with tabular figures.

| Style | Size / Line height | Weight |
|---|---|---|
| Page title | 24 / 32 | 700 |
| Card title | 16 / 22 | 600 |
| Body | 14 / 20 | 400 |
| Spec label | 12 / 16 | 500, uppercase, +0.04em tracking |
| Button | 15 / 20 | 600 |

Minimum text size anywhere: **12px**.

## 4. Spacing, Shape, Elevation
- **Spacing scale:** 4, 8, 12, 16, 24, 32. Screen side padding: 16px.
- **Card radius:** 14px. **Button radius:** 12px. **Chip radius:** 999px.
- **Elevation:** None, or a very soft `0 1px 2px rgba(27,42,74,0.06)`. Prefer 1px borders over shadows.
- **Touch targets:** minimum 48x48px. Primary buttons are 52px tall.

## 5. Components

### Header
- Slim, 56px, Warm White with a 1px Thread bottom border.
- Left: logo or text wordmark in Indigo Ink. Right: language toggle (EN / ગુજ / हिं) and a call icon.
- Below it: a search bar and a horizontally scrollable filter chip row. Both are sticky while scrolling.

### Filter Chips
- Scrollable single row: All, Cotton, Georgette, Rayon, Polyester, Silk, Crepe, Viscose.
- Inactive: Linen background, Indigo text. Active: Indigo background, Warm White text.
- A "Filters" chip opens a bottom sheet: fabric type, price range, width, GSM, buy type (Than / Cut meters).

### Fabric Card
- Warm White surface, 1px Thread border, 14px radius.
- **Image:** square, `object-cover`, lazy-loaded, Linen skeleton while loading. Tap opens the detail page.
- **Content order:** fabric type tag, fabric name, spec line (width / GSM), buy-type and MOQ badge, price if shown, stock status, CTA button.
- **MOQ badge:** Zari Mist background, Zari Gold border, dark gold text. Example: "MOQ 1 Than (~90 m)".
- **CTA:** full-width, 52px, CTA Green, white text, WhatsApp icon. Pressed state scales to 0.98.
- Layout: 2 columns on phones 360px and wider, 1 column below 360px, 3 columns on tablet, 4 on desktop.

### Fabric Detail Page
- Swipeable image gallery with pinch-to-zoom (texture detail matters to buyers).
- Spec table: Fabric, Composition, Width, GSM, Weave, Color/Dye status (raw / dyed), MOQ, Price per meter (Retail and Wholesale tiers), Availability.
- Sticky bottom bar: CTA Green WhatsApp button (primary) plus a smaller Call button (secondary, Indigo outline).

### Floating WhatsApp Button
- On the home screen only: bottom-right, 56px circle, CTA Green, opens a general inquiry (not product-specific).
- Must not overlap card CTA buttons: hide on scroll down, reveal on scroll up.

### Trust Strip (home, below header)
- Three compact items on Indigo Mist: "Since [year]", "GST Registered", "Surat Textile Market". One line each, icons in Indigo.

### Empty, Loading, Error States
- Skeletons in Linen. Empty search: "No fabric found. Ask us on WhatsApp, we may have it in stock." with a CTA Green button.

## 6. Layout Rules
- Single scroll column, no horizontal scrolling of the page body ever.
- Bottom-heavy interaction: primary actions in the lower half of the screen.
- Respect safe-area insets (notch and gesture bar).

## 7. Motion
- Subtle only: 150-200ms ease-out. Card press feedback, chip selection, bottom sheet slide-up.
- Respect `prefers-reduced-motion`.

## 8. Accessibility and Performance
- WCAG AA contrast on all text. Never rely on color alone for stock status; add text labels.
- Images: WebP/AVIF, fixed aspect ratio to prevent layout shift, descriptive alt text.
- Must feel fast on a 4G connection: no heavy animations, no autoplay video.

## 9. Do / Don't
- DO let fabric photos carry the color.
- DO keep copy short and in plain trade language (Than, MOQ, meters, GSM).
- DON'T use green for anything except WhatsApp actions.
- DON'T use e-commerce patterns (cart, checkout, payments). This is an inquiry catalog.
- DON'T use decorative patterns or textures behind content; they compete with the fabric.
