"use client";

import { useLocale } from "@/lib/LocaleContext";
import Image from "next/image";
import { siteData, getEmployees } from "@/lib/shared-data";
import { useVariant } from "@/lib/VariantContext";
import { useEffect, useRef, useState } from "react";
import LogoIcon from "@/components/LogoIcon";
import { Playfair_Display } from "next/font/google";

const logoFont = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

const pageContent = {
	fi: {
		nav: ["Palvelut", "Asiantuntijat", "Hinnasto", "Yhteystiedot"],
		heroTitle: "Ammattitaitoista hoitoa kehollesi ja mielellesi",
		heroSubtitle:
			"Olemme Tampereella sijaitseva hyvinvoinnin asiantuntijakeskus. Yhdistämme vankan terveydenhuollon osaamisen ja yksilöllisen kohtaamisen asiakkaan parhaaksi.",
		cta: "Varaa aika vastaanotolle",
		payment: "Maksuvaihtoehdot",
		servicesTitle: "Palvelumme",
		servicesSubtitle: "Tarjoamme näyttöön perustuvaa hoitoa",
		services: [
			{
				title: "Klassinen hieronta",
				desc: "Perinteinen menetelmä lihaskireyksien poistoon ja verenkierron vilkastuttamiseen. Lievittää kiputiloja ja rentouttaa mieltä.",
				image: "/service1.png",
				price: "Alk. 47€",
			},
			{
				title: "Urheiluhieronta",
				desc: "Tehokkaampi hoitomuoto aktiiviliikkujille ja urheilijoille. Keskittyy lihashuoltoon, palautumiseen ja vammojen ennaltaehkäisyyn.",
				image: "/service2.png",
				price: "Alk. 55€",
			},
			{
				title: "Naprapatia",
				desc: "Tuki- ja liikuntaelimistön häiriöiden asiantuntijahoito, johon sisältyy nivelten manipulaatiota ja mobilisaatiota sekä terapeuttista harjoittelua.",
				image: "/service3.png",
				price: "Alk. 65€",
			},
		],
		teamTitle: "Asiantuntijamme",
		teamDescription:
			"Henkilökuntamme koostuu Valviran hyväksymistä terveydenhuollon ammattilaisista. Tavoitteenamme on löytää juuri sinulle sopivin hoitomuoto.",
		ctaSectionTitle: "Liity jäseneksi ja säästä 25%",
		ctaSectionDesc: "Säännöllinen lihashuolto kannattaa. Jäsenenä saat kaikista normaalihintaisista palveluista -25% alennuksen, ilmaisen peruutusturvan ja henkilökohtaisen hoitosuunnitelman.",
		ctaPaymentOptionsTitle: "Meillä käy myös:",
		ctaPaymentOptions: ["ePassi", "Smartum", "Edenred", "Terveydenhuoltovakuutukset"],
		contactTitle: "Yhteystiedot",
		openHoursTitle: "Aukioloajat",
		openHours: [
			"Arkisin: 08:00 - 20:00",
			"Lauantaisin: 10:00 - 15:00",
			"Sunnuntaisin: Suljettu",
		],
		freeTimesTitle: "Vapaat ajat",
		freeTimes: ["Tänään|14:00, 16:30", "Huomenna|09:00, 10:15, 11:30, 14:00, 16:15", "Ylihuomenna|08:30, 10:00, 13:00, 15:00"],
		footerCopy: "Kaikki oikeudet pidätetään.",
	},
	en: {
		nav: ["Services", "Experts", "Pricing", "Contact"],
		heroTitle: "Professional care for your body and mind",
		heroSubtitle:
			"We are a leading wellness center in Tampere. We combine solid healthcare expertise with personalized service for the benefit of our clients.",
		cta: "Book an Appointment",
		payment: "Payment Options",
		servicesTitle: "Our Services",
		servicesSubtitle: "We provide evidence-based care",
		services: [
			{
				title: "Classic Massage",
				desc: "A traditional method for eliminating muscle tension and stimulating blood circulation. Relieves pain and relaxes the mind.",
				image: "/service1.png",
				price: "From 47€",
			},
			{
				title: "Sports Massage",
				desc: "A powerful treatment for active people and athletes. Focuses on muscle maintenance, recovery, and injury prevention.",
				image: "/service2.png",
				price: "From 55€",
			},
			{
				title: "Naprapathy",
				desc: "Expert treatment for musculoskeletal disorders that includes joint manipulation, mobilization, and therapeutic exercises.",
				image: "/service3.png",
				price: "From 65€",
			},
		],
		teamTitle: "Our Experts",
		teamDescription:
			"Our staff consists of certified healthcare professionals. Our goal is to find the most suitable treatment method specifically for you.",
		ctaSectionTitle: "Become a member & save 25%",
		ctaSectionDesc: "Regular muscle care pays off. As a member you get a 25% discount on all normal priced services, along with free cancellation protection and a personal treatment plan.",
		ctaPaymentOptionsTitle: "We also accept:",
		ctaPaymentOptions: ["ePassi", "Smartum", "Edenred", "Health Insurance"],
		contactTitle: "Contact Information",
		openHoursTitle: "Opening Hours",
		openHours: [
			"Weekdays: 08:00 - 20:00",
			"Saturdays: 10:00 - 15:00",
			"Sundays: Closed",
		],
		freeTimesTitle: "Available times",
		freeTimes: ["Today|14:00, 16:30", "Tomorrow|09:00, 10:15, 11:30, 14:00, 16:15", "Day after tomorrow|08:30, 10:00, 13:00, 15:00"],
		footerCopy: "All rights reserved.",
	},
};

