import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_background_1765140715939.png';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Luxury Electric Car"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
            </div>


            <div className="relative z-10 container h-full flex flex-col justify-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-4">The Future is Here</h2>
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                        Beyond <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Expectation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                        Experience the pinnacle of automotive engineering. Where sustainable performance meets uncompromising luxury.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/models"
                            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Explore Models
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/compare"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                        >
                            Compare Specs
                        </Link>
                    </div>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}
