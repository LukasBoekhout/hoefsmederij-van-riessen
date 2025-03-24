"use client";
import type { StrapiImage } from "@/types/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type AboutProps = Partial<{
    title: string;
    content: any;
    images: StrapiImage[];
}>;

export function About({ title, content, images }: AboutProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 relative inline-block">
                        {title}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500 origin-left"
                        />
                    </h2>

                    <div className="prose prose-slate prose-lg max-w-none">
                        {content && <BlocksRenderer content={content} />}
                    </div>
                </motion.div>

                <div
                    ref={ref2}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
                >
                    {images?.map((image) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30, x: -20 }}
                            animate={inView2 ? { opacity: 1, y: 0, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                                <div className="relative h-80 md:h-96">
                                    <Image
                                        src={
                                            (process.env.NEXT_PUBLIC_API_URL ??
                                                "") + (image.url ?? "")
                                        }
                                        alt={image.alternativeText ?? ""}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
