import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Mail, Phone, ChevronRight } from 'lucide-react';
import { cars } from '../data/cars';
import showroomBg from '../assets/showroom_background_1765150789115.png';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        model: 'sedan',
        date: '',
        location: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Test drive request submitted! We will contact you shortly.');
    };

    return (
        <div className="relative min-h-screen text-white overflow-hidden">

            <div className="absolute inset-0">
                <img src={showroomBg} alt="Showroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 container pt-32 pb-20 min-h-screen flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                                Command <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                    The Road
                                </span>
                            </h1>
                            <p className="text-gray-300 text-xl mb-12 max-w-lg leading-relaxed">
                                Experience the pinnacle of automotive engineering. Schedule your personal test drive and feel the power of Aether.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <ContactCard
                                    icon={<MapPin />}
                                    title="Global HQ"
                                    text="Silicon Valley, CA"
                                    delay={0.2}
                                />
                                <ContactCard
                                    icon={<Phone />}
                                    title="Concierge"
                                    text="+1 (888) 123-4567"
                                    delay={0.3}
                                />
                                <ContactCard
                                    icon={<Mail />}
                                    title="Email"
                                    text="drive@aether.com"
                                    delay={0.4}
                                />
                            </div>
                        </motion.div>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="lg:w-1/2 w-full"
                    >
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <h3 className="text-3xl font-bold mb-8 relative z-10">Reserve Your Drive</h3>

                            <div className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputGroup icon={<User size={20} />} placeholder="Full Name" type="text" required />
                                    <InputGroup icon={<Phone size={20} />} placeholder="Phone Number" type="tel" required />
                                </div>

                                <InputGroup icon={<Mail size={20} />} placeholder="Email Address" type="email" required />

                                <div className="space-y-2">
                                    <label className="text-xs text-blue-400 font-bold uppercase tracking-widest ml-1">Select Model</label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer hover:bg-black/60 transition-colors"
                                            value={formData.model}
                                            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                        >
                                            {cars.map(car => (
                                                <option key={car.id} value={car.id}>{car.name}</option>
                                            ))}
                                        </select>
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" size={18} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-blue-400 font-bold uppercase tracking-widest ml-1">Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="date"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 hover:bg-black/60 transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-blue-400 font-bold uppercase tracking-widest ml-1">Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <select className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer hover:bg-black/60 transition-colors">
                                                <option>San Francisco</option>
                                                <option>New York</option>
                                                <option>London</option>
                                                <option>Dubai</option>
                                                <option>Tokyo</option>
                                                <option>Cairo</option>
                                                <option>Kafr El-Sheikh</option>
                                            </select>
                                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-5 rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all mt-6 flex items-center justify-center gap-2"
                                >
                                    Confirm Booking <ChevronRight size={20} />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ContactCard({ icon, title, text, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
        >
            <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-white text-sm">{title}</h4>
                <p className="text-gray-400 text-sm">{text}</p>
            </div>
        </motion.div>
    );
}

function InputGroup({ icon, placeholder, type, required }) {
    return (
        <div className="relative group/input">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-blue-500 transition-colors">
                {icon}
            </div>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 placeholder:text-gray-600 hover:bg-black/60 transition-all"
            />
        </div>
    );
}
