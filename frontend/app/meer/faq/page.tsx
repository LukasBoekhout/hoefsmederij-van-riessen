import { PageTransition } from "@/components/page-transition"
import { AnimatedHorse } from "@/components/animated-horse"
import { HorseshoeDivider } from "@/components/horseshoe-divider"
import { PageHeader } from "@/components/page-header"

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <PageTransition>
        <PageHeader
          title="Veelgestelde Vragen"
          subtitle="Antwoorden op de meest gestelde vragen over hoefbeslag en hoefverzorging"
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-[1.01] duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Hoe vaak moet een paard beslagen worden?
                    </h3>
                    <div className="pl-8">
                      <p className="text-slate-600">
                        De meeste paarden hebben elke 6-8 weken nieuw beslag nodig. Dit kan variëren afhankelijk van het
                        gebruik van het paard, de groeisnelheid van de hoeven en het seizoen. Sportpaarden of paarden
                        die intensief worden gebruikt, hebben mogelijk vaker nieuw beslag nodig.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-[1.01] duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Wat zijn de voordelen van composiet beslag?
                    </h3>
                    <div className="pl-8">
                      <p className="text-slate-600">
                        Composiet beslag biedt verschillende voordelen ten opzichte van traditioneel ijzeren beslag:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                        <li>Lichter gewicht, wat minder belasting geeft op de benen</li>
                        <li>Betere schokabsorptie</li>
                        <li>Minder kans op uitglijden</li>
                        <li>Ideaal voor paarden met gevoelige hoeven of bepaalde hoefproblemen</li>
                        <li>Geen corrosie zoals bij metalen beslag</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-[1.01] duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Hoe herken ik straalrot bij mijn paard?
                    </h3>
                    <div className="pl-8">
                      <p className="text-slate-600">Straalrot is te herkennen aan de volgende symptomen:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                        <li>Zwarte, zachte plekken op de straal</li>
                        <li>Onaangename geur</li>
                        <li>Brokkelige of afbrokkelende straal</li>
                        <li>Gevoeligheid bij druk op de straal</li>
                        <li>In ernstige gevallen: kreupelheid</li>
                      </ul>
                      <p className="text-slate-600 mt-2">
                        Bij het vermoeden van straalrot is het belangrijk om contact op te nemen met uw hoefsmid of
                        dierenarts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-[1.01] duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Kan mijn paard zonder hoefijzers?
                    </h3>
                    <div className="pl-8">
                      <p className="text-slate-600">
                        Veel paarden kunnen prima zonder hoefijzers (barefoot) leven, maar dit is afhankelijk van
                        verschillende factoren:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                        <li>De kwaliteit en sterkte van de hoeven</li>
                        <li>Het type ondergrond waarop het paard voornamelijk loopt</li>
                        <li>De intensiteit van het gebruik</li>
                        <li>Eventuele bestaande hoefproblemen</li>
                      </ul>
                      <p className="text-slate-600 mt-2">
                        Een overgang naar barefoot moet geleidelijk gebeuren en onder begeleiding van een ervaren
                        hoefsmid. Niet elk paard is geschikt om zonder beslag te gaan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 transform transition-transform hover:scale-[1.01] duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Wat kost hoefbeslag gemiddeld?
                    </h3>
                    <div className="pl-8">
                      <p className="text-slate-600">
                        De kosten voor hoefbeslag variëren afhankelijk van verschillende factoren zoals:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                        <li>Type beslag (standaard ijzer, aluminium, composiet)</li>
                        <li>Speciale aanpassingen of correcties</li>
                        <li>Regio en ervaring van de hoefsmid</li>
                        <li>Aantal hoeven dat beslagen wordt</li>
                      </ul>
                      <p className="text-slate-600 mt-2">
                        Voor een exacte prijsopgave kunt u het beste contact opnemen voor een persoonlijk advies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <HorseshoeDivider />

              <div className="text-center">
                <p className="text-slate-600">
                  Heeft u een vraag die hier niet beantwoord wordt? Neem dan gerust contact met ons op.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 mt-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                  Contact Opnemen
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
      <AnimatedHorse />
    </main>
  )
}