function useFadeIn() {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return { ref, visible };
}

function FadeIn({
	children,
	delay = 0,
	direction = "none",
}: {
	children: React.ReactNode;
	delay?: number;
	direction?: "up" | "left" | "right" | "none";
}) {
	const { ref, visible } = useFadeIn();

	let transform = "translateY(30px)";
	if (direction === "left") transform = "translateX(-30px)";
	if (direction === "right") transform = "translateX(30px)";
	if (direction === "none") transform = "translate(0)";

	return (
		<div
			ref={ref}
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? "translate(0)" : transform,
				transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
			}}
		>
			{children}
		</div>
	);
}

const ExpertsCarousel = ({
	experts,
	title,
	description,
}: {
	experts: readonly { id: string; name: string; role: string; image: string; bio: string }[];
	title: string;
	description: string;
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const length = experts.length;

	const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % length);
	const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

	return (
		<div className="w-full relative pt-4 overflow-hidden">
			<FadeIn direction="up">
				<div className="flex flex-col mb-16 gap-6 px-6 max-w-6xl mx-auto">
					<div className="max-w-2xl">
						<h2 className="text-3xl sm:text-4xl font-bold text-[#2B403B] tracking-tight">
							{title}
						</h2>
						<p className="mt-5 text-lg text-[#6D655E] leading-relaxed">
							{description}
						</p>
					</div>
				</div>
			</FadeIn>

			<FadeIn direction="up" delay={150}>
				<div className="relative h-[620px] w-full grid place-items-center">
					{/* Left Arrow */}
					<button
						onClick={prevSlide}
						className="absolute left-4 lg:left-8 z-40 w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border-2 border-[#2B403B]/20 text-[#2B403B] flex items-center justify-center hover:bg-[#2B403B] hover:border-[#2B403B] hover:text-white transition-all cursor-pointer shadow-lg"
					>
						<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					{/* Right Arrow */}
					<button
						onClick={nextSlide}
						className="absolute right-4 lg:right-8 z-40 w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border-2 border-[#2B403B]/20 text-[#2B403B] flex items-center justify-center hover:bg-[#2B403B] hover:border-[#2B403B] hover:text-white transition-all cursor-pointer shadow-lg"
					>
						<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>
					{experts.map((employee, index) => {
						const dx = (index - currentIndex + length) % length;
						const offset = dx > 2 ? dx - length : dx;

						let xOffset = 0;
						let scale = 1;
						let opacity = 1;
						let zIndex = 10;

						if (offset === 0) {
							xOffset = 0;
							scale = 1;
							opacity = 1;
							zIndex = 30;
						} else if (offset === -1) {
							xOffset = -105;
							scale = 0.95;
							opacity = 1;
							zIndex = 20;
						} else if (offset === 1) {
							xOffset = 105;
							scale = 0.95;
							opacity = 1;
							zIndex = 20;
						} else if (offset === -2) {
							xOffset = -210;
							scale = 0.85;
							opacity = 0.3;
							zIndex = 10;
						} else if (offset === 2) {
							xOffset = 210;
							scale = 0.85;
							opacity = 0.3;
							zIndex = 10;
						}

						return (
							<div
								key={employee.id}
								className="col-start-1 row-start-1 w-[75%] sm:w-[50%] md:w-[35%] lg:w-[30%] max-w-[340px] absolute transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
								style={{
									transform: `translateX(${xOffset}%) scale(${scale})`,
									opacity: opacity,
									zIndex: zIndex,
									pointerEvents: opacity === 1 ? "auto" : "none",
								}}
							>
								<div className="bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#F0ECE4] h-full flex flex-col">
									<div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl bg-[#EBE6DF]">
										<Image
											src={employee.image}
											alt={employee.name}
											fill
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
											style={{ objectFit: "cover" }}
											priority={opacity === 1}
										/>
									</div>
									<div className="px-2 pb-2 text-center flex-grow flex flex-col">
										<h3 className="text-xl font-bold text-[#3A3532]">
											{employee.name}
										</h3>
										<p className="text-sm font-semibold text-[#827D78] mt-1.5 mb-4 px-2">
											{employee.role}
										</p>
										<p className="text-sm text-[#6D655E] leading-relaxed line-clamp-3">
											{employee.bio}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</FadeIn>
		</div>
	);
};

// Relaxing/Spa-themed SVG Icons
const ChevronDownIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
		<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
	</svg>
);

const MenuIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
);

const CloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18 18 6M6 6l12 12"
		/>
	</svg>
);

const LeafIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.536a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
		/>
	</svg>
);

const PhoneIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-5 h-5 text-[#E6D5C3]"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
		/>
	</svg>
);

const MapPinIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-5 h-5 text-[#E6D5C3]"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
		/>
	</svg>
);

const EnvelopeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-5 h-5 text-[#E6D5C3]"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
		/>
	</svg>
);

export default function StudyPage2() {
	const { locale } = useLocale();
	const t = pageContent[locale];
	const business = siteData[locale];
	const { studyGroup } = useVariant();
	const employees = getEmployees(locale, studyGroup);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const yOffset = -80;
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
			setIsMenuOpen(false);
		}
	};

	return (
		<div className="min-h-screen bg-[#DDE4DB] font-sans text-[#3A3532]">
			{/* Navigation */}
			<header className="fixed w-full top-0 z-50 bg-[#DDE4DB]/90 backdrop-blur-md border-b border-[#C8D2C6]">
				<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/50 border border-[#EBE6DF] flex items-center justify-center text-[#2B403B]">
							<LogoIcon className="w-8 h-8" />
						</div>
						<div className="flex flex-col ml-1">
							<span className={`text-2xl font-bold tracking-wide text-[#2B403B] leading-none ${logoFont.className}`}>{business.brand}</span>
							<span className="text-[0.7rem] font-semibold tracking-widest text-[#2B403B]/80 uppercase leading-none mt-1">Hyvinvointi</span>
						</div>
					</div>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center gap-8">
						{t.nav.map((item: string, idx: number) => {
							const sectionIds = ["services", "team", "membership", "contact"];
							return (
								<button
									key={item}
									className="flex items-center gap-1.5 text-sm font-semibold text-[#5C554F] hover:text-[#2B403B] transition-colors cursor-pointer"
									onClick={() => scrollToSection(sectionIds[idx])}
								>
									{item}
								</button>
							);
						})}
						<button
							className="bg-[#2B403B] text-[#FDFBF7] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1A2E2A] transition-all shadow-md shadow-[#2B403B]/20 cursor-pointer"
							onClick={() => scrollToSection('contact')}
						>
							{t.cta}
						</button>
					</nav>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden text-[#2B403B]"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>

				{/* Mobile Nav */}
				{isMenuOpen && (
					<div className="md:hidden bg-[#FDFBF7] border-t border-[#EBE6DF] px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
						{t.nav.map((item: string, idx: number) => {
							const sectionIds = ["services", "team", "membership", "contact"];
							return (
								<button
									key={item}
									className="flex items-center justify-between text-base font-medium text-[#5C554F] w-full text-left cursor-pointer"
									onClick={() => scrollToSection(sectionIds[idx])}
								>
									{item}
								</button>
							);
						})}
						<button
							className="bg-[#2B403B] w-full text-[#FDFBF7] px-5 py-3 rounded-full text-sm font-medium mt-2 shadow-md cursor-pointer"
							onClick={() => scrollToSection('contact')}
						>
							{t.cta}
						</button>
					</div>
				)}
			</header>

			<main className="pt-20">
				{/* Hero Section */}
				<section className="relative overflow-hidden bg-[#F5F2EB]">
					<div className="absolute inset-0 bg-gradient-to-br from-[#F5F2EB] to-[#EBE6DF] opacity-50"></div>
					<div className="max-w-6xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
						<FadeIn direction="up">
							<div className="inline-block px-4 py-2 bg-[#E1E5E0] text-[#2B403B] rounded-full text-sm font-semibold tracking-wider mb-6">
								{business.siteName}
							</div>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B403B] leading-[1.15]">
								{t.heroTitle}
							</h1>
							<p className="mt-6 text-lg text-[#5C554F] leading-relaxed max-w-xl">
								{t.heroSubtitle}
							</p>
							<div className="mt-10 flex flex-col sm:flex-row gap-4">
								<button
									className="bg-[#2B403B] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#1A2E2A] shadow-lg shadow-[#2B403B]/30 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#2B403B] cursor-pointer"
									onClick={() => scrollToSection('membership')}
								>
									{t.cta}
								</button>
								<button
									className="bg-transparent text-[#2B403B] px-8 py-4 rounded-full font-medium text-base hover:bg-[#EBE6DF] transition-colors border-2 border-[#2B403B] cursor-pointer"
									onClick={() => scrollToSection('services')}
								>
									{t.nav[0]}
								</button>
							</div>
						</FadeIn>
						<FadeIn direction="up" delay={200}>
							<div className="relative h-[350px] lg:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
								<Image
									src="/massage-hero-new.png"
									alt="Massage therapy session"
									fill
									priority
									sizes="(max-width: 1024px) 100vw, 50vw"
									style={{ objectFit: "cover" }}
									className="hover:scale-105 transition-transform duration-1000 object-center"
								/>
							</div>
						</FadeIn>
					</div>
				</section>

				{/* Services Section */}
				<section id="services" className="py-16 bg-[#DDE4DB]">
					<div className="max-w-6xl mx-auto px-6">
						<FadeIn direction="up">
							<div className="text-center max-w-2xl mx-auto mb-16">
								<h2 className="text-sm font-semibold tracking-widest text-[#827D78] uppercase mb-3">
									{t.servicesSubtitle}
								</h2>
								<p className="text-3xl sm:text-4xl font-bold text-[#2B403B] tracking-tight">
									{t.servicesTitle}
								</p>
							</div>
						</FadeIn>

						<div className="grid md:grid-cols-3 gap-8">
							{t.services.map((service, index) => (
								<FadeIn key={service.title} delay={index * 150} direction="up">
									<div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F0ECE4] h-full hover:shadow-[0_8px_30px_rgb(43,64,59,0.08)] transition-all flex flex-col text-center">
										<div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden bg-[#F5F2EB]">
											<Image
												src={service.image}
												alt={service.title}
												fill
												sizes="(max-width: 768px) 100vw, 33vw"
												style={{ objectFit: "cover" }}
											/>
										</div>
										<h3 className="text-xl font-bold text-[#3A3532] mb-3">
											{service.title}
										</h3>
										<div className="inline-block px-4 py-1.5 bg-[#E1E5E0] text-[#2B403B] font-extrabold rounded-lg mb-4 text-base self-center shadow-sm">
											{service.price}
										</div>
										<p className="text-[#6D655E] leading-relaxed">
											{service.desc}
										</p>
									</div>
								</FadeIn>
							))}
						</div>
					</div>
				</section>



				{/* Team Section */}
				<section id="team" className="py-16 bg-[#F5F2EB]">
                    <ExpertsCarousel 
                        experts={employees} 
                        title={t.teamTitle} 
                        description={t.teamDescription} 
                    />
				</section>



				{/* Membership / Calendar Section */}
				<section id="membership" className="py-16 bg-[#E1E5E0]/40 border-b border-[#EBE6DF]">
					<div className="max-w-6xl mx-auto px-6">
						<FadeIn direction="up">
							<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-stretch">
								{/* Left: Fake Calendar */}
								<div className="bg-[#E6D5C3] p-10 lg:p-12 rounded-[3rem] border border-[#D5C2AD] shadow-2xl flex flex-col h-full">
									<h3 className="text-2xl lg:text-3xl font-bold mb-8 text-[#1A2E2A]">
										{t.freeTimesTitle}
									</h3>
									<ul className="space-y-4 mb-8 flex-grow">
										{t.freeTimes.map((timeStr: string, idx: number) => {
											const [day, times] = timeStr.split("|");

											const targetDate = new Date();
											targetDate.setDate(targetDate.getDate() + idx);
											const dateString = targetDate.toLocaleDateString(locale === 'en' ? 'en-US' : 'fi-FI', { month: 'numeric', day: 'numeric' });

											const displayDay = `${day} (${dateString})`;

											return (
												<li key={idx} className="flex flex-col border-b border-[#D5C2AD]/50 pb-5 last:border-0 last:pb-0">
													<span className="text-[15px] text-[#4A5D4E] font-bold mb-3">{displayDay}</span>
													<div className="flex flex-wrap gap-2.5">
														{times?.split(",").map((t: string) => (
															<span key={t} className="bg-white text-[#2B403B] px-4 py-2 rounded-xl text-sm font-bold shadow-sm cursor-pointer hover:bg-[#1A2E2A] hover:text-white transition-colors border border-transparent hover:border-[#1A2E2A]">{t.trim()}</span>
														))}
													</div>
												</li>
											)
										})}
									</ul>
									<button className="w-full mt-auto bg-[#1A2E2A] text-white px-6 h-16 rounded-full font-bold tracking-wide text-lg hover:bg-[#2B403B] transition-colors shadow-xl flex justify-center items-center" onClick={() => scrollToSection('contact')}>
										{t.cta}
									</button>
								</div>

								{/* Right: Membership CTA */}
								<div className="bg-[#2B403B] rounded-[3rem] p-10 lg:p-12 text-center shadow-2xl relative overflow-hidden flex flex-col h-full">
									<div className="relative z-10 flex flex-col items-center justify-center flex-grow">
										<h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold text-[#FDFBF7] tracking-tight mb-8">
											{t.ctaSectionTitle}
										</h2>
										<p className="text-lg text-[#A2B0A8] leading-relaxed mb-10 max-w-lg mx-auto font-medium">
											{t.ctaSectionDesc}
										</p>
									</div>
									<button className="w-full mt-auto bg-[#E6D5C3] text-[#1A2E2A] px-6 h-16 rounded-full font-bold text-lg hover:bg-white transition-all flex justify-center items-center gap-3 relative z-10 shadow-xl shadow-black/20" onClick={() => scrollToSection('contact')}>
										{t.payment}
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
										</svg>
									</button>
								</div>
							</div>

							<div className="text-center pt-8 border-t border-[#D5C2AD]/40">
								<h3 className="text-xl lg:text-2xl font-extrabold text-[#2B403B] mb-8 tracking-tight">
									{t.ctaPaymentOptionsTitle}
								</h3>
								<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
									{t.ctaPaymentOptions.map((opt: string) => (
										<div key={opt} className="px-6 py-4 bg-[#FDFBF7] text-[#2B403B] font-bold rounded-2xl text-base lg:text-lg shadow-sm border border-[#EBE6DF] hover:scale-105 transition-transform cursor-pointer shadow-[0_4px_15px_rgb(0,0,0,0.04)]">
											{opt}
										</div>
									))}
								</div>
							</div>
						</FadeIn>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-16 bg-[#2B403B] text-[#FDFBF7]">
					<div className="max-w-6xl mx-auto px-6">
						<div className="grid md:grid-cols-2 gap-16">
							<FadeIn direction="left">
								<div className="inline-block px-4 py-1.5 bg-[#4A5D4E] rounded-full text-xs font-semibold tracking-wider mb-6 text-[#E6D5C3]">
									{business.brand}
								</div>
								<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
									{t.contactTitle}
								</h2>
								<div className="space-y-6">
									<div className="flex items-center gap-5">
										<div className="w-10 h-10 bg-[#1A2E2A] rounded-full flex items-center justify-center">
											<MapPinIcon />
										</div>
										<span className="text-lg text-[#E6D5C3] font-medium">{business.address}</span>
									</div>
									<div className="flex items-center gap-5">
										<div className="w-10 h-10 bg-[#1A2E2A] rounded-full flex items-center justify-center">
											<PhoneIcon />
										</div>
										<span className="text-lg text-[#E6D5C3] font-medium">{business.phone}</span>
									</div>
									<div className="flex items-center gap-5">
										<div className="w-10 h-10 bg-[#1A2E2A] rounded-full flex items-center justify-center">
											<EnvelopeIcon />
										</div>
										<span className="text-lg text-[#E6D5C3] font-medium">{business.email}</span>
									</div>
								</div>
							</FadeIn>

							<FadeIn direction="up" delay={150}>
								<div className="bg-[#1A2E2A] p-10 rounded-3xl border border-[#4A5D4E]/30 shadow-2xl h-full flex flex-col">
									<h3 className="text-2xl font-semibold mb-8 text-white">
										{t.openHoursTitle}
									</h3>
									<ul className="space-y-6 flex-grow">
										{t.openHours.map((hour: string, index: number) => {
											const [day, time] = hour.split(":");
											return (
												<li
													key={index}
													className="flex justify-between items-center text-lg border-b border-[#4A5D4E]/40 pb-6 last:border-0 last:pb-0"
												>
													<span className="text-[#A2B0A8] font-medium">
														{day}
													</span>
													<span className="font-semibold text-[#E6D5C3]">
														{time && time + (hour.split(":").length > 2 ? ":" + hour.split(":")[2] : "")}
													</span>
												</li>
											);
										})}
									</ul>
								</div>
							</FadeIn>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-[#1A2E2A] py-10 border-t border-[#4A5D4E]/20 text-center text-[#A2B0A8] text-sm font-medium">
				<p>
					&copy; {new Date().getFullYear()} {business.siteName}. {t.footerCopy}
				</p>
			</footer>
		</div>
	);
}
