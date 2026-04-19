#!/usr/bin/env ts-node
/**
 * extract-figma-tokens.ts
 * 
 * Run this script after connecting Figma MCP to extract design tokens
 * and populate src/styles/tokens.css
 * 
 * Usage: npx ts-node scripts/extract-figma-tokens.ts
 * 
 * Prerequisites:
 * 1. Figma MCP server configured in Claude Code
 * 2. FIGMA_PERSONAL_ACCESS_TOKEN in environment
 * 3. File keys defined below
 */

// ── FIGMA FILE REFERENCES ────────────────────────────────────
const FIGMA_FILE_KEY = 'a2Xx676U8t3nZj5AOlMeOw'
const FIGMA_ROOT_NODE = '179-2310'

// ── EXTRACTION INSTRUCTIONS FOR CLAUDE CODE ─────────────────
/**
 * When this script is run in Claude Code with Figma MCP active,
 * execute the following MCP calls in sequence:
 *
 * 1. get_variable_defs(fileKey, nodeId)
 *    → Gets all Figma Variables (colors, spacing, typography)
 *    → Map to CSS custom properties
 *
 * 2. get_design_context(fileKey, nodeId="179-2310")
 *    → Gets the full design context for the main screen
 *    → Extract: background fills, text styles, border radius, shadows
 *
 * 3. get_design_context(fileKey, nodeId="[NAV_NODE]")
 *    → Extract nav-specific tokens
 *
 * 4. get_design_context(fileKey, nodeId="[CARD_NODE]")
 *    → Extract card component tokens
 *
 * 5. get_design_context(fileKey, nodeId="[BUTTON_NODE]")
 *    → Extract button tokens
 */

// ── TOKEN MAPPING TEMPLATE ───────────────────────────────────
// After extraction, map Figma values to this structure:

