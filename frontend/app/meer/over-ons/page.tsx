import Image from "next/image";
import { PageTransition } from "@/components/page-transition";
import { HorseshoeDivider } from "@/components/horseshoe-divider";
import { PageHeader } from "@/components/page-header";

export default function OverOns() {
    return (
        <main className="min-h-screen bg-white pt-24">
            <PageTransition>
                <PageHeader
                    title="Over Ons"
                    subtitle="Leer meer over Hoefsmederij van Riessen en onze passie voor paarden"
                />

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                                <div className="relative">
                                    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl transform rotate-2">
                                        <Image
                                            src="/placeholder.svg?height=500&width=400&text=Johannes van Riessen"
                                            alt="Johannes van Riessen"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-lg shadow-lg transform -rotate-3">
                                        <p className="font-bold">Sinds 1995</p>
                                        <p className="text-sm">
                                            Rijksgediplomeerd Hoefsmid
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                        Onze Geschiedenis
                                    </h2>
                                    <div className="prose prose-slate max-w-none">
                                        <p>
                                            Geboren in Bloemendaal heb ik van
                                            mijn vader en zijn twee broers,
                                            volgens traditie, vroeg het vak van
                                            Hoefsmid meegekregen. Uitzonderlijk
                                            voor die tijd, mijn vader had een
                                            recreatie paard.
                                        </p>
                                        <p>
                                            Door de zorg daarvoor, rijes op de
                                            manege en later ook op zijn paard te
                                            mogen rijden kreeg ik de liefde voor
                                            het paard en de bijbehorende
                                            verantwoordelijkheid mee die voor
                                            ieder paard belangrijk is.
                                        </p>
                                        <p>
                                            In 1995 behaalde ik mijn
                                            Rijksdiploma als Hoefsmid en werd
                                            lid van de Nederlandse Vereniging
                                            van Hoefsmeden. Sindsdien heb ik
                                            mijn vaardigheden voortdurend
                                            ontwikkeld en bijgeschoold om de
                                            beste zorg te kunnen bieden.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <HorseshoeDivider />

                            <div className="mb-16">
                                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                                    Onze Filosofie
                                </h2>
                                <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500 shadow-md">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                                            <div className="relative w-full aspect-square">
                                                <svg
                                                    className="w-full h-full text-amber-500"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M18 4L21 7M21 7L18 10M21 7H17C15.8954 7 15 7.89543 15 9V10M3 17L6 20M6 20L9 17M6 20H10C11.1046 20 12 19.1046 12 18V17"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M14.5 16.5L9.5 11.5M9.5 11.5L8 13M9.5 11.5L11 10"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="md:w-2/3">
                                            <h3 className="text-xl font-bold text-slate-800 mb-4">
                                                Vakmanschap & Zorg
                                            </h3>
                                            <div className="prose prose-slate max-w-none">
                                                <p>
                                                    Bij Hoefsmederij van Riessen
                                                    geloven we dat elk paard
                                                    uniek is en individuele
                                                    aandacht verdient. Onze
                                                    filosofie is gebaseerd op
                                                    drie kernprincipes:
                                                </p>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Vakmanschap:
                                                        </strong>{" "}
                                                        Precisie en kwaliteit in
                                                        elk aspect van ons werk
                                                    </li>
                                                    <li>
                                                        <strong>Kennis:</strong>{" "}
                                                        Voortdurende bijscholing
                                                        en toepassing van de
                                                        nieuwste inzichten
                                                    </li>
                                                    <li>
                                                        <strong>Zorg:</strong>{" "}
                                                        Het welzijn van het
                                                        paard staat altijd
                                                        voorop
                                                    </li>
                                                </ul>
                                                <p>
                                                    We nemen de tijd om naar uw
                                                    wensen te luisteren en de
                                                    specifieke behoeften van uw
                                                    paard te begrijpen. Zo
                                                    kunnen we de best mogelijke
                                                    zorg bieden voor gezonde en
                                                    gelukkige paarden.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                                    Certificeringen & Lidmaatschappen
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex flex-col items-center transform transition-transform hover:scale-105 hover:rotate-1">
                                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                            <svg
                                                className="w-8 h-8 text-amber-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                            Rijksdiploma Hoefsmid
                                        </h3>
                                        <p className="text-slate-600 text-center">
                                            Officieel erkend vakdiploma
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex flex-col items-center transform transition-transform hover:scale-105 hover:-rotate-1">
                                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                            <svg
                                                className="w-8 h-8 text-amber-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                            Nederlandse Vereniging van
                                            Hoefsmeden
                                        </h3>
                                        <p className="text-slate-600 text-center">
                                            Actief lid sinds 1995
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex flex-col items-center transform transition-transform hover:scale-105 hover:rotate-1">
                                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                            <svg
                                                className="w-8 h-8 text-amber-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                            Bijscholing & Certificaten
                                        </h3>
                                        <p className="text-slate-600 text-center">
                                            Regelmatige bijscholing en
                                            specialisatie
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageTransition>
        </main>
    );
}
