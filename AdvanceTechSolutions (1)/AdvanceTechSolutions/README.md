
 Advance Tech Solutions — Website

A five-page marketing website for **Advance Tech Solutions**, a small IT
services business based in Mpumalanga, South Africa. Built with plain
HTML5, CSS3 and vanilla JavaScript as part of a PoE (Portfolio of
Evidence) web development project.

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero banner, service highlights, testimonials, call to action |
| About Us | `about.html` | Company background, mission, vision, values |
| Services | `services.html` | Full service catalogue |
| Request a Quote | `quote.html` | Quotation request form with client-side validation |
| Contact Us | `contact.html` | Contact details, enquiry form, embedded Google Map |

## Project Structure

```
AdvanceTechSolutions/
├── index.html
├── about.html
├── services.html
├── quote.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── scripts.js
├── images/
│   ├── hero.jpg, cctv.jpg, computer-repair.jpg, networking.jpg, team.jpg
│   └── *-400w.jpg / *-800w.jpg / *-1200w.jpg  (responsive image variants)
└── docs/
    └── screenshots/   (desktop / tablet / mobile evidence, see below)
```

## Technologies Used

- **HTML5** — semantic markup (`header`, `main`, `nav`, `section`, `article`, `footer`)
- **CSS3** — external stylesheet (`css/style.css`) using CSS custom
  properties (design tokens), Flexbox, CSS Grid, and media-query
  breakpoints for responsive layout
- **Vanilla JavaScript** — form validation and small UX enhancements (`js/scripts.js`)
- **Font Awesome 6** and **Google Fonts (Poppins)** — loaded from CDN

## Responsive Design

Three breakpoints are used throughout `css/style.css`:

- **Desktop:** default styles, multi-column grid layouts (3-column service/feature grids)
- **Tablet (`max-width: 900px`):** grids collapse to 2 columns, header stacks
- **Mobile (`max-width: 600px`):** single-column layout, stacked navigation, full-width buttons
- **Small phones (`max-width: 400px`):** further font-size and padding adjustments

Screenshot evidence of each page at desktop, tablet and mobile widths is
stored in [`docs/screenshots/`](docs/screenshots/).

## Running the Site Locally

No build step is required. Open `index.html` directly in a browser, or
serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

---

## Changelog

All notable changes made while addressing Part 1 feedback and
implementing the Part 2 requirements are listed below.

### [Unreleased] — Part 2 Submission — 16 September 2026

**Bug fixes carried over from Part 1 marking**

- **Fixed the homepage (`index.html`), which had corrupted markup** from a
  bad find-and-replace: every `<link>` tag had been mangled into
  `<Iink ...>` (capital "I" instead of lowercase "l"), the Google Fonts
  `<link>` block was malformed and unclosed, and `crossorigin` was
  misspelled as `crossorrign`. The entire `<head>` section was rebuilt
  from a working template shared with the other pages so all external
  stylesheets and fonts now load correctly.
- **Fixed a site-wide broken script reference.** Every page (`index.html`,
  `about.html`, `services.html`, `quote.html`, `contact.html`) linked to
  `js/script.js`, but the actual file is named `js/scripts.js`. This
  silently broke the quote form validation, the contact form validation,
  and the active-navigation-link script on **every single page**.
  Corrected all five `<script src>` references to point to the real
  file and confirmed with automated browser testing (Playwright) that
  form validation and submission now work as intended.
- **Fixed CSS class name mismatches on the homepage** that meant several
  rules in `style.css` were never being applied: `hero-contant` → `hero`,
  `services-container` → `service-container`, `services-card` →
  `service-card` (this class also had an invalid closing tag,
  `</div class="service-card">`, which has been corrected to a proper
  opening `<div class="service-card">`).
- **Fixed invalid Font Awesome icon-size classes** on the homepage
  (`fa-3*`, `fa-3/*`) which are not valid Font Awesome classes and did
  not render — corrected to `fa-3x` to match the rest of the site.
- **Corrected spelling/typo errors** across the homepage and metadata,
  including: "professtional" → "professional", "Qoute" → "Quote",
  "auther" → "author", "maintanence" → "maintenance", "mordern" →
  "modern", "sysytems" → "systems", and inconsistent lower-case nav
  labels ("about", "services", "contact") standardised to title case to
  match the rest of the site.
- Added the missing service images to the homepage's "Our Services"
  cards (previously only the dedicated Services page had images), for
  visual consistency between pages.

**2. CSS styling for the desktop solution**

- Introduced a set of **CSS custom properties** (`:root` design tokens)
  for the colour palette, spacing scale and corner radii
  (`--color-primary`, `--color-accent`, `--space-md`, `--radius-lg`,
  etc.) and refactored the stylesheet to use them instead of repeated
  hard-coded hex values, making the colour scheme easy to update
  consistently across the whole site.
- Added a small typographic scale: headings (`h1–h4`) now share a
  consistent `font-weight`, `line-height` and `letter-spacing` rule.
- Confirmed/kept the CSS reset (`* { margin:0; padding:0;
  box-sizing:border-box }`) for consistent cross-browser rendering.
- Retained and reviewed the Flexbox layout (header/nav, form groups)
  and CSS Grid layout (service cards, feature cards, mission cards,
  contact section) used to structure the desktop layout.
- Added a new `.about-photo` style block (rounded corners, shadow,
  responsive max-width) to support the new team photo on the About page.
- Confirmed `hover`, `focus` and `active` pseudo-classes are used on
  interactive elements (nav links, buttons, form inputs, social icons).

**3. Responsive design**

- **Relative units:** converted all spacing-related values
  (`padding`, `margin`, `gap`, `max-width`, `min-height`) from fixed
  pixels to `rem` units throughout `style.css`, so spacing now scales
  with the user's base font size. Horizontal section padding continues
  to use `%`, and typography already used `rem`/`clamp()`. Only
  `@media` breakpoint widths remain in `px`, which is standard practice.
- **Responsive images:** generated multiple resolution variants
  (400w / 800w / 1200w+) of every content photo using Python/Pillow and
  wired them up with the `srcset` and `sizes` attributes on the
  homepage and Services page service cards, so the browser downloads an
  appropriately sized image for the viewport instead of always loading
  the full-resolution original.
- Added a new **team photo to the About page**, implemented with the
  `<picture>` element and `srcset`/`sizes`/`media` conditions as a
  second, explicit example of responsive image loading in addition to
  the `srcset`-only approach used elsewhere.
- **Testing:** verified layout at desktop (1440px), tablet (800px) and
  mobile (390px) widths for all five pages using an automated headless
  browser (Playwright), and saved the resulting screenshots to
  `docs/screenshots/` as evidence. Also ran an automated console-error
  check across all pages/viewports to confirm no broken resources or
  JavaScript errors remain (aside from the expected CDN calls for
  Google Fonts/Font Awesome, which require internet access to load).

### Known follow-ups

- Social media icons in the footer still link to `#` placeholders —
  update with real profile URLs before going live.
- Contact/quote forms currently only simulate submission in the
  browser (no backend endpoint) — connect to a real form handler or
  backend before deployment.
