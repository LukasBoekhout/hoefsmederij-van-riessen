import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { AnimatedHorse } from "@/components/animated-horse"
import { HorseshoeDivider } from "@/components/horseshoe-divider"
import { PageHeader } from "@/components/page-header"

export default function Galerij() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <PageTransition>
        <PageHeader title="Galerij" subtitle="Een visuele impressie van ons werk en vakmanschap" />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:rotate-1 hover:shadow-xl"
                    style={{
                      transformOrigin: i % 2 === 0 ? "bottom left" : "bottom right",
                    }}
                  >
                    <div className="relative h-64 md:h-72">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Foto ${i}`}
                        alt={`Galerij afbeelding ${i}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-bold text-lg">Hoefbeslag Voorbeeld {i}</h3>
                          <p className="text-sm text-slate-200">Professioneel vakmanschap</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <HorseshoeDivider />

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Video Demonstraties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-100 rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-64 md:h-72 bg-slate-200 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-800">Bekappen Demonstratie</h3>
                      <p className="text-slate-600 text-sm mt-1">Een demonstratie van het bekappen van paardenhoeven</p>
                    </div>
                  </div>

                  <div className="bg-slate-100 rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-64 md:h-72 bg-slate-200 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-800">Hoefijzer Aanpassen</h3>
                      <p className="text-slate-600 text-sm mt-1">
                        Het op maat maken van een hoefijzer voor optimale pasvorm
                      </p>
                    </div>
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

