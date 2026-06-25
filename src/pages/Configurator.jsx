import React, { useState } from 'react';
import { cars } from '../data/cars';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Configurator() {
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const [selectedColor, setSelectedColor] = useState(cars[0].colors[0]);
    const [selectedWheel, setSelectedWheel] = useState(cars[0].wheels[0]);
    const [selectedInterior, setSelectedInterior] = useState(cars[0].interiors[0]);

    const handleCarChange = (carId) => {
        const car = cars.find(c => c.id === carId);
        setSelectedCar(car);
        setSelectedColor(car.colors[0]);
        setSelectedWheel(car.wheels[0]);
        setSelectedInterior(car.interiors[0]);
    };

    const totalPrice = selectedCar.price + selectedColor.price + selectedWheel.price + selectedInterior.price;
    const formatPrice = (val) => 'EGP ' + val.toLocaleString('en-US');

    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-20 overflow-hidden">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Your Custom Aether</h1>
                    <p className="text-gray-400">Choose your model, paint, wheels, and interior layout to customize your vehicle.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 flex flex-col items-center">
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-zinc-950 border border-white/5 flex items-center justify-center p-8">
                            <div
                                className="absolute inset-0 opacity-10 blur-3xl rounded-full transition-all duration-700"
                                style={{ backgroundColor: selectedColor.hex }}
                            />
                            <motion.img
                                key={selectedCar.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src={selectedCar.image}
                                alt={selectedCar.name}
                                className="relative z-10 w-full object-contain max-h-[400px]"
                            />
                        </div>

                        <div className="mt-8 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 p-6 w-full flex justify-between items-center">
                            <div>
                                <h3 className="text-lg text-gray-400 font-medium">Estimated Total Price</h3>
                                <p className="text-3xl font-bold text-blue-500">{formatPrice(totalPrice)}</p>
                            </div>
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full flex items-center gap-2 transition-all shadow-lg shadow-blue-900/20">
                                Order Now <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl space-y-6">
                            <div className="space-y-3">
                                <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Select Model</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {cars.map(car => (
                                        <button
                                            key={car.id}
                                            onClick={() => handleCarChange(car.id)}
                                            className={`p-4 rounded-xl border text-left transition-all ${selectedCar.id === car.id
                                                ? 'border-blue-500 bg-blue-500/10 text-white'
                                                : 'border-white/5 bg-black/40 text-gray-400 hover:border-white/10 hover:text-white'
                                                }`}
                                        >
                                            <h4 className="font-bold">{car.name}</h4>
                                            <p className="text-xs text-gray-500 mt-1">{formatPrice(car.price)}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Exterior Paint: {selectedColor.name}</label>
                                <div className="flex gap-4">
                                    {selectedCar.colors.map(color => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color)}
                                            style={{ backgroundColor: color.hex }}
                                            className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor.name === color.name ? 'border-blue-500 scale-110' : 'border-white/10 hover:scale-105'}`}
                                        >
                                            {selectedColor.name === color.name && (
                                                <Check size={20} className={color.hex === '#ffffff' ? 'text-black' : 'text-white'} />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Wheel Design</label>
                                <div className="space-y-3">
                                    {selectedCar.wheels.map(wheel => (
                                        <button
                                            key={wheel.name}
                                            onClick={() => setSelectedWheel(wheel)}
                                            className={`w-full p-4 rounded-xl border flex justify-between items-center transition-all ${selectedWheel.name === wheel.name
                                                ? 'border-blue-500 bg-blue-500/10'
                                                : 'border-white/5 bg-black/40 hover:border-white/10'
                                                }`}
                                        >
                                            <span className="font-medium text-left">{wheel.name}</span>
                                            <span className="text-sm text-gray-400 whitespace-nowrap">{wheel.price === 0 ? 'Included' : `+ ${formatPrice(wheel.price)}`}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Interior Option: {selectedInterior.name}</label>
                                <div className="space-y-3">
                                    {selectedCar.interiors.map(interior => (
                                        <button
                                            key={interior.name}
                                            onClick={() => setSelectedInterior(interior)}
                                            className={`w-full p-4 rounded-xl border flex justify-between items-center transition-all ${selectedInterior.name === interior.name
                                                ? 'border-blue-500 bg-blue-500/10'
                                                : 'border-white/5 bg-black/40 hover:border-white/10'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="w-6 h-6 rounded-full border border-white/10" style={{ backgroundColor: interior.hex }} />
                                                <span className="font-medium text-left">{interior.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-400 whitespace-nowrap">{interior.price === 0 ? 'Included' : `+ ${formatPrice(interior.price)}`}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
