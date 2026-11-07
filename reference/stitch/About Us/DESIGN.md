---
name: Surat Than Catalog
colors:
  surface: '#fdf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fdf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3eb'
  surface-container: '#f1ede5'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e6e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#45464e'
  inverse-surface: '#31302b'
  inverse-on-surface: '#f4f0e8'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4f5e81'
  primary: '#041534'
  on-primary: '#ffffff'
  primary-container: '#1b2a4a'
  on-primary-container: '#8392b7'
  inverse-primary: '#b7c6ee'
  secondary: '#7f5700'
  on-secondary: '#ffffff'
  secondary-container: '#ffc565'
  on-secondary-container: '#765100'
  tertiary: '#370000'
  on-tertiary: '#ffffff'
  tertiary-container: '#5c0502'
  on-tertiary-container: '#e76d5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b7c6ee'
  on-primary-fixed: '#0a1a3a'
  on-primary-fixed-variant: '#384668'
  secondary-fixed: '#ffdead'
  secondary-fixed-dim: '#f6bd5d'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#842419'
  background: '#fdf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e6e2da'
  canvas-greige: '#F6F2EA'
  surface-warm-white: '#FFFDF9'
  surface-linen: '#EFE9DD'
  border-thread: '#E3DBCB'
  indigo-ink: '#1B2A4A'
  indigo-mist: '#E8ECF4'
  text-primary: '#1B2A4A'
  text-secondary: '#566074'
  text-muted: '#7A8294'
  text-inverse: '#FFFDF9'
  zari-gold: '#B8862B'
  zari-mist: '#F8EFD9'
  zari-text: '#6B4A0E'
  madder-red: '#A63D2F'
  madder-mist: '#F8E4E0'
  whatsapp-green: '#0E7C4A'
  whatsapp-green-pressed: '#0A6139'
  whatsapp-green-tint: '#E3F3EA'
typography:
  display-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  page-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  section-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  card-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-default:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  spec-label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption-muted:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  button-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  tabular-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The design system is structured for mobile-first wholesale and retail raw cloth (*Than*) merchants in Surat’s textile marketplace. The visual identity reflects a time-honored, dependable trading house: deliberate, tactile, and restrained. It prioritizes clarity over visual embellishment, ensuring that the physical character and weave of the fabric remain the focal point on screen.

Key brand tenets include:
- **Matte Materiality:** Inspired by natural undyed greige yarn and rich vegetable or vat indigo dyes. Surfaces adopt a paper-like, flat tactile warmth rather than digital gloss or heavy glassmorphism.
- **Trade Precision:** Clear communication of metrics essential to buyers—width in inches/cm, GSM weight, weave type, and minimum order quantities (MOQ per Than)—presented with utilitarian clarity.
- **Inquiry-Driven Clarity:** No cart, checkout steps, or transactional friction. Direct communication channels (specifically WhatsApp and direct phone calling) anchor all high-value buyer conversions.
- **Single-Thumb Ergonomics:** Interface targets, controls, and key interactions sit primarily within the bottom two-thirds of the viewport to accommodate high-velocity browsing on mid-range mobile devices under bright market lighting.

## Colors

The palette reproduces the tactile contrast between natural unbleached raw cotton (`#F6F2EA`) and deep indigo vat dyeing (`#1B2A4A`). Pure blacks (`#000000`) and pure whites (`#FFFFFF`) are prohibited to avoid harsh digital glare on reflective screens in outdoor textile yards.

### Color Governance Rules
- **The WhatsApp Color Reservation:** Green (`#0E7C4A`) is strictly isolated to WhatsApp trade touchpoints. It may never be applied to general success notifications, active filter states, checkmarks, or decorative badges. When a merchant or buyer spots green, it signifies instant inquiry routing.
- **Fabric Chromatic Neutrality:** UI containers and backgrounds remain within warm off-whites, greige, and soft linen tones. The textile photography itself must represent the sole saturated chromatic element on any catalog view.
- **Component Palette Budget:** A maximum of three UI colors can be used in any single layout module (excluding the fabric photography).
- **Surface Layering:** The primary application canvas uses Greige (`#F6F2EA`), elevated elements (cards, sheets, headers) use Warm White (`#FFFDF9`), and inert utility layers (placeholders, chips, track states) use Linen (`#EFE9DD`). Borders uniformly use Thread (`#E3DBCB`).

