import { ContactForm } from "@/components/contact-form";
import { HorseshoeDivider } from "@/components/horseshoe-divider";
import { PageHeader } from "@/components/page-header";
import { PageTransition } from "@/components/page-transition";
import StrapiAPI from "@/services/strapi_api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default async function Contact() {
    const strapi = new StrapiAPI();

    const contact = (await strapi.getContact())?.data;

    console.log("contact", contact);

    return (
        <main className="min-h-screen bg-white pt-24">
            <PageTransition>
                <PageHeader
                    title="Neem Contact Op"
                    subtitle="Heeft u vragen of wilt u een afspraak maken? Vul het onderstaande formulier in"
                />

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <HorseshoeDivider />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="lg:col-span-2">
                                <ContactForm />
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <svg
                                        className="w-6 h-6 text-amber-600 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                    Contactgegevens
                                </h2>

                                <div className="space-y-4 text-slate-600">
                                    <div className="flex items-start">
                                        <div className=" text-amber-600 mr-3 mt-1">
                                            <FaMapMarkerAlt />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                Adres
                                            </h3>

                                            <BlocksRenderer
                                                content={contact?.address}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="text-amber-600 mr-3 mt-0.5">
                                            <FaPhoneAlt />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                Telefoon
                                            </h3>
                                            <p>{contact.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="text-amber-600 mr-3 mt-1">
                                            <FaEnvelope />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                E-mail
                                            </h3>
                                            <p>{contact.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="text-amber-600 mr-3 mt-1">
                                            {/* TODO: Icon here */}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                Bankrekeningnummer
                                            </h3>
                                            <p>{contact.bank}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="text-amber-600 mr-3 mt-1">
                                            {/* TODO: Icon here */}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                BTW nummer
                                            </h3>
                                            <p>{contact.btw}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="text-amber-600 mr-3 mt-1">
                                            {/* TODO: Icon here */}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                k.v.k. nummer
                                            </h3>
                                            <p>{contact.kvk}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageTransition>
        </main>
    );
}
