import { PageTransition } from "@/components/page-transition";
import { AnimatedHorse } from "@/components/animated-horse";
import { PageHeader } from "@/components/page-header";

export default function Terms() {
    return (
        <main className="min-h-screen bg-white pt-24">
            <PageTransition>
                <PageHeader
                    title="Algemene Voorwaarden"
                    subtitle="Voorwaarden voor onze dienstverlening"
                />

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="prose prose-slate max-w-none">
                                <p className="lead">
                                    Deze algemene voorwaarden zijn van
                                    toepassing op alle overeenkomsten tussen
                                    Hoefsmederij van Riessen en haar klanten.
                                </p>

                                <h2>1. Definities</h2>
                                <p>
                                    In deze algemene voorwaarden wordt verstaan
                                    onder:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Hoefsmid:</strong> Hoefsmederij
                                        van Riessen, gevestigd te Bloemendaal.
                                    </li>
                                    <li>
                                        <strong>Klant:</strong> De natuurlijke
                                        persoon of rechtspersoon die een
                                        overeenkomst aangaat met de Hoefsmid.
                                    </li>
                                    <li>
                                        <strong>Diensten:</strong> Alle
                                        werkzaamheden die de Hoefsmid in
                                        opdracht van de Klant verricht, zoals
                                        bekappen, beslaan en behandelen van
                                        hoeven.
                                    </li>
                                </ul>

                                <h2>2. Toepasselijkheid</h2>
                                <p>
                                    Deze algemene voorwaarden zijn van
                                    toepassing op alle aanbiedingen, offertes en
                                    overeenkomsten tussen de Hoefsmid en de
                                    Klant, tenzij uitdrukkelijk schriftelijk
                                    anders is overeengekomen.
                                </p>

                                <h2>3. Dienstverlening</h2>
                                <p>
                                    De Hoefsmid zal de overeengekomen diensten
                                    naar beste inzicht en vermogen uitvoeren. De
                                    Hoefsmid heeft een inspanningsverplichting
                                    en geen resultaatsverplichting.
                                </p>
                                <p>
                                    De Klant dient ervoor te zorgen dat het
                                    paard op de afgesproken tijd en plaats
                                    aanwezig is en dat het paard in een zodanige
                                    conditie verkeert dat de Hoefsmid zijn
                                    werkzaamheden veilig kan uitvoeren.
                                </p>

                                <h2>4. Afspraken en annulering</h2>
                                <p>
                                    Afspraken worden in overleg tussen de
                                    Hoefsmid en de Klant gemaakt. Indien de
                                    Klant een gemaakte afspraak wenst te
                                    annuleren, dient dit minimaal 24 uur van
                                    tevoren te gebeuren. Bij annulering binnen
                                    24 uur voor de afspraak kan de Hoefsmid
                                    kosten in rekening brengen.
                                </p>

                                <h2>5. Tarieven en betaling</h2>
                                <p>
                                    De tarieven voor de diensten van de Hoefsmid
                                    worden vooraf kenbaar gemaakt aan de Klant.
                                    Betaling dient direct na het verrichten van
                                    de diensten te geschieden, tenzij anders is
                                    overeengekomen.
                                </p>
                                <p>
                                    Bij niet-tijdige betaling is de Klant in
                                    verzuim en heeft de Hoefsmid het recht om
                                    wettelijke rente en incassokosten in
                                    rekening te brengen.
                                </p>

                                <h2>6. Aansprakelijkheid</h2>
                                <p>
                                    De Hoefsmid is niet aansprakelijk voor
                                    schade, van welke aard ook, ontstaan doordat
                                    de Hoefsmid is uitgegaan van door of namens
                                    de Klant verstrekte onjuiste en/of
                                    onvolledige gegevens.
                                </p>
                                <p>
                                    De aansprakelijkheid van de Hoefsmid is
                                    beperkt tot het bedrag dat in het
                                    desbetreffende geval onder de
                                    beroepsaansprakelijkheidsverzekering wordt
                                    uitbetaald.
                                </p>

                                <h2>7. Overmacht</h2>
                                <p>
                                    In geval van overmacht is de Hoefsmid niet
                                    gehouden tot het nakomen van enige
                                    verplichting jegens de Klant. Onder
                                    overmacht wordt verstaan alle van
                                    buitenkomende oorzaken waarop de Hoefsmid
                                    geen invloed kan uitoefenen, maar waardoor
                                    de Hoefsmid niet in staat is zijn
                                    verplichtingen na te komen.
                                </p>

                                <h2>8. Toepasselijk recht en geschillen</h2>
                                <p>
                                    Op alle overeenkomsten tussen de Hoefsmid en
                                    de Klant is Nederlands recht van toepassing.
                                    Geschillen worden voorgelegd aan de bevoegde
                                    rechter in het arrondissement waar de
                                    Hoefsmid is gevestigd.
                                </p>

                                <h2>9. Wijzigingen</h2>
                                <p>
                                    De Hoefsmid behoudt zich het recht voor deze
                                    algemene voorwaarden te wijzigen.
                                    Wijzigingen treden in werking 30 dagen na
                                    bekendmaking aan de Klant.
                                </p>

                                <p className="text-sm text-slate-500 mt-8">
                                    Laatste update: 1 juni 2023
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