## Typography

The typography system pairs geometric character for headings with structural legibility for technical data.

- **Primary Structure:** `Plus Jakarta Sans` provides an authoritative yet modern stance for brand titles, card names, and high-impact action triggers.
- **Data & Density:** `Inter` handles all specs (GSM, Width, Metres, Weave) and running descriptions. Tabular numerals (`font-variant-numeric: tabular-nums`) must be activated for all inventory tallies, MOQ measurements, and pricing ranges to maintain vertical column alignment.
- **Multilingual Support:** The system requires fallback font families `Noto Sans Gujarati` and `Noto Sans Devanagari` across all styles. Line heights are tuned to accommodate vertical conjunct characters without clipping ascenders or descenders when switching to Gujarati or Hindi translations.
- **Size Floor:** No typography element may be rendered smaller than `12px` under any circumstance.

## Layout & Spacing

The layout is designed for single-column mobile reading that flexes into multi-column grid viewports on larger devices without shifting layout patterns or breaking reachability.

### Grid & Breakpoints
- **Compact Mobile (<360px):** Single-column fabric feed with full-width cards, edge gutters of `12px`, and a screen margin of `12px`.
- **Standard Mobile (360px - 767px):** 2-column balanced fabric grid with `12px` (`0.75rem`) gutters and `16px` (`1rem`) screen margins.
- **Tablet (768px - 1023px):** 3-column fabric grid with `16px` gutters and `24px` margins.
- **Desktop (1024px+):** 4-column structured grid centered within a maximum width constraint of `1200px`, with `24px` (`1.5rem`) gutters and `32px` (`2rem`) outer margins.

### Layout Guardrails
- **Scroll Rules:** Content flows strictly on a single vertical axis. Horizontal body scrolling is forbidden. Single-row horizontal swipe is permitted exclusively for categorized chip filters and product image galleries.
- **Touch Reachability:** Action centers are aligned to the thumb sweep zone. Primary actions (WhatsApp chat, calling, specification queries) anchor to sticky lower viewports on mobile viewports.
- **Safe Area Insets:** Fixed bars, sticky actions, and floating trigger buttons must respect top notch cutouts and bottom iOS/Android navigation swipe bars (`env(safe-area-inset-bottom)`).

## Elevation & Depth

The design system uses paper-like planar layering instead of high-contrast drop shadows. Depth is communicated primarily through structural borders and flat surface changes.

- **Primary Structure:** Rely on `1px solid #E3DBCB` (Thread) borders for card perimeters, dividing segments, sheet borders, and header separations.
- **Ambient Elevation (Floating Surfaces):** High-priority floating surfaces (sticky headers, bottom sheets, and the floating contact node) utilize a low-intensity, warm indigo-tinted shadow:
  - `0 1px 2px rgba(27, 42, 74, 0.06)` for sticky elements and cards.
  - `0 4px 16px rgba(27, 42, 74, 0.08)` for floating inquiry buttons and bottom overlays.
- **Surface Stacking:**
  1. Base: Greige (`#F6F2EA`) canvas.
  2. Level 1: Warm White (`#FFFDF9`) cards, elevated rows, and search containers.
  3. Level 2: Warm White (`#FFFDF9`) floating sheets and navigation panels bordered by Thread (`#E3DBCB`).

## Shapes

The shape system blends structured trade utility with soft, accessible handling:

- **Cards:** Defined at `14px` border radius (`rounded-lg`), softening the textile boundary while maintaining structured grid density.
- **Buttons:** Standardized at `12px` border radius (`rounded-md` / `rounded`), presenting a solid, tactile action block that fits thumb targets.
- **Chips & Tags:** Fully circular / pill-shaped (`9999px`), ensuring secondary metadata is easily distinguished from actionable buttons and cards.
- **Input Fields:** Styled with `12px` corner curvature, mirroring action button geometry for visual cohesion across forms and search fields.

## Components

