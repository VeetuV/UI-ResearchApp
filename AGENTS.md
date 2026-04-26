<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Context

This repository is a university UX research web app that measures trust across different interface variants.

- Stack: Next.js App Router, TypeScript, Tailwind CSS.
- Near-future backend: Supabase (not connected yet).
- Current flow:
	- Index page (`/`) is an intro/instructions page.
	- Study pages are neutral and sequential: `/variants/studypage1`, `/variants/studypage2`, `/variants/studypage3`.
	- A floating survey button is visible on study pages (hidden on `/`).
	- Survey modal has Back and Next controls:
		- Back returns to `/`.
		- Next advances to the next study page.

## A/B Variant System

Participants are randomly assigned to **Group A** or **Group B** (50/50) on first visit. The assignment is stored in `localStorage` (`ux-study-group`) and persists for the session.

- **VariantContext** (`lib/VariantContext.tsx`) provides `studyGroup` and group-specific `surveyUrl`.
- Two env vars control survey URLs: `NEXT_PUBLIC_SURVEY_URL_A` and `NEXT_PUBLIC_SURVEY_URL_B`.

### Current per-page differences between groups

| Page | Group A (default) | Group B |
|------|-------------------|---------|
| studypage1 | Sticky/following navbar | Static navbar (no sticky) |
| studypage2 | AI-generated employee photos | Stock employee photos |
| studypage3 | Welcome popup + bottom-of-page popup | No popups |

### How variant branching works in code

- **studypage1**: Navbar `className` conditionally includes `sticky top-0` only for Group A.
- **studypage2**: Uses `getEmployees(locale, studyGroup)` from `shared-data.ts` which swaps employee images for Group B.
- **studypage3**: Popup initial state is set based on `studyGroup` — Group B starts with popups disabled and the scroll listener skipped.

### Adding new per-page variants

When adding new A/B differences to a page:
1. Import `useVariant` from `@/lib/VariantContext`.
2. Destructure `studyGroup` and branch on `"A"` / `"B"`.
3. Keep changes minimal — only modify the specific UI element, not the page structure.

## Research Constraints

When editing UI or copy, keep participant bias low:

- Do not expose descriptive category labels on study pages.
- Prefer neutral naming (studypage1/2/3) in routing and visible text.
- Avoid adding extra menus/navigation that can influence participant behavior.
- Keep the survey trigger and flow consistent across pages.
- Do not expose group assignment (A/B) anywhere in participant-facing UI.

## Localization Context

- Supported languages: Finnish (`fi`) and English (`en`).
- Default locale: Finnish.
- Language selection currently happens on the intro page.
- Locale state is managed in app code (see locale context and i18n helper files).

## Editing Guidance

- Preserve existing study flow unless explicitly asked to change it.
- Prefer small, targeted edits that do not rename routes or remove neutral-page behavior.
- If changing survey behavior, verify both modal controls still work correctly:
	- Back to `/`
	- Next through the neutral page sequence
- When modifying variant behavior, ensure both Group A and Group B paths work correctly.

## Documentation

- PROMPTS.md - Prompts used for AI generated pages. These are not to be changed, and are not to be used as a basis for any changes to the code. They are only here for humans to reference.