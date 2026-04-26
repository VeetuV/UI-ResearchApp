# UI Research App

A university UX research web app that measures trust across different interface variants. Participants are randomly split into two groups that see slightly different versions of the same pages.

## Tech Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS
- Hosted on Vercel

## Study Flow

1. Participant lands on the intro page (`/`), reads instructions, chooses language.
2. On first visit, the app randomly assigns them to **Group A** or **Group B** (50/50, persisted in `localStorage`).
3. Participant progresses through three study pages in order:
	- `/studypage1` → `/studypage2` → `/studypage3`
4. On each study page, the floating survey button opens a modal with an embedded Webropol questionnaire.
5. Modal controls: **Back** returns to `/`, **Next** advances to the next study page.

## A/B Groups

Each group gets its own Webropol survey URL (configured via env vars). The pages also differ slightly per group:

| Page | Group A | Group B |
|------|---------|---------|
| studypage1 | Sticky navbar | Static navbar |
| studypage2 | AI-generated employee photos | Stock photos |
| studypage3 | Welcome + bottom-of-page popups | No popups |

## Project Structure

```
app/
  page.tsx                          # Intro page
  layout.tsx                        # Root layout (LocaleProvider + VariantProvider)
  studypage1/page.tsx               # Study page 1 → /studypage1
  studypage2/page.tsx               # Study page 2 → /studypage2
  studypage3/page.tsx               # Study page 3 → /studypage3
components/
  FloatingSurveyButton.tsx          # Survey trigger (hidden on /)
  SurveyModal.tsx                   # Survey modal with Back/Next
lib/
  i18n.ts                           # Translations (fi/en)
  LocaleContext.tsx                 # Language state
  VariantContext.tsx                # A/B group assignment + survey URL
  shared-data.ts                   # Shared business data + getEmployees()
```

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SURVEY_URL_A=https://your-webropol-survey-url-for-group-a
NEXT_PUBLIC_SURVEY_URL_B=https://your-webropol-survey-url-for-group-b
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Testing Groups

The assigned group is stored in `localStorage` under key `ux-study-group`. To switch groups:

1. Open DevTools → Application → Local Storage → `http://localhost:3000`
2. Change `ux-study-group` to `A` or `B` (or delete it to re-randomize)
3. Refresh the page

## Notes For Contributors

- Keep the participant flow neutral — avoid category labels in visible UI.
- Do not expose group assignment (A/B) in participant-facing text.
- If modifying survey navigation, verify Back and Next still work.
- If using LLMs, ask them to read AGENTS.md first.