import Image from "next/image";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { HorseshoeDivider } from "@/components/horseshoe-divider";

export default function Meer() {
    return (
        <main className="min-h-screen bg-white pt-24">
            <PageTransition>
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                Meer Informatie
                            </h1>

                            <div className="prose prose-slate max-w-none mb-8">
                                <p>
                                    Op deze pagina vindt u aanvullende
                                    informatie over hoefverzorging, veelgestelde
                                    vragen en nuttige bronnen.
                                </p>
                            </div>
                        </div>

                        <HorseshoeDivider />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Hoefverzorging tips"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                                        Hoefverzorging Tips
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        Praktische tips voor de dagelijkse
                                        verzorging van de hoeven van uw paard.
                                    </p>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center text-amber-600 hover:text-amber-700"
                                    >
                                        Lees meer
                                        <svg
                                            className="w-4 h-4 ml-1"
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
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Veelgestelde vragen"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                                        Veelgestelde Vragen
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        Antwoorden op de meest gestelde vragen
                                        over hoefbeslag en hoefverzorging.
                                    </p>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center text-amber-600 hover:text-amber-700"
                                    >
                                        Lees meer
                                        <svg
                                            className="w-4 h-4 ml-1"
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
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transition-transform duration-300 hover:scale-105">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Nuttige links"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                                        Nuttige Links
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        Handige bronnen en links naar relevante
                                        websites over paardenverzorging.
                                    </p>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center text-amber-600 hover:text-amber-700"
                                    >
                                        Lees meer
                                        <svg
                                            className="w-4 h-4 ml-1"
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
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mt-16">
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                    Wist u dat?
                                </h2>
                                <div className="prose prose-slate max-w-none">
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-amber-600 mr-2 mt-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>
                                                Een paardenhoef groeit gemiddeld
                                                6-10 mm per maand.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-amber-600 mr-2 mt-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>
                                                De hoef bestaat uit hetzelfde
                                                materiaal als onze nagels:
                                                keratine.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-amber-600 mr-2 mt-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>
                                                Een gezonde hoef bevat ongeveer
                                                25% vocht.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-amber-600 mr-2 mt-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>
                                                Het beroep van hoefsmid bestaat
                                                al meer dan 2000 jaar.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageTransition>
        </main>
    );
}
