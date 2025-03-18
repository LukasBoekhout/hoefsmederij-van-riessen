import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { AnimatedHorse } from "@/components/animated-horse";
import { PageTransition } from "@/components/page-transition";
import { HorseshoeDivider } from "@/components/horseshoe-divider";
import StrapiAPI from "@/services/strapi_api";

export default async function Home() {
    console.log(
        "`${process.env.NEXT_PUBLIC_API_URL}/home`",
        `${process.env.NEXT_PUBLIC_API_URL}/home`
    );

    const strapi = new StrapiAPI();

    const home = await strapi.getHome();

    console.log("home", home);

    return (
        <main className="min-h-screen bg-white">
            <PageTransition>
                <Hero />
                <HorseshoeDivider />
                <About />
            </PageTransition>
            <AnimatedHorse />
        </main>
    );
}
