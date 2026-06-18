# CLAUDE.md — ETCH Storefront

Hydrogen 2026.4 (React Router 7 + Vite) storefront for **ETCH** — premium EMS body-sculpting brand. Currently wired to **Mock.shop** for demo data; link to the real Shopify store to go live.

Tagline: **Definition, engineered.**

---

## 1 · Forge design system (source of truth: `app/styles/app.css`)

Concept: **ETCH as engraving** — the body rendered as an intaglio/contour surface (= muscle definition + the EMS waveform). Premium look, with direct-response conversion mechanics sitting underneath (kit ladder, order bump, founding-cohort scarcity, guarantee). Never neon, never fake-luxury terracotta, **never flat-black-plus-one-accent**. Depth comes from ember-lit gradients, not from a flatter darker shade.

### Tokens (`:root` in `app/styles/app.css`)
```
darks (warm, ember-tinted)
  --obsidian #141009   --char #1C160E   --char-2 #251D12   --char-3 #2E2415

lights (warm parchment, never cold)
  --ivory #F6F1E7      --parchment #ECE4D4   --sand #E2D7C2

ink                    --ink #1A1610

brass (the only luxury accent)
  --brass #B8893F      --brass-light #DCB36A   --brass-deep #8A6526

oxblood (urgency / limited / live-stock — USED SPARINGLY)
  --oxblood #7A2E22    --oxblood-light #A04434

mute (secondary text)
  --mute #6B6456       --mute-d #9A9080

dividers
  --line rgba(26,22,16,.13)        --line-d rgba(220,179,106,.18)
```
Build everything from these. **No other colors. No other fonts.**

### Gradients & glows (where the depth lives)
```
--ember-bg     radial brass glow + oxblood floor + obsidian gradient — applied to every dark section
--brass-grad   linear-gradient(135deg,#DCB36A,#B8893F) — primary button + cart checkout
--brass-glow   0 18px 50px -22px rgba(184,137,63,.55) — sits under buttons / accent shadows
--ivory-grad   subtle parchment fall — used on aside header
```
Dark sections (`.etch-section.plate`, `.etch-hero`, `.footer`) **never** use a flat dark color — they use `var(--ember-bg)`. Primary buttons use `--brass-grad` with an inset highlight + the glow. Oxblood is reserved for urgency/limited copy only (`.urgency`).

### Type
- **Archivo** (sans, display & UI), **Fraunces** italic (`.serif` accent word only), **IBM Plex Mono** (instrument labels / `.eyebrow`). Loaded in `app/root.tsx` → `links()`.
- Hero `h1`: `clamp(54px, 10.5vw, 150px)` · `line-height:.9` · `letter-spacing:-.035em`.
- Section `h2`: `clamp(34px, 5vw, 68px)` · `line-height:1.0` · `letter-spacing:-.02em`.
- Eyebrow: Mono 11px · letter-spacing `.32em` · uppercase · `var(--brass)` (auto switches to `--brass-light` on dark sections).
- Every headline gets ONE Fraunces italic accent word inside `<span class="serif">`. That's the signature — don't decorate beyond it.

### Spacing
Sections are large. Vertical padding is `var(--section-pad)` = `clamp(80px, 12vh, 160px)`. Generous, composed whitespace — never an empty void; balance every large negative space with a strong visual element (engraving art, instrument plate, founding meter).

### Primitives (refactored to the new tokens)
- `.etch-section` + modifiers: `.dark`/`.plate` (ember-bg), `.parchment`/`.paper`, `.ivory`/`.bone`, `.sand`. The legacy class names (`.plate` / `.paper` / `.bone`) remain as semantic aliases.
- `.sec-head` (max 760px), `.eyebrow`, `.serif`, `.lede`, `.wrap` (max 1280px).
- `.btn` (brass-grad + inset highlight + glow + lift), `.btn-ghost` (transparent w/ border, ink on light, brass-light on dark).
- `.engrave` (signature contour strokes — opacity .55, .22 for `.faint`).
- `.product-item`, `.mech-cell`, `.method-card`, `.pdp-step`, `.guarantee-band`, `.order-bump`, `.spec-table`, `.box-grid`, `.pdp-faq`.

### Signature element
The contour-engraving SVG (`Engraving` in `app/routes/_index.tsx`). Reuse `.engrave` strokes for section dividers / PDP art. Wrap any pure-engraving SVG in `class="engrave-draw"` to opt into the draw-on stroke animation. Spend boldness here; keep everything else quiet.

### Motion
- **Scroll reveal:** add `data-reveal` to any element. The observer in `app/root.tsx` (`useScrollReveal`) toggles `.is-revealed` when it crosses the viewport; CSS fades opacity + translates Y. Stagger with inline `style={{['--reveal-delay' as string]: '120ms'}}`. Respects `prefers-reduced-motion`. Re-scans on every navigation.
- **Engraving draw-on:** add `engrave-draw` className to the SVG. Combined with `data-reveal`, strokes draw on via `stroke-dashoffset`.
- **Hover lifts:** built into `.btn`, `.btn-ghost`, `.product-item`, `.pdp-step`. Tasteful — `.2–.7s`, cubic-bezier easing.
- Keep motion fast and quiet. No bouncing, no parallax, no spinning.

