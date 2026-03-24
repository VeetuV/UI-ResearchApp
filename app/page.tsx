"use client";

import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";

export default function Home() {
  const { locale, setLocale, messages } = useLocale();

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
        <section className="rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              {messages.intro.badge}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">{messages.locale.label}</span>
              <button
                type="button"
                onClick={() => setLocale("fi")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  locale === "fi"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {messages.locale.finnish}
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  locale === "en"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {messages.locale.english}
              </button>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {messages.intro.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {messages.intro.body}
          </p>

          <Link
            href="/variants/examplepage1"
            className="mt-8 inline-flex rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {messages.intro.begin}
          </Link>
        </section>
      </main>
    </div>
  );
}
