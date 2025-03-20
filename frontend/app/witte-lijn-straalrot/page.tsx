import Image from "next/image";
import { PageTransition } from "@/components/page-transition";
import { AnimatedHorse } from "@/components/animated-horse";
import { HorseshoeDivider } from "@/components/horseshoe-divider";
import { PageHeader } from "@/components/page-header";

export default function WitteLijnStraalrot() {
    return (
        <main className="min-h-screen bg-white pt-24">
            <PageTransition>
                <PageHeader
                    title="Witte Lijn & Straalrot Behandeling"
                    subtitle="Specialistische behandelingen voor veelvoorkomende hoefaandoeningen"
                />

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="prose prose-slate max-w-none mb-8">
                                <p>
                                    Problemen met de witte lijn en straalrot
                                    zijn veelvoorkomende hoefaandoeningen bij
                                    paarden. Als ervaren hoefsmid bied ik
                                    specialistische behandelingen om deze
                                    problemen effectief aan te pakken.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto my-12">
                            <div className="bg-slate-50 p-6 rounded-lg shadow-md border-t-4 border-amber-500">
                                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <svg
                                        className="w-6 h-6 text-amber-600 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                    Witte Lijn Problematiek
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    De witte lijn is de verbinding tussen de
                                    hoefwand en het hoefbeen. Problemen hiermee
                                    kunnen leiden tot instabiliteit en pijn.
                                </p>
                                <h3 className="font-semibold text-slate-800 mt-4 mb-2">
                                    Symptomen:
                                </h3>
                                <ul className="space-y-1 text-slate-600">
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                        <span>
                                            Scheiding tussen hoefwand en zool
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                        <span>Brokkelige hoefwand</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                        <span>Gevoeligheid en kreupelheid</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg shadow-md border-t-4 border-amber-500">
                                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <svg
                                        className="w-6 h-6 text-amber-600 mr-2"
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
                                    Straalrot
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    Straalrot is een bacteriële infectie die de
                                    straal van de hoef aantast, vaak veroorzaakt
                                    door vochtige en onhygiënische
                                    omstandigheden.
                                </p>
                                <h3 className="font-semibold text-slate-800 mt-4 mb-2">
                                    Symptomen:
                                </h3>
                                <ul className="space-y-1 text-slate-600">
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                        <span>
                                            Zwarte, zachte plekken op de straal
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                        <span>Onaangename geur</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                        <span>
                                            Gevoeligheid bij druk op de straal
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <HorseshoeDivider />

                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                Mijn Behandelaanpak
                            </h2>

                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-8">
                                <Image
                                    src="/placeholder.svg?height=400&width=800"
                                    alt="Hoefbehandeling"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="prose prose-slate max-w-none">
                                <p>
                                    Als gediplomeerd hoefsmid met meer dan 30
                                    jaar ervaring bied ik een grondige aanpak
                                    voor deze problemen:
                                </p>

                                <ol className="mt-4 space-y-4">
                                    <li className="flex">
                                        <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                            1
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-slate-800">
                                                Diagnose
                                            </h3>
                                            <p className="text-slate-600">
                                                Grondige inspectie van de hoef
                                                om de exacte aard en ernst van
                                                het probleem vast te stellen.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex">
                                        <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                            2
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-slate-800">
                                                Behandelplan
                                            </h3>
                                            <p className="text-slate-600">
                                                Ontwikkeling van een op maat
                                                gemaakt behandelplan, afgestemd
                                                op de specifieke behoeften van
                                                uw paard.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex">
                                        <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                            3
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-slate-800">
                                                Behandeling
                                            </h3>
                                            <p className="text-slate-600">
                                                Professionele behandeling met
                                                specialistische technieken en
                                                producten.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex">
                                        <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                            4
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-slate-800">
                                                Nazorg en preventie
                                            </h3>
                                            <p className="text-slate-600">
                                                Advies over hoefverzorging en
                                                preventieve maatregelen om
                                                toekomstige problemen te
                                                voorkomen.
                                            </p>
                                        </div>
                                    </li>
                                </ol>

                                <p className="mt-6">
                                    Neem contact op voor meer informatie of om
                                    een afspraak te maken voor een beoordeling
                                    van de hoeven van uw paard.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </PageTransition>
            <AnimatedHorse />
        </main>
    );
}
