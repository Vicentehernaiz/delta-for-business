# 03 — Design System Reference (Extracted from Figma)

> **Source:** Figma file `a2Xx676U8t3nZj5AOlMeOw`
> **Homepage node:** `242:7645` — Homepage full design (desktop 1512px, tablet 800px, mobile 392px)
> **Design system node:** `251:8690` — Typography, buttons, card components
> **Extracted:** April 2026

---

## 0. Figma MCP Extraction Protocol — MANDATORY

Before implementing ANY component, agents MUST extract the design context from Figma using the MCP connection:

```
# Step 1: Get the design context for the specific component
get_design_context(fileKey="a2Xx676U8t3nZj5AOlMeOw", nodeId="[NODE_ID]")

# Step 2: Get variable definitions for token mapping
get_variable_defs(fileKey="a2Xx676U8t3nZj5AOlMeOw", nodeId="[NODE_ID]")

# Step 3: Map extracted values to CSS custom properties in tokens.css
# NEVER hardcode hex values — always use var(--token-name)
```

### Key Figma Node References

| Section | Node ID | Description |
|---|---|---|
| **Homepage (full)** | `242:7645` | Complete homepage — desktop, tablet, mobile |
| **Design System** | `251:8690` | Typography, buttons, card components |
| **Typography Styles** | `159:1367` | All type scale definitions |
| **Button Component** | `223:5171` | 7 button variants |
| **Card Components** | `223:5269` | Personal + Business card layouts |
| **Hero Section** | `199:4488` | Hero (desktop 1512px) |
| **Authority Section** | `199:4499` | Stats + trust logos |
| **Business Plans** | `199:4577` | 4-column plan grid |
| **Plan Details** | `199:4855` | Expanded plan comparison |
| **Amex Cards Section** | `199:4671` | Credit cards showcase |
| **Medallion Section** | `199:4740` | MQD/Medallion status |
| **Footer** | `242:7545` | Multi-column footer |
| **Tablet Variant** | `242:6884` | 800px responsive |
| **Mobile Variant** | `249:7838` | 392px responsive |

---

## 1. Color Primitives (from Figma Variables)

### Brand Colors

```css
--color-delta-blue-700:    #002d59;   /* Primary navy — nav, headings, deep UI */
--color-delta-blue-600:    #003366;   /* Headings text, section titles */
--color-delta-blue-500:    #004080;   /* Body text on light backgrounds */
--color-delta-blue-300:    #0057ad;   /* Links, interactive elements */
--color-delta-blue-200:    #0066cc;   /* Hover states, active links */
--color-delta-red-400:     #c01933;   /* Primary CTA, Delta red */
--color-delta-red-100:     #e8354d;   /* Hover/lighter red accent */
```

### Neutral Scale

```css
--color-neutral-0:    #ffffff;   /* White — card backgrounds, page bg */
--color-neutral-2:    #f9fafb;   /* Off-white — CTA text on red */
--color-neutral-5:    #f2f3f5;   /* Light gray — card borders, promo bg */
--color-neutral-10:   #eaebee;   /* Dividers */
--color-neutral-50:   #dfe0e6;   /* Secondary button bg, chip bg */
--color-neutral-400:  #aaadbd;   /* Promo header bg, muted elements */
--color-neutral-500:  #9599ac;   /* Placeholder text */
--color-neutral-600:  #80859c;   /* Secondary text */
--color-neutral-700:  #6c718a;   /* Labels, small print */
--color-neutral-800:  #5d6176;   /* Dark button variant */
```

### Card Tier Colors

```css
--color-member-200:      #5970c2;   /* Blue card name color */
--color-gold-600:        #8f6c32;   /* Gold card name color */
--color-gold-400:        #b8904f;   /* Gold lighter accent */
--color-silver-200:      #6f7f8d;   /* Platinum card name color */
--color-platinum-400:    #726394;   /* Reserve card name color */
--color-platinum-50:     #b8b0ca;   /* Platinum lighter accent */
--color-diamond-100:     #97b4c8;   /* Diamond accent */
```

### Special Colors

```css
--color-aura-secondary:  #0b1f66;   /* Dark navy accent/aura */
--color-stroke-chips:    #f2f3f5;   /* Chip/tab border stroke */
```

---

## 2. Typography System (from Figma — Whitney Font Family)

### Font Family

```css
--font-display:  'Whitney Semibold', 'Whitney', sans-serif;  /* Headings, buttons */
--font-body:     'Whitney', sans-serif;                       /* Body, labels */
```

**Font weights in Figma:**
- `typography/font-family-weight/700` → Whitney Semibold (used for H1, H2-display, buttons, bold body)
- `typography/font-family-weight/500` → Whitney Medium (used for H2, H3, body, labels)

