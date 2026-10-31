---
name: Ace IT Learning System
colors:
  surface: '#faf9fd'
  surface-dim: '#dbd9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1b1e'
  on-surface-variant: '#414754'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f1f0f4'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005bc0'
  primary: '#005bbf'
  on-primary: '#ffffff'
  primary-container: '#1a73e8'
  on-primary-container: '#ffffff'
  inverse-primary: '#adc7ff'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#9e4300'
  on-tertiary: '#ffffff'
  tertiary-container: '#c55500'
  on-tertiary-container: '#0e0200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783100'
  background: '#faf9fd'
  on-background: '#1a1b1e'
  surface-variant: '#e3e2e6'
typography:
  display-lg:
    fontFamily: Noto Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
  display-lg-mobile:
    fontFamily: Noto Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg:
    fontFamily: Noto Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
  headline-lg-mobile:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Noto Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Noto Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Noto Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Noto Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Noto Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Noto Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is tailored for professional IT workforce education, bootcamps, and developer retraining programs. The interface expresses clarity, educational rigor, structured logic, and career advancement momentum.

### Core Character
- **Credible & Technical:** Precise alignment, clean borders, and clear hierarchies inspired by developer documentation and modern tech platforms.
- **Action-Oriented & Motivating:** Energetic conversion drivers for registration deadlines, curriculum navigation, and status tracking.
- **Low Cognitive Overhead:** Dense syllabus tables, technical stacks, and schedule grids are translated into scannable, mobile-optimized card modules.

### Design Movement
**Modern Corporate EdTech:** Built on structured white containers, high-contrast typography, crisp boundaries (`#E8EAED`), and targeted energetic accents. It eliminates visual noise, prioritizing curriculum readability and fluid checkout/registration workflows.

## Colors

The color architecture creates high contrast between structural navigation and high-conversion actions.

### Primary Roles
- **Primary (`#1A73E8`):** Academic trust, primary links, active tab underlines, curriculum week badges, and tech stack tags.
- **Secondary / Conversion Accent (`#FF6B00`):** Floating register buttons, urgency tags ("마감임박"), pricing highlights, and primary submission triggers.
- **Surface Canvas (`#F8F9FA`):** Ground-level backdrop providing soft contrast against pure white modules.
- **Surface Card (`#FFFFFF`):** High-level containers, modals, accordions, and sticky bars.
- **Headline & High-Emphasis (`#202124`):** Course titles, curriculum module headers, and price figures.
- **Subtext & Supporting (`#5F6368`):** Prerequisites, class schedules, metadata, footnotes, and breadcrumbs.
- **Border & Separator (`#E8EAED`):** 1px structural outlines for cards, tabs, and list partitions.

## Typography

The type system prioritizes technical legibility across mixed Korean (Hangul) and Latin characters (programming keywords, frameworks, tools).

- **Hierarchy & Proportions:** Clear step-downs from course headlines to granular module schedules.
- **Numeric Clarity:** Dates, tuition figures, and curriculum week markers leverage tabular alignment.
- **Letter Spacing:** Set to `-0.02em` for headlines to maintain tight Korean visual cohesion, and `0` to `-0.01em` for body text.

## Layout & Spacing

### Grid & Canvas Structure
- **Mobile (< 768px):** Single-column fluid stream. `16px` outer margins ensure maximum screen real estate for technical outlines. Bottom padding includes safe-area compensation for floating CTA bars (`88px` minimum bottom clearance).
- **Tablet (768px - 1024px):** 8-column layout with 24px gutters. Curriculum tables expand to side-by-side spec layouts.
- **Desktop (> 1024px):** 12-column layout with max-width `1200px` centered. 8 columns allocate to syllabus content, instructor bios, and reviews; 4 columns anchor a sticky sidebar containing course fees, start dates, and checkout triggers.

### Spacing Discipline
All component padding, stack offsets, and accordion expansions strictly map to the `space-*` scale. Key grouping intervals:
- `space-xs` (4px): Badge-to-icon spacing.
- `space-sm` (8px): Metadata row items, tech tag gaps.
- `space-md` (16px): Internal mobile card padding, list item gaps.
- `space-lg` (24px): Desktop card padding, section gap within cards.
- `space-xl` (40px): Inter-section canvas rhythm between curriculum segments.

