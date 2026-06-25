import React, { useState } from 'react';
import { cars } from '../data/cars';
import VehicleCard from '../components/VehicleCard';

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
                        <VehicleCard key={car.id} car={car} variant="detailed" />
                    ))}
                </div>
            </div>
        </div>
    );
}
