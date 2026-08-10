# Design

## Theme

Light only. White ground, a deep desaturated navy as the single trust accent (reserved for CTAs and small marks, never as a section background), warm-neutral-cool grays for section rhythm. Strategy: restrained — tinted neutrals + one accent used deliberately.

## Color (OKLCH)

```css
--bg:          oklch(1.000 0.000 0);
--surface:     oklch(0.975 0.004 250);
--border:      oklch(0.882 0.008 250);
--ink:         oklch(0.160 0.020 255);
--muted:       oklch(0.480 0.015 255);
--primary:     oklch(0.320 0.100 255);
--primary-hover: oklch(0.260 0.100 255);
--primary-ink: oklch(1.000 0.000 0);
--accent-tint: oklch(0.950 0.020 255);
--whatsapp:    #25D366;
```

`--whatsapp` is used only as the small icon glyph inside the CTA, never as a fill — the brief is explicit that blue carries trust, not WhatsApp green. Contrast checked: ink/bg ≈ 18:1, muted/bg ≈ 6.9:1, primary-ink/primary ≈ 11:1.

## Typography

- **Display / headings**: Newsreader (serif, via next/font/google) — editorial, authoritative, signals "established firm" rather than "template." Weight 500/600.
- **Body / UI**: DM Sans — carried over from the original, clean and neutral, pairs well against the serif on a contrast axis.
- Scale (mobile-first):
  - Hero H1: `clamp(2rem, 4vw + 1.25rem, 3.25rem)`, Newsreader 500, `text-wrap: balance`.
  - Section H2: `clamp(1.5rem, 2.5vw + 1rem, 2.25rem)`, Newsreader 500.
  - Body: 16–17px / 1.7, DM Sans 400.
  - Small/labels: 13–14px, DM Sans 500, minimal or no letter-spacing (no all-section-eyebrows).

## Layout

- Max content width 1200px; body copy capped near 60ch.
- Generous vertical rhythm: 112–144px between sections on desktop, 64–72px on mobile — whitespace does the separating, not borders.
- Sections alternate `--bg` / `--surface`, no hairlines needed between most of them.

## Components

- **Cards / rows**: hairline `--border`, radius 10px, no shadow at rest. On hover, a soft shadow (≤8px blur) may appear — never combined with a heavier border, never both border-color change AND heavy shadow.
- **Buttons**: radius 8px, min-height 48px. Primary = `--primary` fill / white text, used identically everywhere (hero, contact, sticky mobile bar). Secondary = white fill, 1.5px `--primary` border.
- **Hero**: editorial split (headline/CTA left, framed image right on desktop; stacked on mobile) — not full-bleed image with dark overlay and centered text.
- **Services**: editorial rows/columns with a small inline icon, not uniform icon-in-colored-circle cards repeated identically.
- **FAQ**: accordion with `aria-expanded`, `aria-controls`, chevron rotation, reduced-motion-safe.
- **Sticky mobile CTA**: thin bar pinned to the bottom on small viewports only, single WhatsApp button — desktop stays clean (no floating bubble).

## Motion

- Hover-only transitions (border/shadow/color), 150–200ms ease-out. No entrance/scroll-triggered animation.
- `prefers-reduced-motion: reduce` disables shadow/scale transitions, keeps only instant/opacity changes.
