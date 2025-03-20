import axios from "axios";

export default class StrapiAPI {
    instance;

    constructor() {
        this.instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
        });
    }

    async getHome() {
        const response = await this.instance.get("/home");
        return response.data;
    }

    async getContact() {
        const response = await this.instance.get("/contact");
        return response.data;
    }
}
