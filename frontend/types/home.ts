import type { StrapiImage } from "./api";
import type { StrapiPage } from "./page";

export type HomeData = {
    heroText?: string;
    heroCheckmark?: string;
    heroImage?: StrapiImage;
    page?: StrapiPage;
    images?: StrapiImage[];
};
