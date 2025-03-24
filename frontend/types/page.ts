import type { StrapiData } from "@/types/api";

export type StrapiPage = StrapiData<{
    headerTitle?: string;
    headerDescription?: string;
    content?: string;
}>;
