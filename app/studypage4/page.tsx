"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { useVariant } from "@/lib/VariantContext";
import Image from "next/image";
import { siteData } from "@/lib/shared-data";
import LogoIcon from "@/components/LogoIcon";
import { Playfair_Display } from "next/font/google";

const logoFont = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

const pageContent = {
  fi: {
    nav: ["Valikko", "Hieronnat", "Palvelut", "Yrityksille", "Meistä"],
    teamDescription:
      "Harmonia-tiimin vahvuus on monipuolinen asiantuntemus. Kaikki terapeuttimme ovat Valviran laillistamia terveydenhuollon ammattilaisia, jotka sitoutuvat korkealaatuiseen hoitoon ja ammattitaitonsa jatkuvaan kehittämiseen. Tavoitteemme on aina tarjota sinulle yksilöllinen hoitosuunnitelma, joka tukee juuri sinun hyvinvointiasi.",
    booking: "Varaa aika",
    bookingNav: ["Palvelut", "Aika", "Asiakastiedot", "Maksu"],
    cardDesc:
      "Etukortilla saat aina 30% alennusta koulutettujen hierojiemme palveluista. Osta oma korttisi joko verkosta tai vastaanotoltamme ja säästä heti ensimmäisestä hieronnasta.",
    services: [
      {
        title: "Ensikäynti 50 min",
        description:
          "Hieronnan ensikäynti on tarkoitettu uusille asiakkaille sekä heille, jotka eivät ole käyneet meillä vuosina 2025–2026. (Palvelusta ei ole mahdollista saada alennusta)",
        pricing: "46€",
      },
      {
        title: "Ensikäynti 25 min",
        description:
          "Hieronnan ensikäynti on tarkoitettu uusille asiakkaille sekä heille, jotka eivät ole käyneet meillä vuosina 2025–2026. (Palvelusta ei ole mahdollista saada alennusta)",
        pricing: "29€",
      },
      {
        title: "Klassinen hieronta",
        description: "Perinteinen hieronta.",
        pricing: "47€",
      },
      {
        title: "Kuumakivihieronta",
        description: "Perinteinen hieronta kohtaa lämpöhoidon.",
        pricing: "60€",
      },
      {
        title: "Urheiluhieronta",
        description: "Tehokas hieronta lihasten palautumiseen.",
        pricing: "55€",
      },
      {
        title: "Jalkahieronta",
        description: "Jalkapohjien hieronta.",
        pricing: "52€",
      },
      {
        title: "Hieronnat",
      },
      {
        title: "Osteopatia",
      },
    ],
    progressButtonF: "Jatka",
    progressButtonB: "Takaisin",
    confirmButton: "Vahvista varaus",
    appointment: "Ajanvaraus",
    date: "Päivämäärä",
    openTimes: "Vapaat ajat",
    selectTime: "Valitse aika...",
    employee: "Työntekijä",
    selectEmployee: "Valitse työntekijä",
    customerDetails: "Asiakkaan tiedot",
    fName: "Etunimi",
    lName: "Sukunimi",
    eAddress: "Sähköpostiosoite",
    payment: "Maksu",
    paymentAction: "Siirry maksamaan verkkopankkiin",
    locationMainTitle: "Sijainti ja aukioloajat",
    locationTitle: "Sijainti",
    openHours: "Aukioloajat",
    monFri: "Maanantai - Perjantai",
    sat: "Lauantai",
    sun: "Sunnuntai",
    monFriOpenHours: "9:00-19:00",
    satOpenHours: "10:00-17:00",
    sunOpenHours: "Suljettu",
    mapTitle: "Kartta",
    aboutUs: "Tutustu meihin",
    footer: ["Tietosuoja", "Käyttöehdot", "Saavutettavuus"],
    phonePricing: "0,39 €/min",
    phoneOpenHours: "ma-pe 9-14",
    footerCopyright: "Harmonia. Kaikki oikeudet pidätetään.",
    confirmationAlert: "Varaus onnistui!",
    ad: "Mainos",
  },
  en: {
    nav: ["Menu", "Massages", "Services", "To companies", "About us"],
    teamDescription:
      "The strength of the Harmonia team is its diverse expertise. All our therapists are Valvira‑licensed healthcare professionals who are committed to high‑quality care and the continuous development of their skills. Our goal is always to offer you an individual treatment plan that supports your well‑being.",
    booking: "Book an appointment",
    bookingNav: ["Services", "Time", "Customer information", "Payment"],
    cardDesc:
      "With a membership card, you always get a 30% discount on the services of our trained massage therapists. Buy your own card either online or at our reception and save from your very first massage.",
    services: [
      {
        title: "First visit 50 min",
        description:
          "The first massage visit is intended for new customers and for those who have not visited us during 2025–2026. (Discounts are not available for this service)",
        pricing: "46€",
      },
      {
        title: "First visit 25 min",
        description:
          "The first massage visit is intended for new customers and for those who have not visited us during 2025–2026. (Discounts are not available for this service)",
        pricing: "29€",
      },
      {
        title: "Classic massage",
        description: "Traditional massage.",
        pricing: "47€",
      },
      {
        title: "Hot stone massage",
        description: "Traditional massage meets heat therapy.",
        pricing: "60€",
      },
      {
        title: "Sports massage",
        description: "Effective massage for muscle recovery.",
        pricing: "55€",
      },
      {
        title: "Foot massage",
        description: "Feet focused massage",
        pricing: "52€",
      },
      {
        title: "Massages",
      },
      {
        title: "Osteopathy",
      },
    ],
    progressButtonF: "Continue",
    progressButtonB: "Back",
    confirmButton: "Confirm booking",
    appointment: "Appointment",
    date: "Date",
    openTimes: "Available times",
    selectTime: "Select a time...",
    employee: "Employee",
    selectEmployee: "Select an employee",
    customerDetails: "Customer details",
    fName: "First name",
    lName: "Last name",
    eAddress: "Email address",
    payment: "Payment",
    paymentAction: "Proceed to online banking",
    locationMainTitle: "Location and business hours",
    locationTitle: "Location",
    openHours: "Business hours",
    monFri: "Monday - Friday",
    sat: "Saturday",
    sun: "Sunday",
    monFriOpenHours: "9:00-19:00",
    satOpenHours: "10:00-17:00",
    sunOpenHours: "Closed",
    mapTitle: "Map",
    aboutUs: "Get to know us",
    footer: ["Privacy policy", "Terms of use", "Accessibility"],
    phonePricing: "0.39 €/min",
    phoneOpenHours: "Mon–Fri 9–14",
    footerCopyright: "Harmonia. All rights reserved.",
    confirmationAlert: "Reservation complete!",
    ad: "Ad",
  },
} as const;

