"use client";

import { useLocale } from "@/lib/LocaleContext";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useVariant } from "@/lib/VariantContext";
import { Playfair_Display } from "next/font/google";

const logoFont = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

/* ────────────────────────────────────────────
   Inline bilingual content for the Hieronta page
   ──────────────────────────────────────────── */
const content = {
	fi: {
		nav: {
			brand: "Harmonia",
			links: ["Palvelut", "Meistä", "Arvostelut", "Hinnasto", "Yhteystiedot"],
		},
		hero: {
			tagline: "Luonnollista hyvinvointia",
			title: "Rentoudu. Palaudu. Voi hyvin.",
			subtitle:
				"Ammattitaitoista hierontaa rauhallisessa ympäristössä. Kehosi ansaitsee parasta hoitoa ja huolenpitoa.",
			cta: "Varaa aika",
			secondary: "Tutustu palveluihin",
		},
		services: {
			badge: "Palvelumme",
			title: "Hierontapalvelut sinulle",
			subtitle:
				"Jokaiselle löytyy sopiva hoito. Valitse tarpeisiisi parhaiten sopiva hierontatyyppi.",
			items: [
				{
					icon: "🌿",
					name: "Klassinen hieronta",
					desc: "Perinteinen kokovartalohieronta, joka lievittää jännitystä ja parantaa verenkiertoa.",
					duration: "60 min",
				},
				{
					icon: "🔥",
					name: "Kuumakivihieronta",
					desc: "Lämpimät kivet vapauttavat syvän lihasjännityksen ja tuovat syvän rentoutumisen.",
					duration: "75 min",
				},
				{
					icon: "💆",
					name: "Aromahieronta",
					desc: "Eteeristen öljyjen ja herkkien otteiden yhdistelmä sekä keholle että mielelle.",
					duration: "60 min",
				},
				{
					icon: "🏋️",
					name: "Urheiluhieronta",
					desc: "Tehokas hieronta lihasten palautumiseen ja urheiluvammojen ennaltaehkäisyyn.",
					duration: "45 min",
				},
				{
					icon: "🧘",
					name: "Intialainen päähieronta",
					desc: "Keskittyy päähän, niskaan ja hartioihin. Helpottaa stressiä ja päänsärkyä.",
					duration: "30 min",
				},
				{
					icon: "🦶",
					name: "Jalkahieronta",
					desc: "Vyöhyketerapiaan perustuva jalkapohjien hieronta, joka vaikuttaa koko kehoon.",
					duration: "45 min",
				},
			],
		},
		about: {
			badge: "Meistä",
			title: "Vuosien kokemus hyvinvoinnin edistämisessä",
			body: "Harmonia on toiminut Tampereen keskustassa jo yli 10 vuoden ajan. Koulutetut hierojamme yhdistävät perinteiset tekniikat moderneihin hoitomenetelmiin. Uskomme, että jokainen ansaitsee hetken rauhoittumiseen kiireisen arjen keskellä.",
			stats: [
				{ value: "10+", label: "Vuotta kokemusta" },
				{ value: "5 000+", label: "Tyytyväistä asiakasta" },
				{ value: "4.9", label: "Keskiarvosana" },
			],
		},
		testimonials: {
			badge: "Arvostelut",
			title: "Asiakkaidemme kokemuksia",
			items: [
				{
					text: "Parasta hierontaa mitä olen kokenut. Ympäristö on rauhallinen ja henkilökunta ammattitaitoista. Suosittelen lämpimästi!",
					author: "Maria K.",
					role: "Vakioasiakas",
					rating: 5,
				},
				{
					text: "Kuumakivihieronta oli uskomaton kokemus. Jännitys hävisi ja nukuin sen jälkeen paremmin kuin aikoihin.",
					author: "Jukka L.",
					role: "Urheilija",
					rating: 5,
				},
				{
					text: "Käyn säännöllisesti urheiluhieronnassa. Palautuminen harjoituksista on nopeutunut huomattavasti.",
					author: "Aino S.",
					role: "Kestävyysjuoksija",
					rating: 5,
				},
			],
		},
		pricing: {
			badge: "Hinnasto",
			title: "Selkeä ja reilu hinnoittelu",
			subtitle: "Ilman piilokustannuksia. Valitse sinulle sopiva paketti.",
			plans: [
				{
					name: "Yksittäinen käynti",
					price: "65",
					unit: "/ käynti",
					features: [
						"60 min klassinen hieronta",
						"Henkilökohtainen hoitosuunnitelma",
						"Joustavat peruutusehdot",
					],
					highlight: false,
				},
				{
					name: "5 kerran paketti",
					price: "55",
					unit: "/ käynti",
					features: [
						"Kaikki hierontatyypit",
						"Voimassa 6 kuukautta",
						"Prioriteetti ajanvarauksessa",
						"Säästät 50 €",
					],
					highlight: true,
				},
				{
					name: "10 kerran paketti",
					price: "49",
					unit: "/ käynti",
					features: [
						"Kaikki hierontatyypit",
						"Voimassa 12 kuukautta",
						"Prioriteetti ajanvarauksessa",
						"Säästät 160 €",
						"Ilmainen arviointi",
					],
					highlight: false,
				},
			],
		},
		contact: {
			badge: "Yhteystiedot",
			title: "Ota yhteyttä tai varaa aika",
			address: "Hämeenkatu 12 A, 33100 Tampere",
			phone: "+358 40 123 4567",
			email: "info@harmonia.fi",
			hours: ["Ma–Pe: 8:00–20:00", "La: 10:00–16:00", "Su: Suljettu"],
			formName: "Nimi",
			formEmail: "Sähköposti",
			formMessage: "Viesti",
			formSubmit: "Lähetä viesti",
		},
		footer: {
			copy: "© 2025 Harmonia. Kaikki oikeudet pidätetään.",
			links: ["Tietosuoja", "Käyttöehdot", "Saavutettavuus"],
		},
	},
	en: {
		nav: {
			brand: "Harmonia",
			links: [
				"Services",
				"About",
				"Testimonials",
				"Pricing",
				"Contact",
			],
		},
		hero: {
			tagline: "Natural wellbeing",
			title: "Relax. Recover. Thrive.",
			subtitle:
				"Professional massage therapy in a tranquil setting. Your body deserves the very best care and attention.",
			cta: "Book now",
			secondary: "Explore services",
		},
		services: {
			badge: "Our Services",
			title: "Massage treatments for you",
			subtitle:
				"There is a perfect treatment for everyone. Choose the type that best fits your needs.",
			items: [
				{
					icon: "🌿",
					name: "Classic Massage",
					desc: "Traditional full-body massage that relieves tension and improves circulation.",
					duration: "60 min",
				},
				{
					icon: "🔥",
					name: "Hot Stone Massage",
					desc: "Warm stones release deep muscle tension and bring profound relaxation.",
					duration: "75 min",
				},
				{
					icon: "💆",
					name: "Aroma Massage",
					desc: "A blend of essential oils and gentle strokes for both body and mind.",
					duration: "60 min",
				},
				{
					icon: "🏋️",
					name: "Sports Massage",
					desc: "Effective treatment for muscle recovery and sports injury prevention.",
					duration: "45 min",
				},
				{
					icon: "🧘",
					name: "Indian Head Massage",
					desc: "Focuses on the head, neck and shoulders. Relieves stress and headaches.",
					duration: "30 min",
				},
				{
					icon: "🦶",
					name: "Foot Reflexology",
					desc: "Zone therapy-based foot massage that benefits the whole body.",
					duration: "45 min",
				},
			],
		},
		about: {
			badge: "About Us",
			title: "Years of experience promoting wellbeing",
			body: "Harmonia has been operating in the centre of Tampere for over 10 years. Our certified therapists combine traditional techniques with modern treatment methods. We believe everyone deserves a moment of calm in the middle of a busy day.",
			stats: [
				{ value: "10+", label: "Years of experience" },
				{ value: "5,000+", label: "Happy clients" },
				{ value: "4.9", label: "Average rating" },
			],
		},
		testimonials: {
			badge: "Testimonials",
			title: "What our clients say",
			items: [
				{
					text: "The best massage I have ever had. The environment is peaceful and the staff are highly skilled. Highly recommended!",
					author: "Maria K.",
					role: "Regular client",
					rating: 5,
				},
				{
					text: "The hot stone massage was an incredible experience. The tension melted away and I slept better than I had in ages.",
					author: "Jukka L.",
					role: "Athlete",
					rating: 5,
				},
				{
					text: "I visit regularly for sports massage. My recovery from workouts has improved significantly.",
					author: "Aino S.",
					role: "Endurance runner",
					rating: 5,
				},
			],
		},
		pricing: {
			badge: "Pricing",
			title: "Clear and fair pricing",
			subtitle: "No hidden costs. Choose the package that suits you.",
			plans: [
				{
					name: "Single Visit",
					price: "65",
					unit: "/ visit",
					features: [
						"60 min classic massage",
						"Personal treatment plan",
						"Flexible cancellation policy",
					],
					highlight: false,
				},
				{
					name: "5-Visit Package",
					price: "55",
					unit: "/ visit",
					features: [
						"All massage types",
						"Valid for 6 months",
						"Priority booking",
						"Save 50 €",
					],
					highlight: true,
				},
				{
					name: "10-Visit Package",
					price: "49",
					unit: "/ visit",
					features: [
						"All massage types",
						"Valid for 12 months",
						"Priority booking",
						"Save 160 €",
						"Free assessment",
					],
					highlight: false,
				},
			],
		},
		contact: {
			badge: "Contact",
			title: "Get in touch or book an appointment",
			address: "Hämeenkatu 12 A, 33100 Tampere",
			phone: "+358 40 123 4567",
			email: "info@hieronta.fi",
			hours: ["Mon–Fri: 8:00–20:00", "Sat: 10:00–16:00", "Sun: Closed"],
			formName: "Name",
			formEmail: "Email",
			formMessage: "Message",
			formSubmit: "Send message",
		},
		footer: {
			copy: "© 2025 Hieronta. All rights reserved.",
			links: ["Privacy", "Terms", "Accessibility"],
		},
	},
} as const;