### Type Scale

| Token Name | Size | Weight | Line Height | Letter Spacing | Color | Usage |
|---|---|---|---|---|---|---|
| **Display 64** | 64px | Semibold (700→500) | 64px | -0.64px | delta-blue-600 | Hero heading (delta.com main) |
| **H1 48** | 48px | Semibold (700→500) | 58px | -0.64px | delta-blue-600 | Hero heading (Delta for Business) |
| **H2 36** | 40px | Medium (500) | 48px | -0.40px | delta-blue-600 | Section headers |
| **H3 28** | 28px | Medium (500) | 36px | -0.18px | delta-blue-900 or delta-red-500 | Card titles, subsection heads |
| **Body L 18 semibold** | 18px | Semibold (700→500) | 24px | 0.14px | delta-blue-600 | Emphasized body, section labels (EARN, KEY PERKS) |
| **Body L 18 bold** | 18px | Bold (500→700) | 28px | 0.14px | delta-blue-600 | Strong emphasis body |
| **Body Standard 16** | 16px | Medium (500) | 24px | 0.14px | delta-blue-600 | Standard body text, card descriptions |
| **Labels 14** | 14px | Medium (500) | 20px | 0.32px | neutral-700 | Small print, disclaimers, labels |
| **Button Text 16** | 16px | Semibold (700→500) | 18px | 0.32px | white or delta-blue-700 | Button labels |

### CSS Custom Properties for Typography

```css
/* Type scale */
--type-scale-64:   64px;
--type-scale-48:   48px;
--type-scale-40:   40px;
--type-scale-28:   28px;
--type-scale-18:   18px;
--type-scale-16:   16px;
--type-scale-14:   14px;

/* Line heights */
--line-height-heading-xxxl:  64px;
--line-height-heading-xxl:   58px;
--line-height-heading-xl:    48px;
--line-height-heading-m:     36px;
--line-height-heading-xs:    28px;
--line-height-body-medium:   24px;
--line-height-body-small:    20px;

/* Letter spacing */
--letter-spacing-heading-xxxl:    -0.64px;
--letter-spacing-heading-xl:      -0.40px;
--letter-spacing-heading-xxs:     -0.18px;
--letter-spacing-marketing-small:  0.14px;
--letter-spacing-marketing-x-large: 0.32px;
```

---

## 3. Spacing System (from Figma Variables)

```css
--spacing-0:    0px;
--spacing-4:    4px;
--spacing-8:    8px;
--spacing-12:   12px;
--spacing-16:   16px;
--spacing-24:   24px;
--spacing-32:   32px;
--spacing-40:   40px;
--spacing-48:   48px;
--spacing-56:   56px;
--spacing-72:   72px;
--spacing-96:   96px;
```

---

## 4. Border Radius (from Figma Variables)

```css
--radius-l:      10px;    /* Cards, promo boxes, content containers */
--radius-full:   999px;   /* Buttons, pills, chips, tabs */
--radius-button: 9999px;  /* Alias used in some button contexts */
```

---

## 5. Shadows (from Figma)

```css
/* Card shadow — used on all card components */
--shadow-card:  0px 4px 30px 0px rgba(0, 0, 0, 0.05);

/* Button shadow — used on solid buttons */
--shadow-button: 0px 2px 5px 0px rgba(12, 125, 238, 0.1);

/* Drop shadow — generic component shadow */
--shadow-drop: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
```

---

## 6. Button Component (7 Variants)

Extracted from Figma node `223:5171`. All buttons share:
- Height: 44px (standard) / 48px (large CTA)
- Padding: 12px vertical, 24px horizontal
- Border radius: 9999px (full pill)
- Font: Whitney Semibold, 16px, 18px line-height, 0.32px letter-spacing

### Button Variants

| Variant | Background | Text Color | Shadow | Usage |
|---|---|---|---|---|
| **default-red-500** | `#c01933` (delta-red-400) | `#ffffff` (white) | shadow-button | Primary CTA: "Get started", "Apply Now", "Enroll" |
| **neutral-800** | `#5d6176` (neutral-800) | `#ffffff` (white) | shadow-button | Secondary dark: alternative actions |
| **neutral-50** | `#dfe0e6` (neutral-50) | `#002d59` (delta-blue-700) | shadow-button | Secondary light: "Know More About Cards" |
| **Variant4** (delta-blue-600) | `#003366` (delta-blue-600) | `#ffffff` (white) | shadow-button | Active tab, selected state |
| **white-neutral-00** | `#ffffff` (white) | `#002d59` (delta-blue-700) | shadow-button | Ghost/white: on colored backgrounds |
| **trans-blue** | transparent | `#002d59` (delta-blue-700) | none | Text link style: "Know more" (with underline) |
| **trans-red** | transparent | `#c01933` (delta-red-400) | none | Text link style: "Apply Now", "Get in" (with underline) |

