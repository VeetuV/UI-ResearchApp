"use client";

import { useLocale } from "@/lib/LocaleContext";
import { usePathname, useRouter } from "next/navigation";

const studyRoutes = [
	"/variants/studypage1",
	"/variants/studypage2",
	"/variants/studypage3",
];

type SurveyModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const webropolSurveyUrl = process.env.NEXT_PUBLIC_WEBROPOL_SURVEY_URL?.trim() ?? "";

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
	const { messages } = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const currentRouteIndex = studyRoutes.indexOf(pathname);
	const hasNext =
		currentRouteIndex >= 0 && currentRouteIndex < studyRoutes.length - 1;

	const handleBack = () => {
		onClose();
		router.push("/");
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
						<h2 className="text-2xl font-semibold text-slate-900">{messages.survey.title}</h2>
						<p className="mt-1 text-sm text-slate-600">{messages.survey.description}</p>
					</div>
					<button onClick={onClose} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700">
						{messages.survey.close}
					</button>
				</div>

				{/* Iframe Container for webropol survey */}
				<div className="relative mt-6 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
					{webropolSurveyUrl ? (
						<iframe
							title={messages.survey.title}
							src={webropolSurveyUrl}
							style={{
								width: '125%', 
								height: '125%', // Uses 125% of the dynamic parent height
								transform: 'scale(0.8)', 
								transformOrigin: '0 0',
								position: 'absolute',
								top: 0,
								left: 0
							}}
							loading="lazy"
						/>
					) : (
						<p className="p-4 text-sm text-slate-600">{messages.survey.notConfigured}</p>
					)}
				</div>

				{/* Footer for buttons */}
				<div className="mt-6 flex flex-none items-center justify-between">
					<button onClick={handleBack} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">
						{messages.survey.back}
					</button>
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
