import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { AnimatedHorse } from "@/components/animated-horse"
import { HorseshoeDivider } from "@/components/horseshoe-divider"
import { PageHeader } from "@/components/page-header"

export default function HoefverzorgingTips() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <PageTransition>
        <PageHeader
          title="Hoefverzorging Tips"
          subtitle="Praktische tips voor de dagelijkse verzorging van paardenhoeven"
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Hoefverzorging"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold">Dagelijkse Verzorging</h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-amber-600 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Dagelijkse Hoefverzorging
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Regelmatige verzorging van de hoeven is essentieel voor de gezondheid van uw paard. Hier zijn enkele
                    tips voor dagelijkse verzorging.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Reinig de hoeven dagelijks met een hoevenkrabber</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Controleer op steentjes, glas of andere vreemde voorwerpen</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Let op tekenen van infectie of beschadiging</span>
                    </li>
                  </ul>
                </div>
              </div>

              <HorseshoeDivider />

              <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500 mb-12">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Seizoensgebonden Verzorging</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Zomer</h4>
                    <ul className="space-y-2">
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
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                        <span>Voorkom uitdroging door regelmatig te bevochtigen</span>
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
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                        <span>Bescherm tegen harde, droge ondergrond</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Winter</h4>
                    <ul className="space-y-2">
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
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          ></path>
                        </svg>
                        <span>Voorkom ophoping van sneeuw en ijs</span>
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
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          ></path>
                        </svg>
                        <span>Bescherm tegen pekel en strooizout</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-105 hover:rotate-1">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-amber-600 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Voeding & Hoefgezondheid
                    </h3>
                    <p className="text-slate-600">
                      De juiste voeding is essentieel voor sterke en gezonde hoeven. Zorg voor voldoende biotine en
                      mineralen.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-105 hover:-rotate-1">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-amber-600 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Beweging & Ondergrond
                    </h3>
                    <p className="text-slate-600">
                      Regelmatige beweging op verschillende ondergronden stimuleert de bloedsomloop en bevordert gezonde
                      hoeven.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-105 hover:rotate-1">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-amber-600 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Wanneer de Hoefsmid Bellen
                    </h3>
                    <p className="text-slate-600">
                      Leer de signalen herkennen wanneer professionele hulp nodig is voor de hoeven van uw paard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
      <AnimatedHorse />
    </main>
  )
}

