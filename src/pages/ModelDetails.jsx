import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Gauge, Timer, Battery } from 'lucide-react';
import { cars } from '../data/cars';
import SpecCard from '../components/SpecCard';

export default function ModelDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === id);

    const [speed, setSpeed] = useState(100);
    const [temp, setTemp] = useState(25);
    const [wheelSize, setWheelSize] = useState(19);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!car) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Model not found</h2>
                    <Link to="/models" className="text-blue-500 hover:underline">Back to Models</Link>
                </div>
            </div>
        );
    }

    const baseRange = parseInt(car.specs.range);
    const speedFactor = 1 - (Math.max(0, speed - 70) * 0.004);
    const tempFactor = temp < 10 
        ? 1 - ((10 - temp) * 0.015) - 0.1 
        : temp > 30 
            ? 1 - ((temp - 30) * 0.005) - 0.05 
            : 1;
    const wheelFactor = 1 - ((wheelSize - 18) * 0.02);
    const calculatedRange = Math.round(baseRange * speedFactor * tempFactor * wheelFactor);

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover opacity-60" />
                    <div className={`absolute inset-0 bg-gradient-to-b ${car.accent} mix-blend-multiply opacity-80`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
                </div>

                <div className="relative z-10 container h-full flex flex-col justify-center pt-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-32 left-8 md:left-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} /> Back
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-blue-400 font-medium tracking-widest uppercase mb-4">{car.category}</p>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6">{car.name}</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                            {car.description}
                        </p>
                        <div className="flex gap-6">
                            <Link to="/configurator" className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 text-center">
                                Design Now
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 text-center">
                                Schedule Test Drive
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="py-24 bg-zinc-900">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <SpecCard icon={<Battery />} label="Max Range" value={car.specs.range} />
                        <SpecCard icon={<Timer />} label="0-100 km/h" value={car.specs.acceleration} />
                        <SpecCard icon={<Gauge />} label="Top Speed" value={car.specs.topSpeed} />
                        <SpecCard icon={<Zap />} label="Peak Power" value={car.specs.power} />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black border-t border-white/5">
                <div className="container max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Interactive Range Calculator</h2>
                        <p className="text-gray-400">See how speed, temperature, and wheel size affect your estimated range.</p>
                    </div>

                    <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-white/5 p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-7 space-y-8">
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Driving Speed</span>
                                    <span className="text-white font-bold">{speed} km/h</span>
                                </div>
                                <input
                                    type="range"
                                    min="60"
                                    max="150"
                                    value={speed}
                                    onChange={(e) => setSpeed(Number(e.target.value))}
                                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Outdoor Temperature</span>
                                    <span className="text-white font-bold">{temp} °C</span>
                                </div>
                                <input
                                    type="range"
                                    min="-10"
                                    max="45"
                                    value={temp}
                                    onChange={(e) => setTemp(Number(e.target.value))}
                                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            <div className="space-y-3">
                                <div className="text-sm text-gray-400 mb-2">Wheel Size</div>
                                <div className="flex gap-4">
                                    {[18, 19, 20].map(sz => (
                                        <button
                                            key={sz}
                                            onClick={() => setWheelSize(sz)}
                                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${wheelSize === sz
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                                }`}
                                        >
                                            {sz}" Wheels
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5 text-center bg-black/40 border border-white/5 p-8 rounded-2xl">
                            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Estimated Range</h3>
                            <motion.div 
                                key={calculatedRange}
                                initial={{ scale: 0.9, opacity: 0.5 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-5xl font-bold text-blue-500 mb-2"
                            >
                                {calculatedRange} km
                            </motion.div>
                            <p className="text-xs text-gray-500">Actual range depends on road conditions and driving style.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-900">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-8">Engineered for Perfection</h2>
                            <ul className="space-y-6">
                                {car.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-4 text-lg text-gray-300 border-b border-white/10 pb-4">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-800 relative group">
                                <img
                                    src={car.interior}
                                    alt={`${car.name} Interior`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-white font-bold text-xl">Premium Interior</p>
                                    <p className="text-gray-300 text-sm">Crafted for absolute comfort</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