### Compliance (non-negotiable in all copy)
EMS **tones and strengthens** muscle. **Never** claim weight loss, fat reduction, or calorie burn. No fake price anchors. Keep the disclaimer in the footer. This is what keeps the brand premium *and* out of FTC/Meta-ad trouble.

---

## 2 · Catalog

**Devices** (each ships with its matching guide free):
- **ETCH Flux™ — Core** (abs EMS device) — **$199** · includes *The ETCH Method: Core*
- **ETCH Flux™ — Form** (glute EMS device) — **$199** · includes *The ETCH Method: Form*
- **The ETCH Set** (both devices) — **$349** · includes *Method: Complete*

(™ rides on **Flux** — the coined, protectable part. Core/Form are descriptive editions. Run a USPTO + CIPO clearance search before printing.)

**Digital (standalone):** *Method: Core* / *Method: Form* — **$39** each · *Method: Complete* — **$59**. As a device **order bump**: **$19** (the bundle incentive — see §5).

**Subscription:** pad refills ~**$24/mo** (the recurring-revenue engine; pads last ~25 sessions).

The two device guides already exist as 30-page PDFs (`The-ETCH-Method-Core.pdf`, `The-ETCH-Method-Form.pdf`) — fulfil them as digital downloads.

---

## 3 · What's been customized (vs the stock skeleton)

| File | Change |
|---|---|
| `app/styles/app.css` | **Full ETCH design system** — replaces skeleton CSS. Restyles header, footer, asides/cart, product cards, PDP, buttons globally. |
| `app/root.tsx` | Brand fonts added to `links()`. |
| `app/routes/_index.tsx` | **ETCH homepage** — hero (engraving), mechanism strip, product showcase, the Method block, founding band. Loader/queries unchanged. |
| `app/components/Header.tsx` | ETCH wordmark, dark sticky nav, cart/search CTAs. |
| `app/components/Footer.tsx` | Multi-column footer + compliant disclaimer. |
| `app/routes/products.$handle.tsx` | Restyled PDP + **`MethodOrderBump`** component (presentational — wire per §5). |

Cart, search, account, collections, blogs, policies = stock skeleton logic, restyled globally via the CSS. They already work.

---

## 4 · Go live (link to real Shopify + deploy to Oxygen)

```bash
npm install
npm run dev                      # http://localhost:3000 (Mock.shop until linked)

# Link to your store (installs the Hydrogen sales channel, pulls env vars):
npx shopify hydrogen link
npx shopify hydrogen env pull    # writes PUBLIC_STORE_DOMAIN, PUBLIC_STOREFRONT_API_TOKEN, etc. to .env

npm run build                    # production build
npm run typecheck                # tsc — must stay green
npx shopify hydrogen deploy      # → Oxygen (pick Preview first)
```

**In Shopify admin, create:**
1. **Products:** `ETCH Flux™ — Core`, `ETCH Flux™ — Form` (each a product; if you want one product with a Core/Form choice instead, make it a variant option). `The ETCH Set`. `The ETCH Method` (Core / Form / Complete) as digital products. Pad refills as a subscription product.
2. **Navigation → Menus:** `main-menu` (The Devices → `/collections/all`, The Method, Science, Journal) and `footer`. Handles are referenced in `app/root.tsx`.
3. **Pages:** `the-method`, `science`, `how-to-use`, `faq` (the header/footer link to these). The homepage CTAs point at `/collections/all` and `/pages/the-method`.
4. **Collection:** `all` (or a featured collection) holding the two devices — the homepage product showcase reads from it.

---

## 5 · Order-bump wiring (make `MethodOrderBump` functional)

Currently presentational (toggles a checkbox). To make it add the Method to the cart at the $19 bundle price:

1. Create `The ETCH Method` product; note the **Core** and **Form** variant GIDs.
2. Decide the mechanism:
   - **Simplest:** when the box is checked, append a second line to the `AddToCartButton` `lines` array: `{merchandiseId: METHOD_VARIANT_ID, quantity: 1}`. Price the Method variant at $19, or apply an automatic cart discount when a device is present.
   - **Cleaner (recommended):** model it as a **Shopify Bundle** or a selling-plan/automatic-discount so the $19-with-device / $27-standalone logic lives in Shopify, not the front end.
3. Lift the `on` state up into `ProductForm` so `AddToCartButton` can read it.

Keep the rule honest: **$19 only with a device, $27 standalone** — a real bundle incentive, not a struck-through fake anchor.

---

## 6 · Conventions

- **Hydrogen 2026.4 / React Router 7.** Storefront API proxy is always on; load context must include `storefront`. Don't reintroduce `proxyStandardRoutes` or `@shopify/remix-oxygen` (both removed/deprecated).
- Quality gates before every deploy: `npm run build` **and** `npm run typecheck` green.
- Upgrades: `npx shopify hydrogen upgrade`, one major at a time.
- Add new sections as components in `_index.tsx` or new `app/routes/*`; reuse the `.etch-section`, `.sec-head`, `.eyebrow`, `.serif`, `.engrave` primitives so everything inherits the system.
