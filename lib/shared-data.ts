import type { StudyGroup } from "@/lib/VariantContext";

export const siteData = {
	fi: {
		siteName: "Hyvinvointikeskus",
		brand: "Hyvinvointikeskus",
		address: "Hämeenkatu 12 A, 33100 Tampere",
		phone: "040 123 4567",
		email: "info@hyvinvointikeskustampere.fi",
		employees: [
			{
				id: "e1",
				name: "Sari Virtanen",
				role: "Koulutettu hieroja",
				image: "/employee1-new.png",
				bio: "Sarilla on 10 vuoden kokemus klassisesta hieronnasta ja urheiluhieronnasta. Hän on erikoistunut niska-hartiaseudun kiputiloihin.",
			},
			{
				id: "e2",
				name: "Mikael Lahti",
				role: "Naprapaatti",
				image: "/employee2-new.png",
				bio: "Mikael auttaa kehon virheasentojen korjaamisessa sekä kroonisten selkäkipujen lievittämisessä tarkkojen hoitomenetelmien avulla.",
			},
			{
				id: "e3",
				name: "Aino Korhonen",
				role: "Koulutettu hieroja",
				image: "/employee3-new.png",
				bio: "Aino yhdistää hoitoihinsa lempeitä mutta tehokkaita tekniikoita, jotka sopivat erinomaisesti stressin purkuun ja syvään rentoutumiseen.",
			},
			{
				id: "e4",
				name: "Leo Adam",
				role: "Urheiluhieroja",
				image: "/employee4-new.png",
				bio: "Leo on erikoistunut aktiiviliikkujien ja urheilijoiden lihashuoltoon sekä palautumisen nopeuttamiseen laaja-alaisen ymmärryksensä avulla.",
			},
			{
				id: "e5",
				name: "Jorma Järvinen",
				role: "Erikoishieroja & Osteopaatti",
				image: "/employee5-new.png",
				bio: "Yli 25 vuoden kokemuksella Jorma on erikoistunut syviin kroonisiin kiputiloihin ja osteopaattiseen lihashuoltoon pitkäaikaisilla tuloksilla.",
			},
		],
	},
	en: {
		siteName: "Wellness Center",
		brand: "Wellness Center",
		address: "Hämeenkatu 12 A, 33100 Tampere",
		phone: "+358 40 123 4567",
		email: "info@hyvinvointikeskustampere.fi",
		employees: [
			{
				id: "e1",
				name: "Sari Virtanen",
				role: "Certified Massage Therapist",
				image: "/employee1-new.png",
				bio: "Sari has 10 years of experience in classic and sports massage. She specializes in relieving tension in the neck and shoulder area.",
			},
			{
				id: "e2",
				name: "Mikael Lahti",
				role: "Naprapath",
				image: "/employee2-new.png",
				bio: "Mikael helps correct body posture issues and alleviate chronic back pain using precise treatment methods.",
			},
			{
				id: "e3",
				name: "Aino Korhonen",
				role: "Certified Massage Therapist",
				image: "/employee3-new.png",
				bio: "Aino incorporates gentle yet effective techniques into her treatments, perfect for stress relief and deep relaxation.",
			},
			{
				id: "e4",
				name: "Leo Adam",
				role: "Sports Massage Therapist",
				image: "/employee4-new.png",
				bio: "Leo specializes in muscle care for active individuals, helping them recover faster with his comprehensive understanding of the body.",
			},
			{
				id: "e5",
				name: "Jorma Järvinen",
				role: "Specialist Massage Therapist & Osteopath",
				image: "/employee5-new.png",
				bio: "With over 25 years of experience, Jorma specializes in deep chronic pain and osteopathic muscle care with long-term results.",
			},
		],
	},
} as const;

/**
 * Maps each employee ID to its stock-photo path.
 * Only employee images change between groups; all other data stays the same.
 */
const stockImageMap: Record<string, string> = {
	e1: "/stock-photos/employee1-stock.jpg",
	e2: "/stock-photos/employee2-stock.jpg",
	e3: "/stock-photos/employee3-stock.jpg",
	e4: "/stock-photos/employee4-stock.jpg",
	e5: "/stock-photos/employee5-stock.jpg",
};

/**
 * Returns the employee list for the given locale, with images swapped
 * to stock photos when the participant is in group B.
 */
export function getEmployees(locale: "fi" | "en", studyGroup: StudyGroup) {
	const employees = siteData[locale].employees;
	if (studyGroup === "A") return employees;

	return employees.map((emp) => ({
		...emp,
		image: stockImageMap[emp.id] ?? emp.image,
	}));
}
