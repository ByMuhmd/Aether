import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, History, Award } from 'lucide-react';
import factoryBg from '../assets/factory_future_1765151241579.png';
import ceoImg from '../assets/ceo_portrait_1765151255114.png';

export default function About() {
    return (
        <div className="bg-black min-h-screen text-white">

            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={factoryBg} alt="Aether Factory" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                </div>
                <div className="relative z-10 container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold mb-6"
                    >
                        Our Vision
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                    >
                        To accelerate the world's transition to sustainable energy through uncompromising luxury and performance.
                    </motion.p>
                </div>
            </div>


            <section className="py-24 bg-zinc-900">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ValueCard
                            icon={<Target size={40} />}
                            title="Innovation First"
                            description="We don't follow trends; we set them. Every Aether vehicle is a testament to what's possible when engineering meets imagination."
                        />
                        <ValueCard
                            icon={<Users size={40} />}
                            title="Customer Centric"
                            description="Our relationship with you doesn't end at delivery. It's a lifelong partnership dedicated to your journey."
                        />
                        <ValueCard
                            icon={<Award size={40} />}
                            title="Excellence"
                            description="Good enough is not in our vocabulary. We strive for perfection in every stitch, weld, and line of code."
                        />
                    </div>
                </div>
            </section>


            <section className="py-24 bg-black">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-8">A Decade of Disruption</h2>
                            <div className="space-y-8 border-l-2 border-blue-500/30 pl-8 ml-4">
                                <TimelineItem year="2015" title="The Beginning" description="Aether was founded with a simple sketch and a bold dream." />
                                <TimelineItem year="2018" title="First Prototype" description="The Alpha prototype shattered speed records and expectations." />
                                <TimelineItem year="2021" title="Global Launch" description="We delivered our first vehicle, marking a new era in automotive history." />
                                <TimelineItem year="2025" title="The Future" description="Expanding our lineup and redefining what a car company can be." />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-800 border border-white/10 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent mix-blend-overlay" />
                                <img src={factoryBg} alt="Factory Floor" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-24 bg-zinc-900">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-16">Leadership</h2>
                    <div className="flex justify-center">
                        <div className="max-w-sm group">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                                <img src={ceoImg} alt="CEO" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-gray-300 italic">"We are building more than cars; we are building the future."</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold">Elena Vance</h3>
                            <p className="text-blue-500">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ValueCard({ icon, title, description }) {
    return (
        <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="text-blue-500 mb-6">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}

function TimelineItem({ year, title, description }) {
    return (
        <div className="relative">
            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-black border-4 border-blue-500 rounded-full" />
            <span className="text-blue-500 font-bold mb-1 block">{year}</span>
            <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
