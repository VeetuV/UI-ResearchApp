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
    close: string;
    back: string;
    next: string;
  };
  floating: {
    openSurvey: string;
  };
  pages: {
    page1Title: string;
    page2Title: string;
    page3Title: string;
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
      finnish: "Suomi",
      english: "Englanti",
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
      title: "UX-luottamuskysely",
      description: "Tahan lisataan myohemmin varsinainen kyselylomake.",
      close: "Sulje",
      back: "Takaisin",
      next: "Seuraava",
    },
    floating: {
      openSurvey: "Avaa kysely",
    },
    pages: {
      page1Title: "Esimerkkisivu 1",
      page2Title: "Esimerkkisivu 2",
      page3Title: "Esimerkkisivu 3",
      pageBody: "Tarkastele sivua normaalisti ja käytä kelluvaa kyselypainiketta vastataksesi.",
    },
  },
  en: {
    intro: {
      badge: "University UX Research Study",
      title: "Study Instructions",
      body: "You will review a sequence of web interfaces. Observe each page naturally and provide your responses in the survey.",
      begin: "Begin Study",
    },
    locale: {
      label: "Language",
      finnish: "Finnish",
      english: "English",
    },
    corporate: {
      badge: "Example Page",
      title: "Trusted Service Experience",
      body: "This page acts as a study demo interface. Review your impression, then open the survey.",
      rateButton: "Rate this Design",
      navOverview: "Overview",
      navFeatures: "Features",
      navBack: "Back",
    },
    survey: {
      title: "UX Trust Survey",
      description: "The full questionnaire form will be embedded here later.",
      close: "Close",
      back: "Back",
      next: "Next",
    },
    floating: {
      openSurvey: "Open Survey",
    },
    pages: {
      page1Title: "Example Page 1",
      page2Title: "Example Page 2",
      page3Title: "Example Page 3",
      pageBody: "Review the page naturally and use the floating survey button to submit your response.",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages[defaultLocale];
}