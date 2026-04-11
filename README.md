# UI Research App

This project is a web app for a university UX research study.

The goal is to measure user trust across multiple interface variants while keeping the flow neutral and consistent.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Hosted on vercel

## Current Study Flow

1. Participant lands on the intro page (`/`) and reads instructions.
2. Participant starts the study and goes to neutral pages in sequence:
	- `/variants/studypage1`
	- `/variants/studypage2`
	- `/variants/studypage3`
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

- Page routes and labels use neutral naming (`studypage1`, `studypage2`, `studypage3`)
- Descriptive category labels are avoided in participant-facing flow
- Extra navigation is intentionally minimal

## Project Structure (Key Files)

- `app/page.tsx`: Intro page + language switch + start study action
- `app/variants/studypage1/page.tsx`: Study page 1
- `app/variants/studypage2/page.tsx`: Study page 2
- `app/variants/studypage3/page.tsx`: Study page 3
- `components/FloatingSurveyButton.tsx`: Floating survey trigger on study pages
- `components/SurveyModal.tsx`: Survey modal UI + Back/Next behavior
- `lib/i18n.ts`: Locale messages and defaults
- `lib/LocaleContext.tsx`: Locale state and message access
- `lib/shared-data.ts`: Website info that is shared on multiple variants, for easier editing.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open: http://localhost:3000

## Webropol Survey Embed

To embed a Webropol survey in the modal via iframe, create `.env.local` and configure:

NEXT_PUBLIC_WEBROPOL_SURVEY_URL=https://your-webropol-survey-url


Note: the survey URL must allow iframe embedding from your app domain.

## Notes For Contributors

- Keep the participant flow neutral unless a study requirement changes.
- Avoid introducing category-like labels in the main user path.
- If you modify survey navigation, verify Back and Next behavior still matches the flow above.
- If using LLM:s ask them to read AGENTS.md