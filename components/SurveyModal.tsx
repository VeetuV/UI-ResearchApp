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
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition ${
				isOpen ? "opacity-100" : "pointer-events-none opacity-0"
			}`}
			aria-hidden={!isOpen}
		>
			<div
				className="absolute inset-0 bg-black/60"
				aria-hidden="true"
				onClick={onClose}
			/>

			<div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
				<div className="flex items-start justify-between gap-4">
					<div>
						<h2 className="text-2xl font-semibold text-slate-900">
							{messages.survey.title}
						</h2>
						<p className="mt-2 text-sm leading-6 text-slate-600">
							{messages.survey.description}
						</p>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
					>
						{messages.survey.close}
					</button>
				</div>

				<div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
					{webropolSurveyUrl ? (
						<iframe
							title={messages.survey.title}
							src={webropolSurveyUrl}
							className="h-[420px] w-full"
							loading="lazy"
							referrerPolicy="strict-origin-when-cross-origin"
						/>
					) : (
						<p className="p-4 text-sm leading-6 text-slate-600">
							{messages.survey.notConfigured}
						</p>
					)}
				</div>

				<div className="mt-6 flex items-center justify-between">
					<button
						type="button"
						onClick={handleBack}
						className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
					>
						{messages.survey.back}
					</button>
					<button
						type="button"
						onClick={handleNext}
						disabled={!hasNext}
						className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
					>
						{messages.survey.next}
					</button>
				</div>
			</div>
		</div>
	);
}