## Elevation & Depth

Visual hierarchy relies on structural surfaces framed by crisp 1px borders, paired with focused elevation only for interactive and floating elements.

### Elevation Hierarchy
1. **Base Layer (Elevation 0):** Background surface (`#F8F9FA`).
2. **Surface Layer (Elevation 1):** Content cards, syllabus accordions, and tab containers. Rendered with background `#FFFFFF`, border `1px solid #E8EAED`, and no shadow in rest state.
3. **Elevated Elements (Elevation 2):** Hovered curriculum cards, active dropdown menus, and sticky navigation headers.
   - Shadow: `0 4px 12px rgba(32, 33, 36, 0.06), 0 1px 2px rgba(32, 33, 36, 0.04)`.
4. **Floating CTA & Modals (Elevation 3):** Bottom sticky application bar on mobile, modal dialogues, checkout confirmation sheets.
   - Shadow: `0 -4px 20px rgba(32, 33, 36, 0.08), 0 -1px 4px rgba(32, 33, 36, 0.03)`.

## Shapes

The interface balances crisp technical structure with accessible rounded geometry.

- **Standard Elements (0.5rem / 8px):** Form fields, curriculum accordion cards, standard buttons, and tech stack badges.
- **Large Containers (1rem / 16px):** Course overview hero panels, instructor profile boxes, and summary review containers.
- **Pill Geometry (9999px):** Status badges ("모집중", "N일 남음"), category filters, and mobile bottom CTA buttons.

## Components

### Buttons
- **Primary CTA (Apply / Register):** Background `#FF6B00`, text `#FFFFFF`, font-weight 600. Hover state darkens to `#E56000`. Active state transforms `scale(0.98)`.
- **Secondary Action (Syllabus Download, Inquiry):** Background `#FFFFFF`, border `1px solid #1A73E8`, text `#1A73E8`. Hover state fills with `rgba(26, 115, 232, 0.04)`.
- **Ghost Utility:** Borderless, text `#5F6368`. Hover state `#202124`.

### Cards & Accordions
- **Course Summary Card:** `#FFFFFF` fill, `1px solid #E8EAED`, 16px corner radius. Includes category tag, course title, key tech badges, duration, and tuition.
- **Curriculum Accordion:** Expandable week-by-week module item.
  - Header: Clean row displaying "Week XX" badge in `#1A73E8` light tint, lecture title, hour count, and chevron icon.
  - Expanded Panel: Border-top `1px solid #E8EAED`, soft `#F8F9FA` background, checklist of learning outcomes, and practical project deliverables.

### Tab Navigation (Sticky Segment Control)
- Persistent horizontal bar (`#FFFFFF` background, bottom border `1px solid #E8EAED`).
- Links: Overview, Curriculum, Instructor, Reviews, FAQ.
- Active Indicator: 3px solid `#1A73E8` underline with bold font weight. In mobile view, horizontal overflow is scrollable with hidden scrollbars.

### Badges & Chips
- **Status Tags:** Pill shape, 4px vertical / 10px horizontal padding.
  - Recruiting: Light blue background (`rgba(26, 115, 232, 0.1)`), text `#1A73E8`.
  - Closing Soon: Light orange background (`rgba(255, 107, 0, 0.1)`), text `#FF6B00`.
- **Tech Stack Chips:** Background `#F8F9FA`, border `1px solid #E8EAED`, text `#202124`, rounded 6px.

### Form Inputs & Checkboxes
- **Input Fields:** `#FFFFFF` surface, border `1px solid #E8EAED`, text `#202124`. Focused state uses border `1.5px solid #1A73E8` and an outer glow `0 0 0 3px rgba(26, 115, 232, 0.15)`.
- **Checkboxes & Radios:** Primary accent `#1A73E8` for checked states; unchecked borders use `#5F6368`.

### Floating Registration Bar (Mobile Specific)
- Fixed at viewport bottom with safe-area padding.
- Left column: Remaining seats or early-bird deadline countdown with subtext.
- Right column: Prominent "수강신청하기" CTA button in `#FF6B00` with direct checkout trigger.