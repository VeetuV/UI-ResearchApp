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

## Research Constraints

When editing UI or copy, keep participant bias low:

- Do not expose descriptive category labels on study pages.
- Prefer neutral naming (studypage1/2/3) in routing and visible text.
- Avoid adding extra menus/navigation that can influence participant behavior.
- Keep the survey trigger and flow consistent across pages.

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

## Documentation

- PROMPTS.md - Prompts used for AI generated pages. These are not to be changed, and are not to be used as a basis for any changes to the code. They are only here for humans to reference.