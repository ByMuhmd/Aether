import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStory() {
    return (
        <section className="py-24 bg-zinc-900 text-white overflow-hidden">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-4">Innovation</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Redefining the <br />
                            <span className="text-gray-500">Driving Experience</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            At Aether, we believe that a car is more than just a mode of transportation. It is an extension of your personality, a sanctuary of comfort, and a testament to human ingenuity.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our commitment to sustainable luxury drives us to push the boundaries of what is possible. From our zero-emission powertrains to our ethically sourced interior materials, every detail is crafted with the future in mind.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative"
                    >
                        <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800 relative group">

                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors cursor-pointer">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000"
                                alt="Brand Story"
                                className="w-full h-full object-cover opacity-60"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
