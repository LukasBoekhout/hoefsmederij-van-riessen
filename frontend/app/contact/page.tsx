import { PageTransition } from "@/components/page-transition"
import { AnimatedHorse } from "@/components/animated-horse"
import { ContactForm } from "@/components/contact-form"
import { HorseshoeDivider } from "@/components/horseshoe-divider"
import { PageHeader } from "@/components/page-header"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <PageTransition>
        <PageHeader
          title="Neem Contact Op"
          subtitle="Heeft u vragen of wilt u een afspraak maken? Vul het onderstaande formulier in"
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <HorseshoeDivider />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  Contactgegevens
                </h2>

                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-slate-800">Adres</h3>
                      <p>Bloemendaal, Nederland</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-slate-800">Telefoon</h3>
                      <p>+31 (0)6 12345678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-slate-800">E-mail</h3>
                      <p>info@hoefsmederij-vanriessen.nl</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-slate-800">Werkdagen</h3>
                      <p>Maandag t/m vrijdag: 8:00 - 18:00</p>
                      <p>Zaterdag: 9:00 - 15:00</p>
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

