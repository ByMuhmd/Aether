import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VehicleCard({ car, variant = 'detailed', index = 0 }) {
    if (variant === 'showcase') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${car.accent} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">{car.category}</p>
                        <h3 className="text-3xl font-bold text-white mb-2">{car.name}</h3>
                        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <p className="text-gray-300">{car.price}</p>
                            <Link
                                to={`/models/${car.id}`}
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

    return (
        <Link to={`/models/${car.id}`} className="group block">
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-blue-500/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${car.accent} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                    <div>
                        <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">{car.category}</p>
                        <h2 className="text-4xl font-bold text-white mb-2">{car.name}</h2>
                        <p className="text-gray-400">{car.tagline}</p>
                    </div>
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Starting at</p>
                            <p className="text-2xl font-medium text-white">{car.priceStr}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors duration-300">
                            <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