const TOKEN_TEMPLATE = `
/* =============================================================
   DELTA FOR BUSINESS — Design Tokens
   Auto-extracted from Figma: ${FIGMA_FILE_KEY}
   Last updated: [DATE]
   DO NOT EDIT MANUALLY — run extract-figma-tokens.ts to refresh
   ============================================================= */

:root {

  /* ── BRAND COLORS ───────────────────────────────────────── */
  /* Extract from Figma Variables panel */
  --color-delta-navy:          /* [FIGMA: color/brand/navy] */;
  --color-delta-red:           /* [FIGMA: color/brand/red] */;
  --color-delta-white:         #FFFFFF;
  --color-delta-gray-50:       /* [FIGMA: color/gray/50] */;
  --color-delta-gray-100:      /* [FIGMA: color/gray/100] */;
  --color-delta-gray-200:      /* [FIGMA: color/gray/200] */;
  --color-delta-gray-500:      /* [FIGMA: color/gray/500] */;
  --color-delta-gray-700:      /* [FIGMA: color/gray/700] */;
  --color-delta-gray-900:      /* [FIGMA: color/gray/900] */;

  /* ── SEGMENT COLORS ─────────────────────────────────────── */
  --color-segment-individual:  /* teal — from Figma segment card */;
  --color-segment-smb:         /* teal — same family */;
  --color-segment-mid:         /* blue — from Figma segment card */;
  --color-segment-enterprise:  /* blue — same family */;

  /* ── CARD TIER COLORS ────────────────────────────────────── */
  --color-card-blue-tier:      /* gray — Blue card header */;
  --color-card-gold-tier:      /* purple — Gold card header */;
  --color-card-platinum-tier:  /* deep purple — Platinum header */;
  --color-card-reserve-tier:   /* navy — Reserve card header */;

  /* ── MEDALLION TIER COLORS ───────────────────────────────── */
  --color-medallion-silver:    /* gray-blue */;
  --color-medallion-gold:      /* amber */;
  --color-medallion-platinum:  /* violet */;
  --color-medallion-diamond:   /* deep navy */;

  /* ── SEMANTIC COLORS ─────────────────────────────────────── */
  --color-success:    /* from Figma success/green */;
  --color-warning:    /* from Figma warning/amber */;
  --color-error:      /* from Figma error/red */;
  --color-info:       /* from Figma info/blue */;

  /* ── NAVIGATION ─────────────────────────────────────────── */
  /* Extract from Nav component in Figma */
  --color-nav-bg:           /* nav background fill */;
  --color-nav-bg-scroll:    /* nav background when scrolled */;
  --color-nav-text:         /* nav link color */;
  --color-nav-text-hover:   /* nav link hover */;
  --color-nav-text-active:  /* active nav item */;
  --nav-height:             /* nav frame height (desktop) */;
  --nav-height-mobile:      /* nav frame height (mobile) */;

  /* ── TYPOGRAPHY ─────────────────────────────────────────── */
  /* Extract from Figma text styles */
  --font-display:   /* primary display font family */;
  --font-body:      /* body font family */;
  --font-mono:      'JetBrains Mono', monospace;

  /* Font sizes — extract scale from Figma text styles */
  --text-xs:    0.75rem;    /* 12px */
  --text-sm:    0.875rem;   /* 14px */
  --text-base:  1rem;       /* 16px */
  --text-lg:    1.125rem;   /* 18px */
  --text-xl:    1.25rem;    /* 20px */
  --text-2xl:   1.5rem;     /* 24px */
  --text-3xl:   1.875rem;   /* 30px */
  --text-4xl:   2.25rem;    /* 36px */
  --text-5xl:   3rem;       /* 48px */
  --text-hero:              /* extract hero H1 size from Figma */;

  /* Font weights */
  --font-weight-normal:  400;
  --font-weight-medium:  500;
  --font-weight-semibold: 600;
  --font-weight-bold:    700;

  /* Line heights — extract from Figma text styles */
  --leading-tight:   /* [FIGMA] */;
  --leading-normal:  /* [FIGMA] */;
  --leading-relaxed: /* [FIGMA] */;

  /* ── SPACING ────────────────────────────────────────────── */
  /* Extract spacing scale from Figma */
  --space-px:   1px;
  --space-0:    0;
  --space-1:    0.25rem;
  --space-2:    0.5rem;
  --space-3:    0.75rem;
  --space-4:    1rem;
  --space-5:    1.25rem;
  --space-6:    1.5rem;
  --space-8:    2rem;
  --space-10:   2.5rem;
  --space-12:   3rem;
  --space-16:   4rem;
  --space-20:   5rem;
  --space-24:   6rem;
  --space-32:   8rem;

  /* ── LAYOUT ─────────────────────────────────────────────── */
  --container-max:      1280px;
  --container-pad-x:    var(--space-6);
  --container-pad-x-lg: var(--space-8);

  /* ── BORDER RADIUS ─────────────────────────────────────── */
  /* Extract from Figma card and component corner radius */
  --radius-none: 0;
  --radius-sm:              /* [FIGMA: small components] */;
  --radius-md:              /* [FIGMA: cards] */;
  --radius-lg:              /* [FIGMA: large cards] */;
  --radius-xl:              /* [FIGMA: hero elements] */;
  --radius-full: 9999px;

  /* ── SHADOWS ─────────────────────────────────────────────  */
  /* Extract from Figma effect styles */
  --shadow-sm:    /* [FIGMA: subtle shadow] */;
  --shadow-card:  /* [FIGMA: card shadow] */;
  --shadow-nav:   /* [FIGMA: nav shadow] */;
  --shadow-modal: /* [FIGMA: modal shadow] */;
  --shadow-focus: /* focus ring style */;

  /* ── TRANSITIONS ─────────────────────────────────────────── */
  --transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base:   250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:   400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ── Z-INDEX ────────────────────────────────────────────── */
  --z-below:    -1;
  --z-base:      0;
  --z-raised:   10;
  --z-dropdown: 20;
  --z-sticky:   30;
  --z-overlay:  40;
  --z-modal:    50;
  --z-nav:      60;
  --z-toast:    70;

  /* ── BREAKPOINTS (for JS use) ───────────────────────────── */
  --breakpoint-sm:  640px;
  --breakpoint-md:  768px;
  --breakpoint-lg:  1024px;
  --breakpoint-xl:  1280px;
  --breakpoint-2xl: 1536px;
}

/* ── DARK MODE (if needed) ──────────────────────────────────── */
/* @media (prefers-color-scheme: dark) { } */
`

// ── TAILWIND EXTENSION TEMPLATE ───────────────────────────────
// After extracting tokens, extend tailwind.config.ts:

const TAILWIND_EXTENSION = `
// tailwind.config.ts additions after token extraction:
// theme.extend.colors:
{
  'delta-navy':    'var(--color-delta-navy)',
  'delta-red':     'var(--color-delta-red)',
  'delta-white':   'var(--color-delta-white)',
  'nav-bg':        'var(--color-nav-bg)',
  // ... all token colors
}

// theme.extend.fontFamily:
{
  'display': 'var(--font-display)',
  'body':    'var(--font-body)',
}

// theme.extend.fontSize — map to token scale
// theme.extend.spacing — map to token scale
// theme.extend.borderRadius — map to token radii
// theme.extend.boxShadow — map to token shadows
`

console.log('Token extraction template ready.')
console.log('Connect Figma MCP and run extraction in Claude Code.')
console.log('')
console.log('Files to populate:')
console.log('  src/styles/tokens.css')
console.log('  tailwind.config.ts (theme.extend)')
console.log('')
console.log('Figma file:', FIGMA_FILE_KEY)
console.log('Root node:', FIGMA_ROOT_NODE)
