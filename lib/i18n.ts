export type Locale = "fi" | "en";

export const defaultLocale: Locale = "fi";
export const supportedLocales: Locale[] = ["fi", "en"];

type Messages = {
  intro: {
    badge: string;
    title: string;
    body: string;
    begin: string;
  };
  locale: {
    label: string;
    finnish: string;
    english: string;
  };
  corporate: {
    badge: string;
    title: string;
    body: string;
    rateButton: string;
    navOverview: string;
    navFeatures: string;
    navBack: string;
  };
  survey: {
    title: string;
    description: string;
    notConfigured: string;
    close: string;
    back: string;
    next: string;
  };
  floating: {
    openSurvey: string;
    hint: string;
  };
  pages: {
    page1Title: string;
    page2Title: string;
    page3Title: string;
    page4Title: string;
    pageBody: string;
  };
};

const messages: Record<Locale, Messages> = {
  fi: {
    intro: {
      badge: "Käyttöliittymätutkimus",
      title: "Tutkimuksen ohjeet",
      body: "Tarkastelet sarjan verkkokäyttöliittymiä. Arvioi jokainen sivu luonnollisesti ja anna vastauksesi kyselylomakkeella.",
      begin: "Aloita tutkimus",
    },
    locale: {
      label: "Kieli",
      finnish: "Suomi 🇫🇮",
      english: "Englanti 🇬🇧",
    },
    corporate: {
      badge: "Esimerkkisivu",
      title: "Esimerkkisivun käyttökokemus",
      body: "Tämä sivu toimii tutkimuksen demona. Arvioi vaikutelmasi ja avaa sitten kysely.",
      rateButton: "Arvioi tämä sivu",
      navOverview: "Yleiskuva",
      navFeatures: "Ominaisuudet",
      navBack: "Takaisin",
    },
    survey: {
      title: "Arviointikysely",
      description: "Tähän lisätään myöhemmin varsinainen kyselylomake.",
      notConfigured:
        "Aseta NEXT_PUBLIC_WEBROPOL_SURVEY_URL, jotta kysely upotetaan tähän.",
      close: "Sulje",
      back: "Takaisin",
      next: "Seuraava",
    },
    floating: {
      openSurvey: "Avaa kysely",
      hint: "Paina tästä, kun olet valmis vastaamaan kysymyksiin.",
    },
    pages: {
      page1Title: "Tutkimussivu 1",
      page2Title: "Tutkimussivu 2",
      page3Title: "Tutkimussivu 3",
      page4Title: "Tutkimussivu 4",
      pageBody:
        "Tarkastele sivua normaalisti ja käytä kelluvaa kyselypainiketta vastataksesi.",
    },
  },
  en: {
    intro: {
      badge: "Website interface study",
      title: "Study Instructions",
      body: "You will review a sequence of web interfaces. Observe each page naturally and provide your responses in the survey.",
      begin: "Begin Study",
    },
    locale: {
      label: "Language",
      finnish: "Finnish 🇫🇮",
      english: "English 🇬🇧",
    },
    corporate: {
      badge: "Sample Page",
      title: "Sample Page Experience",
      body: "This page acts as a study demo. Review your impression and then open the survey.",
      rateButton: "Rate This Page",
      navOverview: "Overview",
      navFeatures: "Features",
      navBack: "Back",
    },
    survey: {
      title: "UX Survey",
      description: "The full questionnaire form will be embedded here later.",
      notConfigured:
        "Set NEXT_PUBLIC_WEBROPOL_SURVEY_URL to embed the survey here.",
      close: "Close",
      back: "Back",
      next: "Next",
    },
    floating: {
      openSurvey: "Open Survey",
      hint: "Press here when you are ready to answer the questions.",
    },
    pages: {
      page1Title: "Study Page 1",
      page2Title: "Study Page 2",
      page3Title: "Study Page 3",
      page4Title: "Study Page 4",
      pageBody:
        "Review the page naturally and use the floating survey button to submit your response.",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages[defaultLocale];
}