### Button Implementation Pattern

```tsx
// src/components/ui/button.tsx — Map to these variants:
interface ButtonProps {
  variant: 'primary' | 'secondary-dark' | 'secondary-light' | 'active' | 'ghost' | 'link-blue' | 'link-red';
  size: 'default' | 'large';
  children: React.ReactNode;
}

// Mapping:
// primary       → default-red-500 (delta-red-400 bg, white text)
// secondary-dark → neutral-800
// secondary-light → neutral-50 (delta-blue-700 text)
// active        → Variant4 (delta-blue-600 bg, white text)
// ghost         → white-neutral-00
// link-blue     → trans-blue (underline, no bg)
// link-red      → trans-red (underline, no bg)
```

---

## 7. Card Components

### 7.1 Personal Card (Wide Layout — Desktop)

Used in the 2-column grid on desktop (2 cards per row):

```
Container: flex-1, min-width 470px, height 650px
Padding: 32px
Background: white (#ffffff)
Border: 1px solid neutral-5 (#f2f3f5)
Border radius: 10px (radius-l)
Shadow: 0px 4px 30px rgba(0,0,0,0.05)
Gap between sections: 24px

Structure:
├── Header Row (flex, gap 24px)
│   ├── Card Image: 200 × 127-128px
│   └── Title Block (flex-col, justify-between)
│       ├── Card Name: H3 28px, tier-specific color
│       └── Annual Fee: H3 28px, delta-blue-500
├── Welcome Offer Box
│   ├── Header bar: neutral-400 bg, white text, 18px bold, py-8 px-24
│   └── Content: neutral-5 bg, p-16, gap-12
│       ├── Bonus amount: 18px semibold
│       └── Terms text: 16px medium
├── Details Row (flex, gap 24px)
│   ├── Left Column: EARN rates
│   │   ├── Section label: "EARN" — 18px semibold
│   │   ├── Rates: 16px medium
│   │   └── MQD info: 18px semibold
│   └── Right Column: KEY PERKS
│       ├── Section label: "KEY PERKS" — 18px semibold
│       └── Perks list: 16px medium
└── CTA Section (flex, justify-between, align-end)
    ├── "Know more" — trans-blue link button
    └── "Apply Now" / "Get in" — trans-red link button
```

### 7.2 Business Card (Narrow Layout)

Used in the 3-column side-by-side row:

```
Container: width 336-340px, height 1000px
Padding: 16px
Same border, radius, shadow as personal cards

Structure:
├── Card Image: full width, aspect ratio ~2102:1330
├── Title Block (flex-col, gap 16px)
│   ├── Card Name: H3 28px, tier-specific color
│   └── Annual Fee: H3 28px, delta-blue-500
├── Welcome Offer Box (same pattern as personal)
├── Details (stacked — single column)
│   ├── EARN section (gap 12px)
│   ├── MQD section (gap 12px)
│   └── KEY PERKS section (gap 12px-16px)
└── CTA Section (same pattern)
```

### 7.3 Tab Switcher (Personal / Business)

```
Container: width 800px, height ~52px
Background: white
Border: 1px solid neutral-5
Border radius: 999px (full)
Shadow: 0px 4px 30px rgba(0,0,0,0.05)
Padding: 4px
Gap between tabs: 16px

Tab (inactive): flex-1, height 44px, transparent bg, delta-blue-700 text, 20px
Tab (active): flex-1, height 44px, delta-blue-600 bg, white text, 20px, shadow-button, rounded-full
```

### 7.4 Card Name Colors

| Card | Name Color Variable | Hex |
|---|---|---|
| Blue (personal) | member-200 | #5970c2 |
| Gold | gold-600 | #8f6c32 |
| Platinum | silver-200 | #6f7f8d |
| Reserve | platinum-400 | #726394 |
| Gold Business | gold-600 | #8f6c32 |
| Platinum Business | silver-200 | #6f7f8d |
| Reserve Business | platinum-400 | #726394 |

---

## 8. Homepage Section Architecture

### Responsive Breakpoints

```
Desktop:  1512px (primary design)
Tablet:   800px
Mobile:   392px
```

### Layout Container System

```css
/* Full-bleed container */
.section-full { width: 100%; }

/* Content container (narrow) */
.container-narrow { max-width: 1024px; margin: 0 auto; }

/* Content container (wide) */
.container-wide { max-width: 1200px; margin: 0 auto; }

/* Content container (full) */
.container-max { max-width: 1448px; margin: 0 auto; padding: 0 32px; }
```

