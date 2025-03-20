"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Naam moet minimaal 2 karakters bevatten" }),
    email: z.string().email({ message: "Ongeldig e-mailadres" }),
    phone: z.string().optional(),
    subject: z
        .string()
        .min(2, { message: "Onderwerp moet minimaal 2 karakters bevatten" }),
    message: z
        .string()
        .min(10, { message: "Bericht moet minimaal 10 karakters bevatten" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted:", data);
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-md border border-slate-200"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Naam *
                        </label>
                        <input
                            id="name"
                            type="text"
                            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                                errors.name
                                    ? "border-red-500"
                                    : "border-slate-300"
                            }`}
                            placeholder="Uw naam"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700"
                        >
                            E-mail *
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-slate-300"
                            }`}
                            placeholder="uw@email.nl"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Telefoon
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors"
                            placeholder="Uw telefoonnummer"
                            {...register("phone")}
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Onderwerp *
                        </label>
                        <input
                            id="subject"
                            type="text"
                            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                                errors.subject
                                    ? "border-red-500"
                                    : "border-slate-300"
                            }`}
                            placeholder="Onderwerp van uw bericht"
                            {...register("subject")}
                        />
                        {errors.subject && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700"
                    >
                        Bericht *
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                            errors.message
                                ? "border-red-500"
                                : "border-slate-300"
                        }`}
                        placeholder="Uw bericht"
                        {...register("message")}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Verzenden...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Verzenden
                            </>
                        )}
                    </button>
                </div>

                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-green-50 text-green-800 rounded-md"
                    >
                        Bedankt voor uw bericht! Ik neem zo snel mogelijk
                        contact met u op.
                    </motion.div>
                )}
            </form>
        </motion.div>
    );
}
