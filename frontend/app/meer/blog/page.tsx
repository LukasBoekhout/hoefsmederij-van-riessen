import Image from "next/image"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { AnimatedHorse } from "@/components/animated-horse"
import { HorseshoeDivider } from "@/components/horseshoe-divider"
import { PageHeader } from "@/components/page-header"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "De impact van voeding op hoefgezondheid",
      excerpt: "Hoe de juiste voeding kan bijdragen aan sterke en gezonde hoeven bij uw paard.",
      date: "15 maart 2023",
      image: "/placeholder.svg?height=400&width=600&text=Voeding",
      category: "Voeding",
    },
    {
      id: 2,
      title: "Zomerhoefverzorging: tips voor droge periodes",
      excerpt: "Praktische tips om hoeven gezond te houden tijdens warme en droge zomermaanden.",
      date: "2 juni 2023",
      image: "/placeholder.svg?height=400&width=600&text=Zomer",
      category: "Seizoenstips",
    },
    {
      id: 3,
      title: "Innovaties in hoefbeslag: wat is er nieuw?",
      excerpt: "Een overzicht van de nieuwste ontwikkelingen en materialen in de wereld van hoefbeslag.",
      date: "18 september 2023",
      image: "/placeholder.svg?height=400&width=600&text=Innovaties",
      category: "Technologie",
    },
    {
      id: 4,
      title: "Hoefproblemen herkennen: vroege signalen",
      excerpt: "Leer de vroege waarschuwingssignalen van veelvoorkomende hoefproblemen herkennen.",
      date: "7 november 2023",
      image: "/placeholder.svg?height=400&width=600&text=Problemen",
      category: "Gezondheid",
    },
    {
      id: 5,
      title: "Winterzorg voor paardenhoeven",
      excerpt: "Speciale aandachtspunten voor hoefverzorging tijdens de koude wintermaanden.",
      date: "12 januari 2024",
      image: "/placeholder.svg?height=400&width=600&text=Winter",
      category: "Seizoenstips",
    },
    {
      id: 6,
      title: "Het belang van regelmatige hoefverzorging",
      excerpt: "Waarom consistente verzorging essentieel is voor de gezondheid van uw paard.",
      date: "28 februari 2024",
      image: "/placeholder.svg?height=400&width=600&text=Verzorging",
      category: "Basiskennis",
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-24">
      <PageTransition>
        <PageHeader title="Blog" subtitle="Artikelen en inzichten over hoefverzorging en paardenwelzijn" />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Featured Post */}
              <div className="mb-12">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <div className="relative h-96 md:h-[28rem]">
                    <Image
                      src="/placeholder.svg?height=800&width=1200&text=Featured Post"
                      alt="Featured blog post"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <span className="inline-block px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full mb-4">
                          Uitgelicht
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                          Moderne technieken in hoefverzorging: een complete gids
                        </h2>
                        <p className="text-slate-200 mb-4 max-w-2xl">
                          Een diepgaande verkenning van de nieuwste methoden en technieken in hoefverzorging, inclusief
                          de voordelen van verschillende benaderingen voor verschillende paardenrassen.
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">Johannes van Riessen</p>
                            <p className="text-slate-300 text-sm">5 maart 2024 • 12 min leestijd</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    style={{
                      transformOrigin: post.id % 2 === 0 ? "bottom left" : "bottom right",
                    }}
                  >
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-0 right-0 m-3">
                        <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{post.title}</h3>
                      <p className="text-slate-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-sm">{post.date}</span>
                        <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                          Lees meer
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <HorseshoeDivider />

              {/* Newsletter Signup */}
              <div className="mt-12 bg-amber-100 rounded-xl p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 -mt-16 -mr-16">
                  <svg
                    className="w-full h-full text-amber-400/20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path d="M21 12C21 9.5 19 4 12 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <path d="M12 4C5 4 3 9.5 3 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Blijf op de hoogte!</h2>
                  <p className="text-slate-700 mb-6">
                    Schrijf je in voor onze nieuwsbrief en ontvang regelmatig tips, nieuws en aanbiedingen over
                    hoefverzorging.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Uw e-mailadres"
                      className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      Inschrijven
                    </button>
                  </div>
                  <p className="text-slate-600 text-sm mt-3">
                    We respecteren uw privacy. U kunt zich op elk moment uitschrijven.
                  </p>
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