### Buttons
- **Primary WhatsApp Inquire CTA:**
  - Height: `52px` fixed touch height.
  - Corner radius: `12px`.
  - Surface: CTA Green (`#0E7C4A`); active/pressed state switches to `#0A6139` with a subtle `transform: scale(0.98)` feedback transition (150ms ease-out).
  - Typography: Plus Jakarta Sans 15px/20px, Semi-Bold (`600`), Text Inverse (`#FFFDF9`).
  - Iconography: 20px WhatsApp brand vector aligned left of the label.
- **Secondary Call / Dial Action:**
  - Height: `52px` or `48px`.
  - Corner radius: `12px`.
  - Surface: Transparent with 1.5px Indigo Ink (`#1B2A4A`) border and text. Pressed state fills with Indigo Mist (`#E8ECF4`).
- **Touch Target Floor:** All interactive controls maintain a minimum bounding box of `48px x 48px`.

### Fabric Cards
- **Geometry & Skin:** Warm White surface (`#FFFDF9`), 1px Thread border (`#E3DBCB`), 14px border radius.
- **Media Box:** 1:1 square aspect ratio image container. Utilizes Linen (`#EFE9DD`) skeleton state while images load progressively. Overlays on images are strictly limited to opaque solid pills (Linen or Indigo); no bare colored text over imagery.
- **Data Hierarchy:**
  1. Fabric category tag (spec label style).
  2. Fabric name in Indigo Ink (Card title style, 16px/22px, Semi-Bold).
  3. Spec metadata line (e.g., `44" Width • 120 GSM • Plain Weave`) in Text Secondary (`#566074`).
  4. Minimum Order Quantity (MOQ) Badge.
  5. Stock status indicator.
  6. Direct WhatsApp CTA button (full card width).

### Chips & Filter Pills
- **Geometry:** Height `36px`, border radius `9999px`, horizontal padding `14px`.
- **Inactive State:** Linen background (`#EFE9DD`), 1px Thread border (`#E3DBCB`), Indigo Ink text (`#1B2A4A`).
- **Active State:** Indigo Ink background (`#1B2A4A`), Warm White text (`#FFFDF9`), Thread border omitted.
- **Behavior:** Sits in a horizontally scrollable strip below the sticky search bar with momentum scrolling and hidden scrollbars.

### Badges & Status Indicators
- **MOQ Badge:** Background Zari Mist (`#F8EFD9`), 1px border Zari Gold (`#B8862B`), text in Dark Gold (`#6B4A0E`). Placed directly adjacent to trade terms (e.g., `MOQ: 1 Than (~90m)`).
- **Stock Alert:**
  - In Stock: Indicated with subtle textual metadata or clean Linen badges.
  - Low / Out of Stock: Background Madder Mist (`#F8E4E0`), border and text in Madder Red (`#A63D2F`). Green is never used for stock status.

### Form Inputs & Search Bar
- **Dimensions:** Search bar height `48px`, Warm White surface (`#FFFDF9`), 1px Thread border (`#E3DBCB`), corner radius `12px`.
- **Focus State:** 1.5px Indigo Ink outline (`#1B2A4A`), zero elevation jump.
- **Placeholder:** Text Muted (`#7A8294`) at 14px Inter.

### Header & Trust Strip
- **App Header:** 56px height, Warm White canvas, 1px Thread bottom border. Houses the trade mark in Indigo Ink, localized script switcher (`EN` / `ગુજ` / `हिं`), and direct dial icon.
- **Trust Strip:** Positioned directly below the header. Surface tinted in Indigo Mist (`#E8ECF4`), featuring three concise business signals: `Since [Year]`, `GST Registered`, and `Surat Textile Market`. Text and iconography set in Indigo Ink (`#1B2A4A`).

### Floating WhatsApp Action
- **Position:** Fixed at bottom-right viewport (16px inset from edges, clearing bottom safe areas).
- **Dimension:** 56px circular floating action button, CTA Green (`#0E7C4A`), displaying the WhatsApp monogram.
- **Motion Behavior:** Auto-hides on scroll-down to prevent occlusion of card-level inquiry buttons, and animates back in on scroll-up (200ms ease-out).