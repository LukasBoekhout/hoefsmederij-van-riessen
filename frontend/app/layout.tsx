import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlayfulBackground } from "@/components/playful-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Hoefsmederij van Riessen | Professionele Hoefverzorging",
        template: "%s | Hoefsmederij van Riessen",
    },
    description:
        "Professionele hoefsmederij met meer dan 30 jaar ervaring in bekappen, beslaan en behandelen van paardenhoeven.",
    keywords: [
        "hoefsmid",
        "hoefsmederij",
        "paardenhoeven",
        "bekappen",
        "beslaan",
        "composiet beslag",
        "straalrot",
        "witte lijn",
        "paardenverzorging",
        "Bloemendaal",
    ],
    authors: [{ name: "Hoefsmederij van Riessen" }],
    creator: "Hoefsmederij van Riessen",
    publisher: "Hoefsmederij van Riessen",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "nl_NL",
        url: "https://www.hoefsmederij-vanriessen.nl/",
        title: "Hoefsmederij van Riessen | Professionele Hoefverzorging",
        description:
            "Professionele hoefsmederij met meer dan 30 jaar ervaring in bekappen, beslaan en behandelen van paardenhoeven.",
        siteName: "Hoefsmederij van Riessen",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hoefsmederij van Riessen | Professionele Hoefverzorging",
        description:
            "Professionele hoefsmederij met meer dan 30 jaar ervaring in bekappen, beslaan en behandelen van paardenhoeven.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    verification: {
        google: "verification_token",
    },
    alternates: {
        canonical: "https://www.hoefsmederij-vanriessen.nl",
        languages: {
            "nl-NL": "https://www.hoefsmederij-vanriessen.nl",
        },
    },
    generator: "v0.dev",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <PlayfulBackground />
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

import "./globals.css";