/* ────────────────────────────────────────────
   Fade-in-on-scroll hook
   ──────────────────────────────────────────── */
function useFadeIn() {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					io.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return { ref, visible };
}

function FadeSection({
	children,
	className = "",
	delay = "0ms",
}: {
	children: React.ReactNode;
	className?: string;
	delay?: string;
}) {
	const { ref, visible } = useFadeIn();
	return (
		<div
			ref={ref}
			className={className}
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? "translateY(0)" : "translateY(32px)",
				transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
			}}
		>
			{children}
		</div>
	);
}

/* ────────────────────────────────────────────
   Star component
   ──────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
	return (
		<span className="flex gap-0.5 text-amber-400">
			{Array.from({ length: count }).map((_, i) => (
				<svg
					key={i}
					viewBox="0 0 20 20"
					fill="currentColor"
					className="h-4 w-4"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
				</svg>
			))}
		</span>
	);
}

/* ────────────────────────────────────────────
   Main Page Component
   ──────────────────────────────────────────── */
export default function StudyPage1() {
	const { locale } = useLocale();
	const t = content[locale];
	const { studyGroup } = useVariant();
	const [mobileMenu, setMobileMenu] = useState(false);

	/* Section IDs for anchor scrolling */
	const sectionIds = [
		"palvelut",
		"meista",
		"arvostelut",
		"hinnasto",
		"yhteystiedot",
	];

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMobileMenu(false);
	};

	return (
		<div className="min-h-screen bg-[#FAF7F2] text-[#2D2A26] font-[system-ui]">
			{/* ─── NAVIGATION ─── */}
			<nav className={`${studyGroup === "A" ? "sticky top-0" : ""} z-30 border-b border-[#E8E0D4] bg-[#FAF7F2]/90 backdrop-blur-md`}>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					{/* Brand */}
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className={`text-2xl font-bold tracking-tight text-[#6B4F3A] ${logoFont.className}`}
					>
						{t.nav.brand}
					</button>

					{/* Desktop links */}
					<ul className="hidden gap-8 md:flex">
						{t.nav.links.map((link, i) => (
							<li key={link}>
								<button
									onClick={() => scrollTo(sectionIds[i])}
									className="text-sm font-medium text-[#6B5D4F] transition hover:text-[#6B4F3A]"
								>
									{link}
								</button>
							</li>
						))}
					</ul>

					{/* CTA + mobile toggle */}
					<div className="flex items-center gap-3">
						<button
							onClick={() => scrollTo("yhteystiedot")}
							className="hidden rounded-full bg-[#6B4F3A] px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#574030] sm:inline-flex"
						>
							{t.hero.cta}
						</button>
						<button
							onClick={() => setMobileMenu(!mobileMenu)}
							className="rounded-md p-2 text-[#6B5D4F] md:hidden"
							aria-label="Menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								{mobileMenu ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile dropdown */}
				{mobileMenu && (
					<div className="border-t border-[#E8E0D4] px-6 pb-4 md:hidden">
						{t.nav.links.map((link, i) => (
							<button
								key={link}
								onClick={() => scrollTo(sectionIds[i])}
								className="block w-full py-3 text-left text-sm font-medium text-[#6B5D4F] transition hover:text-[#6B4F3A]"
							>
								{link}
							</button>
						))}
					</div>
				)}
			</nav>

			{/* ─── HERO ─── */}
			<section className="relative overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0">
					<Image
						src="/massage-hero.png"
						alt=""
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-[#FAF7F2]/40" />
				</div>

				<div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-28 sm:py-36 lg:py-44">
					<FadeSection>
						<span className="mb-4 inline-block rounded-full bg-[#6B4F3A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B4F3A]">
							{t.hero.tagline}
						</span>
						<h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#2D2A26] sm:text-5xl lg:text-6xl">
							{t.hero.title}
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B5D4F]">
							{t.hero.subtitle}
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							<button
								onClick={() => scrollTo("yhteystiedot")}
								className="rounded-full bg-[#6B4F3A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6B4F3A]/25 transition hover:bg-[#574030] hover:shadow-xl"
							>
								{t.hero.cta}
							</button>
							<button
								onClick={() => scrollTo("palvelut")}
								className="rounded-full border-2 border-[#6B4F3A]/30 px-8 py-3.5 text-sm font-semibold text-[#6B4F3A] transition hover:border-[#6B4F3A]/60 hover:bg-[#6B4F3A]/5"
							>
								{t.hero.secondary}
							</button>
						</div>
					</FadeSection>
				</div>
			</section>

			{/* ─── SERVICES ─── */}
			<section id="palvelut" className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<FadeSection className="text-center">
						<span className="mb-3 inline-block rounded-full bg-[#6B4F3A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B4F3A]">
							{t.services.badge}
						</span>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							{t.services.title}
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B5D4F]">
							{t.services.subtitle}
						</p>
					</FadeSection>

					<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{t.services.items.map((svc, i) => (
							<FadeSection key={svc.name} delay={`${i * 80}ms`}>
								<div className="group relative flex h-full flex-col rounded-2xl border border-[#E8E0D4] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6B4F3A]/8">
									<span className="mb-4 text-3xl">{svc.icon}</span>
									<h3 className="text-lg font-bold text-[#2D2A26]">
										{svc.name}
									</h3>
									<p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B5D4F]">
										{svc.desc}
									</p>
									<span className="mt-4 inline-block rounded-full bg-[#F3EDE4] px-3 py-1 text-xs font-semibold text-[#6B4F3A]">
										{svc.duration}
									</span>
								</div>
							</FadeSection>
						))}
					</div>
				</div>
			</section>

			{/* ─── ABOUT ─── */}
			<section
				id="meista"
				className="bg-gradient-to-b from-[#F3EDE4] to-[#FAF7F2] py-24 sm:py-32"
			>
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid items-center gap-16 lg:grid-cols-2">
						<FadeSection>
							<div className="overflow-hidden rounded-3xl">
								<Image
									src="/massage-room.png"
									alt="Treatment room"
									width={720}
									height={480}
									className="h-auto w-full object-cover"
								/>
							</div>
						</FadeSection>

						<FadeSection delay="150ms">
							<span className="mb-3 inline-block rounded-full bg-[#6B4F3A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B4F3A]">
								{t.about.badge}
							</span>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								{t.about.title}
							</h2>
							<p className="mt-6 text-base leading-relaxed text-[#6B5D4F]">
								{t.about.body}
							</p>

							<div className="mt-10 grid grid-cols-3 gap-6">
								{t.about.stats.map((s) => (
									<div key={s.label}>
										<p className="text-3xl font-extrabold text-[#6B4F3A]">
											{s.value}
										</p>
										<p className="mt-1 text-sm text-[#6B5D4F]">{s.label}</p>
									</div>
								))}
							</div>
						</FadeSection>
					</div>
				</div>
			</section>

			{/* ─── TESTIMONIALS ─── */}
			<section id="arvostelut" className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<FadeSection className="text-center">
						<span className="mb-3 inline-block rounded-full bg-[#6B4F3A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B4F3A]">
							{t.testimonials.badge}
						</span>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							{t.testimonials.title}
						</h2>
					</FadeSection>

					<div className="mt-16 grid gap-8 md:grid-cols-3">
						{t.testimonials.items.map((rev, i) => (
							<FadeSection key={rev.author} delay={`${i * 100}ms`}>
								<div className="flex h-full flex-col rounded-2xl border border-[#E8E0D4] bg-white p-8 shadow-sm">
									<Stars count={rev.rating} />
									<p className="mt-5 flex-1 text-sm italic leading-relaxed text-[#6B5D4F]">
										&ldquo;{rev.text}&rdquo;
									</p>
									<div className="mt-6 border-t border-[#E8E0D4] pt-5">
										<p className="font-bold text-[#2D2A26]">{rev.author}</p>
										<p className="text-xs text-[#9A8D7F]">{rev.role}</p>
									</div>
								</div>
							</FadeSection>
						))}
					</div>
				</div>
			</section>

			{/* ─── PRICING ─── */}
			<section
				id="hinnasto"
				className="bg-gradient-to-b from-[#F3EDE4] to-[#FAF7F2] py-24 sm:py-32"
			>
				<div className="mx-auto max-w-7xl px-6">
					<FadeSection className="text-center">
						<span className="mb-3 inline-block rounded-full bg-[#6B4F3A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B4F3A]">
							{t.pricing.badge}
						</span>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							{t.pricing.title}
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6B5D4F]">
							{t.pricing.subtitle}
						</p>
					</FadeSection>

					<div className="mt-16 grid items-start gap-8 md:grid-cols-3">
						{t.pricing.plans.map((plan, i) => (
							<FadeSection key={plan.name} delay={`${i * 100}ms`}>
								<div
									className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
										plan.highlight
											? "border-[#6B4F3A] bg-[#6B4F3A] text-white"
											: "border-[#E8E0D4] bg-white"
									}`}
								>
									{plan.highlight && (
										<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-[#2D2A26]">
											{locale === "fi" ? "Suosituin" : "Most popular"}
										</span>
									)}
									<h3
										className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-[#2D2A26]"}`}
									>
										{plan.name}
									</h3>
									<div className="mt-4 flex items-baseline gap-1">
										<span
											className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-[#6B4F3A]"}`}
										>
											{plan.price} €
										</span>
										<span
											className={`text-sm ${plan.highlight ? "text-white/70" : "text-[#9A8D7F]"}`}
										>
											{plan.unit}
										</span>
									</div>
									<ul className="mt-8 flex-1 space-y-3">
										{plan.features.map((f) => (
											<li key={f} className="flex items-start gap-3 text-sm">
												<svg
													className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlight ? "text-amber-300" : "text-[#6B4F3A]"}`}
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2.5}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												<span
													className={
														plan.highlight
															? "text-white/90"
															: "text-[#6B5D4F]"
													}
												>
													{f}
												</span>
											</li>
										))}
									</ul>
									<button
										onClick={() => scrollTo("yhteystiedot")}
										className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition ${
											plan.highlight
												? "bg-white text-[#6B4F3A] hover:bg-white/90"
												: "bg-[#6B4F3A] text-white hover:bg-[#574030]"
										}`}
									>
										{t.hero.cta}
									</button>
								</div>
							</FadeSection>
						))}
					</div>
				</div>
			</section>

			{/* ─── CONTACT ─── */}
			<section id="yhteystiedot" className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<FadeSection className="text-center">
						<span className="mb-3 inline-block rounded-full bg-[#6B4F3A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B4F3A]">
							{t.contact.badge}
						</span>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							{t.contact.title}
						</h2>
					</FadeSection>

					<div className="mt-16 grid gap-12 lg:grid-cols-2">
						{/* Info side */}
						<FadeSection delay="100ms">
							<div className="rounded-2xl border border-[#E8E0D4] bg-white p-8">
								<div className="overflow-hidden rounded-xl">
									<Image
										src="/massage-oils.png"
										alt="Spa products"
										width={640}
										height={360}
										className="h-auto w-full object-cover"
									/>
								</div>
								<div className="mt-8 space-y-5">
									{/* Address */}
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3EDE4] text-[#6B4F3A]">
											<svg
												className="h-5 w-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<p className="pt-2 text-sm text-[#6B5D4F]">
											{t.contact.address}
										</p>
									</div>
									{/* Phone */}
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3EDE4] text-[#6B4F3A]">
											<svg
												className="h-5 w-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
										<p className="pt-2 text-sm text-[#6B5D4F]">
											{t.contact.phone}
										</p>
									</div>
									{/* Email */}
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3EDE4] text-[#6B4F3A]">
											<svg
												className="h-5 w-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<p className="pt-2 text-sm text-[#6B5D4F]">
											{t.contact.email}
										</p>
									</div>
									{/* Hours */}
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3EDE4] text-[#6B4F3A]">
											<svg
												className="h-5 w-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										<div className="space-y-1 pt-2">
											{t.contact.hours.map((h) => (
												<p key={h} className="text-sm text-[#6B5D4F]">
													{h}
												</p>
											))}
										</div>
									</div>
								</div>
							</div>
						</FadeSection>

						{/* Form side */}
						<FadeSection delay="200ms">
							<form
								onSubmit={(e) => e.preventDefault()}
								className="flex flex-col gap-5 rounded-2xl border border-[#E8E0D4] bg-white p-8"
							>
								<div>
									<label className="mb-1.5 block text-sm font-medium text-[#2D2A26]">
										{t.contact.formName}
									</label>
									<input
										type="text"
										className="w-full rounded-xl border border-[#E8E0D4] bg-[#FAF7F2] px-4 py-3 text-sm text-[#2D2A26] outline-none transition focus:border-[#6B4F3A] focus:ring-2 focus:ring-[#6B4F3A]/20"
									/>
								</div>
								<div>
									<label className="mb-1.5 block text-sm font-medium text-[#2D2A26]">
										{t.contact.formEmail}
									</label>
									<input
										type="email"
										className="w-full rounded-xl border border-[#E8E0D4] bg-[#FAF7F2] px-4 py-3 text-sm text-[#2D2A26] outline-none transition focus:border-[#6B4F3A] focus:ring-2 focus:ring-[#6B4F3A]/20"
									/>
								</div>
								<div>
									<label className="mb-1.5 block text-sm font-medium text-[#2D2A26]">
										{t.contact.formMessage}
									</label>
									<textarea
										rows={5}
										className="w-full resize-none rounded-xl border border-[#E8E0D4] bg-[#FAF7F2] px-4 py-3 text-sm text-[#2D2A26] outline-none transition focus:border-[#6B4F3A] focus:ring-2 focus:ring-[#6B4F3A]/20"
									/>
								</div>
								<button
									type="submit"
									className="mt-2 w-full rounded-full bg-[#6B4F3A] py-3.5 text-sm font-semibold text-white shadow transition hover:bg-[#574030]"
								>
									{t.contact.formSubmit}
								</button>
							</form>
						</FadeSection>
					</div>
				</div>
			</section>

			{/* ─── FOOTER ─── */}
			<footer className="border-t border-[#E8E0D4] bg-[#F3EDE4]">
				<div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-sm text-[#9A8D7F] sm:flex-row sm:justify-between">
					<p>{t.footer.copy}</p>
					<div className="flex gap-6">
						{t.footer.links.map((l) => (
							<button
								key={l}
								className="transition hover:text-[#6B4F3A]"
							>
								{l}
							</button>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
