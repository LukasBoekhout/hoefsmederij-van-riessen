import axios from "axios";

export default class StrapiAPI {
    instance;

    constructor() {
        console.log("process.env", process.env.NEXT_PUBLIC_API_URL);

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
        return await this.instance.get("/home");
    }
}
