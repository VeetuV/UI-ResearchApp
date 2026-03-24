"use client";

import { useLocale } from "@/lib/LocaleContext";

export default function ExamplePage2() {
	const { messages } = useLocale();

	return (
		<div className="min-h-screen bg-slate-100 text-slate-900">
			<main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
				<section className="rounded-2xl bg-white p-8 shadow-sm lg:p-12">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
						{messages.pages.page2Title}
					</h1>
					<p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
						{messages.pages.pageBody}
					</p>
				</section>
			</main>
		</div>
	);
}
