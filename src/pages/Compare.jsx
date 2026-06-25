import React, { useState } from 'react';
import { cars } from '../data/cars';

const specRows = [
    { label: "Estimated Range (km)", key: "range", max: 1000, parseFn: (v) => parseInt(v) },
    { label: "0-100 km/h Acceleration (s)", key: "acceleration", max: 10, isLowerBetter: true, parseFn: (v) => parseFloat(v) },
    { label: "Top Speed (km/h)", key: "topSpeed", max: 400, parseFn: (v) => parseInt(v) },
    { label: "Peak Power (hp)", key: "power", max: 1200, parseFn: (v) => parseInt(v) }
];

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
                    <p className="text-gray-400">Select two models to compare their performance and specifications side-by-side.</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                    {[selectedCar1, selectedCar2].map((selected, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            <label className="text-sm text-gray-500 uppercase tracking-wider">Model {idx + 1}</label>
                            <select
                                value={selected}
                                onChange={(e) => idx === 0 ? setSelectedCar1(e.target.value) : setSelectedCar2(e.target.value)}
                                className="bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500"
                            >
                                {cars.map(car => (
                                    <option key={car.id} value={car.id}>{car.name}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden">
                    <div className="grid grid-cols-2 border-b border-white/5">
                        {[car1, car2].map((car, idx) => (
                            <div key={car.id} className={`p-8 flex flex-col items-center ${idx === 1 ? 'border-l border-white/5' : ''}`}>
                                <img src={car.image} alt={car.name} className="w-full max-w-sm object-contain mb-4" />
                                <h3 className="text-2xl font-bold">{car.name}</h3>
                                <p className="text-blue-400">{car.priceStr}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 space-y-8">
                        <div className="grid grid-cols-3 py-4 text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-white/5">
                            <div>Specification</div>
                            <div>{car1.name}</div>
                            <div className="border-l border-white/5 pl-8">{car2.name}</div>
                        </div>

                        {specRows.map(row => {
                            const val1 = row.parseFn(car1.specs[row.key]);
                            const val2 = row.parseFn(car2.specs[row.key]);

                            const percent1 = row.isLowerBetter ? ((row.max - val1) / row.max) * 100 : (val1 / row.max) * 100;
                            const percent2 = row.isLowerBetter ? ((row.max - val2) / row.max) * 100 : (val2 / row.max) * 100;

                            return (
                                <div key={row.label} className="grid grid-cols-3 items-center py-4">
                                    <div className="text-gray-400 font-medium">{row.label}</div>
                                    
                                    <div className="space-y-2 pr-4">
                                        <div className="text-lg font-bold">{car1.specs[row.key]}</div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${percent1}%` }} />
                                        </div>
                                    </div>

                                    <div className="space-y-2 border-l border-white/5 pl-8">
                                        <div className="text-lg font-bold">{car2.specs[row.key]}</div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${percent2}%` }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
