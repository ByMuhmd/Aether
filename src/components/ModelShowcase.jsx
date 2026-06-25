import React from 'react';
import { cars } from '../data/cars';
import VehicleCard from './VehicleCard';

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
                        <VehicleCard key={model.id} car={model} variant="showcase" index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
