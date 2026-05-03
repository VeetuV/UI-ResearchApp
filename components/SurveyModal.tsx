"use client";

import { useLocale } from "@/lib/LocaleContext";
import { useVariant } from "@/lib/VariantContext";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const studyRoutes = [
  "/studypage1",
  "/studypage2",
  "/studypage3",
  "/studypage4",
];

type SurveyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const { messages } = useLocale();
  const { surveyUrl } = useVariant();
  const router = useRouter();
  const pathname = usePathname();

  const currentRouteIndex = studyRoutes.indexOf(pathname);
  const hasNext =
    currentRouteIndex >= 0 && currentRouteIndex < studyRoutes.length - 1;

  const [maxRouteIndex, setMaxRouteIndex] = useState(0);

  useEffect(() => {
    if (currentRouteIndex < 0) return;
    
    const saved = sessionStorage.getItem("ux-study-max-route");
    const savedMax = saved ? parseInt(saved, 10) : 0;
    const newMax = Math.max(savedMax, currentRouteIndex);
    
    setMaxRouteIndex(newMax);
    sessionStorage.setItem("ux-study-max-route", newMax.toString());
  }, [currentRouteIndex]);

  const handleBack = () => {
    onClose();
    if (currentRouteIndex > 0) {
      router.push(studyRoutes[currentRouteIndex - 1]);
    } else {
      router.push("/");
    }
  };

  const handleNext = () => {
    if (!hasNext) {
      return;
    }

    onClose();
    router.push(studyRoutes[currentRouteIndex + 1]);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 transition ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 flex h-[95vh] w-full max-w-5xl flex-col rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex flex-none items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              {messages.survey.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {messages.survey.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
            aria-label={messages.survey.close}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Iframe Container for webropol survey */}
        <div className="relative mt-6 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          {surveyUrl ? (
            <iframe
              title={messages.survey.title}
              src={surveyUrl}
              style={{
                width: "125%",
                height: "125%", // Uses 125% of the dynamic parent height
                transform: "scale(0.8)",
                transformOrigin: "0 0",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              loading="lazy"
            />
          ) : (
            <p className="p-4 text-sm text-slate-600">
              {messages.survey.notConfigured}
            </p>
          )}
        </div>

        {/* Footer for buttons */}
        <div className="mt-6 flex flex-none items-center justify-between">
          <button
            onClick={handleBack}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {messages.survey.back}
          </button>

          <div className="flex gap-2">
            {studyRoutes.map((route, idx) => {
              // A button is accessible if it's the current page, previously visited, or exactly one step ahead of the furthest visited page
              const isGreyedOut = idx > maxRouteIndex + 1;
              return (
                <button
                  key={route}
                  onClick={() => {
                    onClose();
                    router.push(route);
                  }}
                  disabled={isGreyedOut}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition ${
                    currentRouteIndex === idx
                      ? "bg-slate-900 text-white"
                      : isGreyedOut
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
            <button
              disabled
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 text-sm font-medium cursor-not-allowed"
            >
              5
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={!hasNext}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:bg-slate-300"
          >
            {messages.survey.next}
          </button>
        </div>
      </div>
    </div>
  );
}
