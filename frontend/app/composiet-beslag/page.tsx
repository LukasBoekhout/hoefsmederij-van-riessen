import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { AnimatedHorse } from "@/components/animated-horse"
import { HorseshoeDivider } from "@/components/horseshoe-divider"
import { PageHeader } from "@/components/page-header"

export default function ComposietBeslag() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <PageTransition>
        <PageHeader
          title="Composiet Beslag - Duplo"
          subtitle="Een moderne oplossing voor paarden die speciale zorg nodig hebben"
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-slate max-w-none mb-8">
                <p>
                  Composiet beslag is een moderne oplossing voor paarden die speciale zorg nodig hebben. Het
                  Duplo-systeem biedt een flexibel alternatief voor traditioneel hoefbeslag.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
                <h3 className="font-bold text-amber-800">Voordelen van composiet beslag:</h3>
                <ul className="mt-2 space-y-1">
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
                    <span>Schokabsorberend</span>
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
                    <span>Lichtgewicht</span>
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
                    <span>Duurzaam</span>
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
                    <span>Ideaal voor paarden met gevoelige hoeven</span>
                  </li>
                </ul>
              </div>
            </div>

            <HorseshoeDivider />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Composiet beslag voorbeeld"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Het Duplo-systeem</h2>
                <p className="text-slate-600 mb-4">
                  Het Duplo-systeem is een innovatieve methode voor hoefbeslag die comfort en bescherming biedt voor uw
                  paard.
                </p>
                <p className="text-slate-600">
                  Als gediplomeerd hoefsmid kan ik u adviseren over de beste oplossing voor uw paard, gebaseerd op zijn
                  specifieke behoeften en omstandigheden.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Wanneer is composiet beslag geschikt?</h2>
              <div className="prose prose-slate max-w-none">
                <p>Composiet beslag is bijzonder geschikt voor paarden met:</p>
                <ul>
                  <li>Hoefproblemen zoals scheuren of brokkelige hoeven</li>
                  <li>Gevoeligheid voor schokken en trillingen</li>
                  <li>Behoefte aan extra ondersteuning</li>
                  <li>Revalidatie na blessures</li>
                </ul>
                <p>Neem contact op voor een persoonlijk advies over de mogelijkheden voor uw paard.</p>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
      <AnimatedHorse />
    </main>
  )
}

