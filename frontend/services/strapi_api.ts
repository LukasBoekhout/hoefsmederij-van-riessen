import type { StrapiApiObject } from "@/types/api";
import type { GeneralData } from "@/types/general";
import type { HomeData } from "@/types/home";
import axios from "axios";

export default class StrapiAPI {
    instance;

    constructor() {
        this.instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
        });
    }

    async getGeneral(): Promise<StrapiApiObject<GeneralData>> {
        const response = await this.instance.get("/general");
        return response.data;
    }

    async getHome(): Promise<StrapiApiObject<HomeData>> {
        const response = await this.instance.get("/home?populate=*");
        return response.data;
    }

    async getContact() {
        const response = await this.instance.get("/contact");
        return response.data;
    }
}
