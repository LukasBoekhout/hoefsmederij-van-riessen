import { PageTransition } from "@/components/page-transition"
import { AnimatedHorse } from "@/components/animated-horse"
import { PageHeader } from "@/components/page-header"

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <PageTransition>
        <PageHeader title="Privacy Policy" subtitle="Hoe wij omgaan met uw persoonlijke gegevens" />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-slate max-w-none">
                <p className="lead">
                  Bij Hoefsmederij van Riessen hechten wij grote waarde aan de bescherming van uw persoonlijke gegevens.
                  Deze Privacy Policy geeft informatie over hoe wij omgaan met uw persoonlijke gegevens.
                </p>

                <h2>Welke gegevens verzamelen wij?</h2>
                <p>Wij verzamelen en verwerken de volgende persoonlijke gegevens:</p>
                <ul>
                  <li>Naam en contactgegevens (e-mail, telefoonnummer, adres)</li>
                  <li>Informatie over uw paard(en) die relevant is voor onze dienstverlening</li>
                  <li>Correspondentie en communicatie met ons</li>
                  <li>Informatie over uw bezoek aan onze website via cookies</li>
                </ul>

                <h2>Waarom verzamelen wij deze gegevens?</h2>
                <p>Wij gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
                <ul>
                  <li>Om onze diensten aan u te kunnen leveren</li>
                  <li>Om contact met u te onderhouden</li>
                  <li>Om u te informeren over onze diensten en eventuele wijzigingen</li>
                  <li>Om onze website te verbeteren</li>
                  <li>Om te voldoen aan wettelijke verplichtingen</li>
                </ul>

                <h2>Hoe lang bewaren wij uw gegevens?</h2>
                <p>
                  Wij bewaren uw persoonlijke gegevens niet langer dan strikt noodzakelijk is voor de doeleinden
                  waarvoor uw gegevens worden verzameld. Indien er geen wettelijke bewaartermijn van toepassing is,
                  hanteren wij een bewaartermijn die redelijk is voor het doel waarvoor de gegevens worden verwerkt.
                </p>

                <h2>Delen van gegevens met derden</h2>
                <p>
                  Wij verkopen uw gegevens niet aan derden en verstrekken deze uitsluitend indien dit nodig is voor de
                  uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
                </p>

                <h2>Cookies</h2>
                <p>
                  Onze website maakt gebruik van cookies om de gebruikerservaring te verbeteren. Een cookie is een klein
                  tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet of
                  smartphone.
                </p>
                <p>
                  U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer
                  opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw
                  browser verwijderen.
                </p>

                <h2>Uw rechten</h2>
                <p>
                  U heeft het recht om uw persoonlijke gegevens in te zien, te corrigeren of te verwijderen. Daarnaast
                  heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te
                  maken tegen de verwerking van uw persoonlijke gegevens door ons.
                </p>

                <h2>Wijzigingen in deze Privacy Policy</h2>
                <p>
                  Wij kunnen deze Privacy Policy van tijd tot tijd wijzigen. Wijzigingen zullen op deze pagina worden
                  gepubliceerd. We raden u aan om deze Privacy Policy regelmatig te raadplegen, zodat u op de hoogte
                  bent van eventuele wijzigingen.
                </p>

                <h2>Contact</h2>
                <p>
                  Als u vragen heeft over deze Privacy Policy of over de verwerking van uw persoonlijke gegevens, neem
                  dan contact met ons op via de contactgegevens op onze website.
                </p>

                <p className="text-sm text-slate-500 mt-8">Laatste update: 1 juni 2023</p>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
      <AnimatedHorse />
    </main>
  )
}

