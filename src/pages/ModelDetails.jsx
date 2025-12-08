import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Gauge, Timer, Battery } from 'lucide-react';
import { cars } from '../data/cars';

export default function ModelDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === id);

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
                            <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300">
                                Order Now
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300">
                                Schedule Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>


            <section className="py-24 bg-zinc-900">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <SpecCard icon={<Battery />} label="Range" value={car.specs.range} />
                        <SpecCard icon={<Timer />} label="0-60 mph" value={car.specs.acceleration} />
                        <SpecCard icon={<Gauge />} label="Top Speed" value={car.specs.topSpeed} />
                        <SpecCard icon={<Zap />} label="Peak Power" value={car.specs.power} />
                    </div>
                </div>
            </section>


            <section className="py-24 bg-black">
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
                                    <p className="text-gray-300 text-sm">Crafted for comfort</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function SpecCard({ icon, label, value }) {
    return (
        <div className="bg-black/50 p-8 rounded-2xl border border-white/5 text-center hover:border-blue-500/30 transition-colors">
            <div className="text-blue-500 mb-4 flex justify-center scale-150">{icon}</div>
            <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider">{label}</p>
        </div>
    );
}
