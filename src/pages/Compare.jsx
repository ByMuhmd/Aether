import React, { useState } from 'react';
import { cars } from '../data/cars';
import { Check, X } from 'lucide-react';

export default function Compare() {
    const [selectedCar1, setSelectedCar1] = useState(cars[0].id);
    const [selectedCar2, setSelectedCar2] = useState(cars[1].id);

    const car1 = cars.find(c => c.id === selectedCar1);
    const car2 = cars.find(c => c.id === selectedCar2);

    return (
        <div className="bg-black min-h-screen pt-24 pb-20 text-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Compare Models</h1>
                    <p className="text-gray-400">Select two models to compare their specifications side-by-side.</p>
                </div>


                <div className="grid grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <label className="text-sm text-gray-500 uppercase tracking-wider">Model 1</label>
                        <select
                            value={selectedCar1}
                            onChange={(e) => setSelectedCar1(e.target.value)}
                            className="bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500"
                        >
                            {cars.map(car => (
                                <option key={car.id} value={car.id}>{car.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="text-sm text-gray-500 uppercase tracking-wider">Model 2</label>
                        <select
                            value={selectedCar2}
                            onChange={(e) => setSelectedCar2(e.target.value)}
                            className="bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500"
                        >
                            {cars.map(car => (
                                <option key={car.id} value={car.id}>{car.name}</option>
                            ))}
                        </select>
                    </div>
                </div>


                <div className="max-w-5xl mx-auto bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden">

                    <div className="grid grid-cols-2 border-b border-white/5">
                        <div className="p-8 flex flex-col items-center">
                            <img src={car1.image} alt={car1.name} className="w-full max-w-sm object-contain mb-4" />
                            <h3 className="text-2xl font-bold">{car1.name}</h3>
                            <p className="text-blue-400">{car1.priceStr}</p>
                        </div>
                        <div className="p-8 flex flex-col items-center border-l border-white/5">
                            <img src={car2.image} alt={car2.name} className="w-full max-w-sm object-contain mb-4" />
                            <h3 className="text-2xl font-bold">{car2.name}</h3>
                            <p className="text-blue-400">{car2.priceStr}</p>
                        </div>
                    </div>


                    <div className="divide-y divide-white/5">
                        <CompareRow label="Category" value1={car1.category} value2={car2.category} />
                        <CompareRow label="Range" value1={car1.specs.range} value2={car2.specs.range} />
                        <CompareRow label="0-60 mph" value1={car1.specs.acceleration} value2={car2.specs.acceleration} />
                        <CompareRow label="Top Speed" value1={car1.specs.topSpeed} value2={car2.specs.topSpeed} />
                        <CompareRow label="Power" value1={car1.specs.power} value2={car2.specs.power} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function CompareRow({ label, value1, value2 }) {
    return (
        <div className="grid grid-cols-3 py-6 px-8 hover:bg-white/5 transition-colors">
            <div className="text-gray-500 font-medium flex items-center">{label}</div>
            <div className="text-lg font-medium">{value1}</div>
            <div className="text-lg font-medium border-l border-white/5 pl-8">{value2}</div>
        </div>
    );
}
