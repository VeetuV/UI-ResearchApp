"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SurveyModal from "@/components/SurveyModal";
import { useLocale } from "@/lib/LocaleContext";

export default function FloatingSurveyButton() {
	const [isSurveyOpen, setIsSurveyOpen] = useState(false);
	const [showHint, setShowHint] = useState(false);
	const [hintClosed, setHintClosed] = useState(false);
	const pathname = usePathname();
	const { messages } = useLocale();

	useEffect(() => {
		if (pathname !== "/studypage1" || hintClosed) return;

		const handleScroll = () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
				setShowHint(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		// Check once on mount in case the user is already at the bottom
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname, hintClosed]);

	if (pathname === "/") {
		return null;
	}

	return (
		<>
			<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
				{showHint && !hintClosed && (
					<div className="relative rounded-lg bg-white p-4 shadow-xl border border-slate-200 w-64">
						<button 
							onClick={() => setHintClosed(true)}
							className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 focus:outline-none"
							aria-label="Close hint"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
						</button>
						<p className="text-sm text-slate-700 pr-4 leading-relaxed">{messages.floating.hint}</p>
						<div className="absolute -bottom-2 right-12 w-4 h-4 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
					</div>
				)}
				<button
					type="button"
					onClick={() => {
						setIsSurveyOpen(true);
						setShowHint(false);
						setHintClosed(true);
					}}
					className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
				>
					{messages.floating.openSurvey}
				</button>
			</div>

			<SurveyModal isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} />
		</>
	);
}
