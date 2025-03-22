import { Hero } from "@/components/hero";
import { About } from "@/components/about";

import { PageTransition } from "@/components/page-transition";
import { HorseshoeDivider } from "@/components/horseshoe-divider";
import StrapiAPI from "@/services/strapi_api";

export default async function Home() {
    const strapi = new StrapiAPI();

    const data = await Promise.all([strapi.getGeneral(), strapi.getHome()]);

    const general = data[0]?.data;
    const home = data[1]?.data;

    return (
        <main className="min-h-screen bg-white">
            <PageTransition>
                <Hero
                    title={general.websiteName}
                    subtitle={home.heroText}
                    imageUrl={
                        process.env.NEXT_PUBLIC_API_URL + home.heroImage?.url
                    }
                />
                <HorseshoeDivider />
                <About />
            </PageTransition>
        </main>
    );
}
