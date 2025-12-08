import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cars } from '../data/cars';


export default function ModelShowcase() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Collection</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover a range of vehicles designed to exceed every expectation. From executive comfort to track-ready performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cars.map((model, index) => (
                        <ModelCard key={model.id} model={model} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ModelCard({ model, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
        >

            <div className={`absolute inset-0 bg-gradient-to-br ${model.accent} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />


            <img
                src={model.image}
                alt={model.name}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700"
            />


            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">{model.category}</p>
                    <h3 className="text-3xl font-bold text-white mb-2">{model.name}</h3>
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <p className="text-gray-300">{model.price}</p>
                        <Link
                            to={`/models/${model.id}`}
                            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                        >
                            Details <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
