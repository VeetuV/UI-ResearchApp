# UI Research App

This project is a web app for a university UX research study.

The goal is to measure user trust across multiple interface variants while keeping the flow neutral and consistent.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Planned next step: Supabase integration for storing survey responses

## Current Study Flow

1. Participant lands on the intro page (`/`) and reads instructions.
2. Participant starts the study and goes to neutral pages in sequence:
	- `/variants/examplepage1`
	- `/variants/examplepage2`
	- `/variants/examplepage3`
3. On study pages, a floating survey button opens the survey modal.
4. In the survey modal:
	- `Back` returns to index (`/`)
	- `Next` advances to the next study page

## Localization

- Supported languages: Finnish (`fi`) and English (`en`)
- Default language: Finnish
- Language can be switched from the intro page

## Why The UI Looks Neutral

To reduce bias in study outcomes:

- Page routes and labels use neutral naming (`examplepage1`, `examplepage2`, `examplepage3`)
- Descriptive category labels are avoided in participant-facing flow
- Extra navigation is intentionally minimal

## Project Structure (Key Files)

- `app/page.tsx`: Intro page + language switch + start study action
- `app/variants/examplepage1/page.tsx`: Study page 1
- `app/variants/examplepage2/page.tsx`: Study page 2
- `app/variants/examplepage3/page.tsx`: Study page 3
- `components/FloatingSurveyButton.tsx`: Floating survey trigger on study pages
- `components/SurveyModal.tsx`: Survey modal UI + Back/Next behavior
- `lib/i18n.ts`: Locale messages and defaults
- `lib/LocaleContext.tsx`: Locale state and message access

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open: http://localhost:3000

## Notes For Contributors

- Keep the participant flow neutral unless a study requirement changes.
- Avoid introducing category-like labels in the main user path.
- If you modify survey navigation, verify Back and Next behavior still matches the flow above.
- If using LLM:s ask them to read AGENTS.md