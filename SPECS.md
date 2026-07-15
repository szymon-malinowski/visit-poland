# Visit Poland

## Project specification

Visit Poland is a responsive travel discovery application that introduces
visitors to Polish destinations, landmarks, and natural attractions.

## Goals

- Showcase destinations across Poland.
- Help visitors discover cultural and natural attractions.
- Provide clear navigation between the main areas of the application.
- Deliver an accessible, responsive, and modern user experience.
- Keep the interface maintainable through reusable UI components.

## Technology

- React 19
- TypeScript
- Vite
- TanStack Router with file-based route generation
- Tailwind CSS 4 through the Vite plugin
- DaisyUI 5 for accessible component classes and themes

## Styling system

The interface uses DaisyUI component classes with Tailwind utilities. Components
must use DaisyUI primitives such as `btn`, `card`, `navbar`, `menu`, `badge`,
`list`, `hero`, and `footer` whenever an appropriate primitive exists. Tailwind
utilities provide responsive layout, spacing, typography, and small visual
adjustments around those primitives.

`src/index.css` is the only stylesheet. It imports Tailwind CSS, registers the
DaisyUI plugin, and enables DaisyUI's light and preference-aware dark themes.
Component-specific stylesheets and bespoke CSS selectors should not be added
unless a design requirement cannot reasonably be expressed with DaisyUI and
Tailwind classes.

All colours should use semantic DaisyUI theme tokens such as `primary`,
`secondary`, `base-100`, `base-200`, `base-300`, and `base-content` where
possible. This keeps contrast and theme switching consistent.

## Routes

| Path | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Introduces the application and links to the main collections. |
| `/destinations` | Destinations | Displays a collection of Polish cities and regions. |
| `/attractions` | Attractions | Displays notable landmarks and natural attractions. |
| Any unmatched path | Not found | Explains that the requested page does not exist and links home. |

Route declarations live in `src/routes`. Route files should contain only route
configuration and import their page component from `src/pages`. The generated
`src/routeTree.gen.ts` file must not be edited manually.

## Component architecture

The project follows Atomic Design. Components belong in the smallest layer that
accurately describes their responsibility:

```text
src/
├── components/
│   ├── atoms/       Small, indivisible UI elements
│   ├── molecules/   Small groups of atoms with one responsibility
│   ├── organisms/   Complete interface sections
│   └── templates/   Page structure and layout
├── pages/           Route-level composition and page data
└── routes/          TanStack Router declarations
```

### Atoms

Atoms are the smallest reusable elements and must not depend on molecules,
organisms, templates, or pages. Current examples are `Eyebrow` and `ActionLink`.

### Molecules

Molecules combine atoms or native elements into a focused unit. Current examples
are `PageHeader`, `DestinationCard`, and `AttractionRow`.

### Organisms

Organisms form recognizable page sections and may compose atoms and molecules.
Current examples include the site header and footer, hero, introduction,
destination grid, and attraction list.

### Templates

Templates define layout without owning page-specific data. `AppLayout` provides
the shared application shell, while `CollectionPageTemplate` provides the common
layout for collection pages.

### Pages

Pages provide route-specific data and compose templates and organisms. Pages
should avoid duplicating markup that can be expressed as a reusable component.

## Dependency direction

Dependencies flow upward through the Atomic Design layers:

```text
atoms → molecules → organisms → templates → pages → routes
```

A lower-level component must not import from a higher-level layer. Templates may
also compose organisms when they define an application-wide layout.

## UI and accessibility requirements

- Navigation must identify the active route.
- Semantic landmarks such as `header`, `nav`, `main`, and `footer` must be used.
- Decorative visuals must be hidden from assistive technology.
- Layouts must remain usable at mobile widths from 320 px.
- Text and interactive controls must maintain sufficient colour contrast.

## Development checks

Before considering a change complete, run:

```bash
npm run lint
npm run build
```
