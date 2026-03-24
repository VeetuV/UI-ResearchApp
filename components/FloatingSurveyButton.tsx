"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import SurveyModal from "@/components/SurveyModal";
import { useLocale } from "@/lib/LocaleContext";

export default function FloatingSurveyButton() {
	const [isSurveyOpen, setIsSurveyOpen] = useState(false);
	const pathname = usePathname();
	const { messages } = useLocale();

	if (pathname === "/") {
		return null;
	}

	return (
		<>
			<button
				type="button"
				onClick={() => setIsSurveyOpen(true)}
				className="fixed bottom-6 right-6 z-40 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
			>
				{messages.floating.openSurvey}
			</button>

			<SurveyModal isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} />
		</>
	);
}