### Section Scroll Sequence (Desktop)

| # | Section | Height | Background | Content |
|---|---|---|---|---|
| 1 | **Hero** | 982px | White/gradient | "The best company for business" + 3 stat cards + logo bar |
| 2 | **Authority** | 844px | White | Trust headline + stats grid + partner logos |
| 3 | **Business Plans Overview** | 933px | White | "Delta for Business Plans" + 4-column plan grid |
| 4 | **Plan Details** | 1325px | White | Expanded 4-column comparison with benefits |
| 5 | **Delta-Amex Cards** | 1726px | White | Card showcase with tab switcher (Personal/Business) |
| 6 | **Medallion Status** | 866px | White | MQD/Medallion in business context |
| 7 | **Footer** | 418px | Dark | Multi-column footer navigation |

### Grid Patterns

**4-Column Plan Grid:**
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 32px;
max-width: 1200px;
/* Cards: ~314px each */
```

**2-Column Card Grid (Personal):**
```css
display: flex;
flex-wrap: wrap;
gap: 32px;
/* Cards: flex 1 0 0, min-width 470px → wraps to 2 per row */
```

**3-Column Card Row (Business):**
```css
display: flex;
gap: 16px;
max-width: 1048px;
/* Cards: 336-340px fixed width */
```

**Responsive Grid Behavior:**
- Desktop (1512px): 4-column plans, 2-column personal cards, 3-column business cards
- Tablet (800px): 2-column plans, 1-column cards
- Mobile (392px): 1-column everything, full-width cards

---

## 9. Stat Card Component

```
Container: 320 × 320px (desktop)
Inner: centered content

Structure:
├── Large Number: 44px tall (H2-like weight)
├── Divider: horizontal vector line
└── Supporting Text: 60px tall, body text

Pattern: 3 cards in a row with 32px gap
Content examples:
- "1st" + "in business travel survey for 13 consecutive years"
- "+275" + "destinations"
- "83.2%" + "on-time performance"
```

---

## 10. CTA Button Patterns by Context

| Context | Primary CTA | Secondary CTA | Style |
|---|---|---|---|
| **Hero** | "Find my program" (red) | "Log in" (ghost white) | Large 48px height |
| **Plan Card** | "Get started" / "Contact sales" (red) | "Know more" (neutral-50) | Standard 44px |
| **Card Section** | "Apply Now" (red full) | "Know More About Cards" (neutral-50) | Large 48px, min-w 335px, max-w 400px |
| **Card Detail** | "Get in" / "Apply Now" (trans-red link) | "Know more" (trans-blue link) | Text link with underline |
| **Footer** | "Enroll" (red) | "Contact Sales" (ghost) | Standard 44px |

---

## 11. Responsive Implementation Rules

### Agents MUST ensure:

1. **All layouts use CSS Grid or Flexbox** — no absolute positioning for content layout
2. **Breakpoints:**
   ```css
   @media (max-width: 1200px) { /* tablet-large */ }
   @media (max-width: 800px)  { /* tablet */ }
   @media (max-width: 392px)  { /* mobile */ }
   ```
3. **Grid collapse rules:**
   - 4-col → 2-col at 800px → 1-col at 392px
   - 2-col cards → 1-col at 800px
   - 3-col business cards → horizontal scroll or 1-col at 800px
4. **Typography scaling:** Use `clamp()` for headings
   ```css
   /* Example: H1 scales from 32px mobile → 48px desktop */
   font-size: clamp(2rem, 4vw, 3rem);
   ```
5. **Container padding:** 16px on mobile, 32px on tablet, auto-margins on desktop
6. **Touch targets:** All buttons minimum 44px height, all interactive elements minimum 48px tap area
7. **Images:** Use `next/image` with responsive `sizes` prop

### Tailwind Breakpoint Mapping

```
sm:   640px   (small tablet)
md:   800px   (tablet — matches Figma)
lg:   1024px  (desktop-narrow)
xl:   1280px  (desktop)
2xl:  1512px  (desktop-wide — matches Figma)
```

---

## 12. Implementation Checklist for Agents

Before building any component:

```
□ Extract design context via Figma MCP for the specific node
□ Map ALL colors to CSS custom properties — zero hardcoded hex values
□ Use Whitney font family (with system-font fallback stack)
□ Apply correct type scale from Section 2
□ Use spacing tokens from Section 3
□ Apply correct shadow from Section 5
□ Use border-radius tokens from Section 4
□ Implement all button variants per Section 6
□ Follow card patterns per Section 7
□ Ensure responsive behavior per Section 11
□ Test at all 3 breakpoints: 1512px, 800px, 392px
```

---

*Extracted from Figma file a2Xx676U8t3nZj5AOlMeOw — April 2026*
