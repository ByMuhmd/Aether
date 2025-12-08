import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { cars } from '../data/cars';

export default function Models() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(cars.map(car => car.category))];

    const filteredCars = filter === 'All'
        ? cars
        : cars.filter(car => car.category === filter);

    return (
        <div className="bg-black min-h-screen pt-24 pb-20">
            <div className="container">

                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Models</h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Explore our complete lineup of luxury vehicles. Each designed with a singular purpose: to deliver the ultimate driving experience.
                    </p>
                </div>


                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-blue-600 text-white'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredCars.map((car) => (
                        <Link
                            to={`/models/${car.id}`}
                            key={car.id}
                            className="group block"
                        >
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
                    ))}
                </div>
            </div>
        </div>
    );
}
