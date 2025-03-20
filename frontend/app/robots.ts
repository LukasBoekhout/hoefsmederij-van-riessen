import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/coming-soon/", "/admin/"],
        },
        sitemap: "https://www.hoefsmederij-vanriessen.nl/sitemap.xml",
    };
}
