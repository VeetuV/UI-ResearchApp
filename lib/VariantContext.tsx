"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type StudyGroup = "A" | "B";

type VariantContextValue = {
	studyGroup: StudyGroup;
	surveyUrl: string;
};

const VariantContext = createContext<VariantContextValue | undefined>(undefined);

const STORAGE_KEY = "ux-study-group";

function randomGroup(): StudyGroup {
	return Math.random() < 0.5 ? "A" : "B";
}

export function VariantProvider({ children }: { children: React.ReactNode }) {
	const [studyGroup, setStudyGroup] = useState<StudyGroup>("A");
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "A" || stored === "B") {
			setStudyGroup(stored);
		} else {
			const group = randomGroup();
			window.localStorage.setItem(STORAGE_KEY, group);
			setStudyGroup(group);
		}
		setReady(true);
	}, []);

	const value = useMemo(() => {
		const surveyUrl =
			studyGroup === "A"
				? (process.env.NEXT_PUBLIC_SURVEY_URL_A?.trim() ?? "")
				: (process.env.NEXT_PUBLIC_SURVEY_URL_B?.trim() ?? "");

		return { studyGroup, surveyUrl };
	}, [studyGroup]);

	// Avoid rendering children before group is determined to prevent flash
	if (!ready) return null;

	return (
		<VariantContext.Provider value={value}>{children}</VariantContext.Provider>
	);
}

export function useVariant() {
	const context = useContext(VariantContext);
	if (!context) {
		throw new Error("useVariant must be used within VariantProvider");
	}
	return context;
}