export function PopupAdBar({
  isOpen,
  onClose,
  src,
  alt,
  imageWidth,
  imageHeight,
}: {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className="relative bg-white shadow-lg border rounded-lg p-4 w-70">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close ad"
          className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-700"
        >
          ✕
        </button>

        <p className="text-sm font-semibold mb-2">Sponsored</p>

        <div className="h-60 w-62 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            className="h-60 w-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function Studypage4() {
  const [step, setStep] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { locale } = useLocale();
  const info = siteData[locale];
  const { studyGroup } = useVariant();
  const content = pageContent[locale];
  const [isAdShowing, setIsAdShowing] = useState(studyGroup === "A");

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const submitBooking = () => {
    alert("Reservation complete!");
    setStep(1);
  };

  const isSticky = studyGroup === "A" || studyGroup === null;

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <PopupAdBar
        isOpen={isAdShowing}
        onClose={() => setIsAdShowing(false)}
        src="/popup2.png"
        alt={content.ad}
        imageWidth={400}
        imageHeight={257}
      />

      {/* Navbar - White with blue text */}
      <nav
        className={`bg-white shadow-sm border-b border-gray-200 z-50 ${isSticky ? "sticky top-0" : "relative"}`}
      >
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-semibold text-blue-700 tracking-wide flex items-center">
            <LogoIcon className="h-16 w-16 text-blue-700" />
            <span className={`ml-2 ${logoFont.className}`}>Harmonia</span>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-blue-600 font-medium hover:text-blue-800 transition-colors focus:outline-none"
            >
              <span>{content.nav[0]}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 -md shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {content.nav[1]}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {content.nav[2]}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {content.nav[3]}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {content.nav[4]}
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto space-y-12 p-6 mt-8">
        {/* Information Textbox - Bootstrap-style panel */}
        <div className="p-6 flex items-start gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-blue-800">
              {info.siteName}
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed-100">
              {content.teamDescription}
            </p>
            <button className="text-white bg-blue-800 rounded-full h-10 px-6 font-medium shadow">
              {content.booking}
            </button>
          </div>
          <Image
            src="/massage-hero-new.png"
            alt="Bloom"
            width={100}
            height={50}
            className="h-60 w-70"
          />
        </div>

        {/* Reservation Portal */}
        <section id="booking" className="scroll-mt-10">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-normal text-gray-800"></h2>
            <div className="h-px bg-blue-800 flex-1 ml-6"></div>
          </div>
          <p className="text-center text-blue-800 text-2xl leading-relaxed mb-4">
            {content.booking}
          </p>
          <div className="bg-white -xl shadow-lg border border-gray-200 overflow-hidden w-200 h-150 mx-auto">
            <div className="flex bg-gray-100 border-b border-gray-200">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className={`flex-1 text-center py-3 font-medium text-sm transition-colors duration-300 ${step === num ? "bg-blue-800 text-white shadow-inner" : step > num ? "text-blue-600 bg-white cursor-pointer hover:bg-gray-50" : "text-gray-400"}`}
                  onClick={() => (step > num ? setStep(num) : null)}
                >
                  <span
                    className={`inline-block w-6 h-6 -full mr-2 ${step === num ? "bg-white text-blue-800" : step > num ? "bg-blue-100 text-blue-800" : "bg-gray-200 text-gray-500"} leading-6`}
                  >
                    {num}
                  </span>
                  {num === 1
                    ? content.bookingNav[0]
                    : num === 2
                      ? content.bookingNav[1]
                      : num === 3
                        ? content.bookingNav[2]
                        : content.bookingNav[3]}
                </div>
              ))}
            </div>

            <div className="p-8 min-h-[400px]">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-white bg-blue-800 p-3 mb-4">
                    {content.cardDesc}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Box 1 */}
                    <label className="block cursor-pointer group">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 border-black-200 p-5 w-110 
                    hover:bg-blue-50 transition-colors
                    peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[0].title}
                          </span>
                          <span className="font-semibold text-blue-800">
                            {content.services[0].pricing}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {content.services[0].description}
                        </p>
                      </div>
                    </label>

                    {/* Box 2 */}
                    <label className="block cursor-pointer group flex justify-end">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 border-black-200 p-4 w-70 ml-6 h-18
                    hover:bg-blue-50 transition-colors
                    peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[2].title}
                          </span>
                          <span className="text-blue-600 font-bold">
                            {content.services[2].pricing}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {content.services[2].description}
                        </p>
                      </div>
                    </label>

                    {/* Box 3 */}
                    <label className="block cursor-pointer group">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 border-black-200 p-5 -mt-2 w-110 
                    hover:bg-blue-50 transition-colors
                    peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[1].title}
                          </span>
                          <span className="font-semibold text-blue-800">
                            {content.services[1].pricing}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {content.services[1].description}
                        </p>
                      </div>
                    </label>

                    {/* Box 4 */}
                    <label className="block cursor-pointer group flex justify-end">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 border-black-200 p-4 w-70 ml-6 -mt-17 h-18
                    hover:bg-blue-50 transition-colors
                    peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[3].title}
                          </span>
                          <span className="text-blue-600 font-bold">
                            {content.services[3].pricing}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {content.services[3].description}
                        </p>
                      </div>
                    </label>

                    {/* Box 5 */}
                    <label className="block cursor-pointer group">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 border-black-200 p-5 w-110 h-10 -mt-3
                        flex flex-col justify-evenly pt-2
                        hover:bg-blue-50 transition-colors
                        peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[6]?.title}
                          </span>
                          <span className="text-blue-600 font-bold">+</span>
                        </div>
                      </div>
                    </label>

                    {/* Box 6 */}
                    <label className="block cursor-pointer group flex justify-end">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 border-black-200 p-4 w-70 ml-6 -mt-30 h-18
                    hover:bg-blue-50 transition-colors
                    peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[4]?.title}
                          </span>
                          <span className="text-blue-600 font-bold">
                            {content.services[4]?.pricing}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {content.services[4]?.description}
                        </p>
                      </div>
                    </label>

                    {/* Box 7 */}
                    <label className="block cursor-pointer group">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 -border-black 200 p-5 -mt-3 w-110 h-10
                        flex flex-col justify-evenly pt-2
                        hover:bg-blue-50 transition-colors
                        peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[7]?.title}
                          </span>
                          <span className="text-blue-600 font-bold">+</span>
                        </div>
                      </div>
                    </label>

                    {/* Box 8 */}
                    <label className="block cursor-pointer group flex justify-end">
                      <input
                        type="radio"
                        name="service"
                        className="peer sr-only"
                      />

                      <div
                        className="border-2 border-black-200 p-4 w-70 ml-6 -mt-24 h-18
                    hover:bg-blue-50 transition-colors
                    peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {content.services[5]?.title}
                          </span>
                          <span className="text-blue-600 font-bold">
                            {content.services[5]?.pricing}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {content.services[5]?.description}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-md mx-auto">
                  <h3 className="text-xl font-medium text-gray-700 mb-6 pb-2 border-b">
                    {content.appointment}
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.date}
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                        defaultValue="2026-05-01"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.openTimes}
                      </label>
                      <select className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white">
                        <option value="" disabled selected>
                          {content.selectTime}
                        </option>
                        <option>09:00</option>
                        <option>10:30</option>
                        <option>13:00</option>
                        <option>15:00</option>
                        <option>16:30</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.employee}
                      </label>
                      <select className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white">
                        <option value="" disabled selected>
                          {content.selectEmployee}
                        </option>
                        <option>{info.employees[0].name}</option>
                        <option>{info.employees[1].name}</option>
                        <option>{info.employees[2].name}</option>
                        <option>{info.employees[3].name}</option>
                        <option>{info.employees[4].name}</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-lg mx-auto">
                  <h3 className="text-xl font-medium text-gray-700 mb-6 pb-2 border-b">
                    {content.customerDetails}
                  </h3>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {content.fName}
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {content.lName}
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {content.eAddress}
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-md mx-auto">
                  <h3 className="text-xl font-medium text-gray-700 mb-4 pb-2 border-b ">
                    {content.payment}
                  </h3>
                  <button
                    className={`px-5 py-2.5  shadow-sm text-sm font-medium transition-colors`}
                  >
                    {content.paymentAction}
                  </button>
                </div>
              )}
            </div>

            {/* Footer Form Controls */}
            <div className="p-5 flex justify-between items-center -b-xl -mt-10 mr-3">
              <button
                onClick={prevStep}
                className={`px-5 py-2.5  shadow-sm text-sm font-medium transition-colors ${step === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed hidden" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}
                disabled={step === 1}
              >
                {content.progressButtonB}
              </button>

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2.5  shadow text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-auto transition-colors"
                >
                  {content.progressButtonF}
                </button>
              ) : (
                <button
                  onClick={submitBooking}
                  className="px-6 py-2.5  shadow-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors ml-auto flex items-center"
                >
                  {content.confirmButton}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section>
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-normal text-gray-800">
              {content.locationMainTitle}
            </h2>
            <div className="h-px bg-gray-300 flex-1 ml-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 bg-grey-300 -xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {content.locationTitle}
              </h3>

              <div className="flex space-x-6 text-gray-600 mb-8">
                <div>
                  <div className="flex items-start mb-3">
                    <div>
                      <p>{info.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {content.openHours}
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between py-1 border-b border-gray-100">
                  <span>{content.monFri}</span>
                  <span className="font-medium text-gray-800">
                    {content.monFriOpenHours}
                  </span>
                </li>
                <li className="flex justify-between py-1 border-b border-gray-100">
                  <span>{content.sat}</span>
                  <span className="font-medium text-gray-800">
                    {content.satOpenHours}
                  </span>
                </li>
                <li className="flex justify-between py-1">
                  <span>{content.sun}</span>
                  <span className="font-medium text-gray-400">
                    {content.sunOpenHours}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 relative min-h-[300px]">
              {/* Map Placeholder */}
              <h5 className="text-xl font-semibold text-gray-800 mb-4 -mt-10 ml-112">
                {content.mapTitle}
              </h5>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-100 border-l border-gray-200">
                <Image
                  src="/icons/map.png"
                  alt="Location"
                  width={260}
                  height={90}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Employee Information */}
        <section className="pb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-normal text-gray-800">
              {content.aboutUs}
            </h2>
            <div className="h-px bg-gray-300 flex-1 ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {info.employees.map((employee) => (
              <article key={employee.id} className="text-center">
                <div className="h-75 w-50 bg-white -xl overflow-hidden border-white hover:transition-shadow group">
                  <div className="h-50 w-50 bg-white-200 overflow-hidden">
                    {/* Next.js unoptimized used for external links in this mockup */}
                    <img
                      src={employee.image}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {employee.name}
                    </h3>
                    <div className="flex items-center justify-center text-sm mb-4">
                      <span className="text-blue-600 font-medium">
                        {employee.role}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Footer - Modern 2015 look */}
      <footer className="bg-blue-800 text-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div>
          <div className="text-2xl font-semibold text-white tracking-wide flex items-center">
            <LogoIcon className="h-16 w-16 text-white" />
            <span className={`ml-2 ${logoFont.className}`}>Harmonia</span>
          </div>
          </div>
          <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              {content.footer[0]}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {content.footer[1]}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {content.footer[2]}
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center mt-4">
          <div>
            <h1 className="text-xs font-semibold text-white">{info.address}</h1>
            <h2 className="text-xs font-semibold text-white mt-1">
              {info.email}
            </h2>
            <h3 className="text-xs font-semibold text-white mt-1">
              {info.phone}, {content.phonePricing}, {content.phoneOpenHours}
            </h3>
            <p className="text-sm text-white mt-10">
              &copy; 2026 {content.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
