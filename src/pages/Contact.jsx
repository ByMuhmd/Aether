import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, User, Mail, Phone, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import { cars } from '../data/cars';
import showroomBg from '../assets/showroom_background_1765150789115.png';

const showrooms = [
    { name: 'Cairo Showroom (New Cairo)', city: 'Cairo' },
    { name: 'Giza Showroom (Sheikh Zayed)', city: 'Giza' },
    { name: 'Alexandria Showroom (Sidi Gaber)', city: 'Alexandria' },
    { name: 'Mansoura Showroom (El Mashaya)', city: 'Dakahlia' },
    { name: 'El Gouna Showroom (Abu Tig Marina)', city: 'Red Sea' }
];

export default function Contact() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        carId: cars[0].id,
        showroom: showrooms[0].name,
        date: '',
        time: '',
        name: '',
        phone: '',
        email: ''
    });

    const currentCar = cars.find(c => c.id === formData.carId);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(4);
    };

    return (
        <div className="relative min-h-screen text-white overflow-hidden flex items-center justify-center py-24">
            <div className="absolute inset-0">
                <img src={showroomBg} alt="Showroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
            </div>

            <div className="relative z-10 container max-w-4xl px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Book a Test Drive</h1>
                    <p className="text-gray-400">Schedule your drive to experience the power of Aether on Egypt's roads.</p>
                </div>

                <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {step < 4 && (
                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                            {[1, 2, 3].map(num => (
                                <div key={num} className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === num
                                        ? 'bg-blue-600 text-white'
                                        : step > num ? 'bg-green-600 text-white' : 'bg-white/5 text-gray-500'
                                        }`}>
                                        {num}
                                    </div>
                                    <span className={`text-sm hidden md:inline ${step === num ? 'text-white font-bold' : 'text-gray-500'}`}>
                                        {num === 1 ? 'Vehicle & Location' : num === 2 ? 'Date & Time' : 'Personal Info'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} key="step1" className="space-y-6 text-left">
                                <div className="space-y-2">
                                    <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Select Vehicle</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {cars.map(car => (
                                            <button
                                                key={car.id}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, carId: car.id })}
                                                className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${formData.carId === car.id
                                                    ? 'border-blue-500 bg-blue-500/10'
                                                    : 'border-white/5 bg-black/40 hover:border-white/10'
                                                    }`}
                                            >
                                                <img src={car.image} alt={car.name} className="w-16 h-10 object-contain" />
                                                <span className="font-bold text-sm">{car.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Showroom Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                        <select
                                            value={formData.showroom}
                                            onChange={(e) => setFormData({ ...formData, showroom: e.target.value })}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                                        >
                                            {showrooms.map(s => (
                                                <option key={s.name} value={s.name}>{s.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button onClick={handleNext} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-2 transition-all">
                                        Next <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} key="step2" className="space-y-6 text-left">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Select Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="date"
                                                required
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Select Time</label>
                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <select
                                                value={formData.time}
                                                required
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                                            >
                                                <option value="">Choose Time Slot</option>
                                                {['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'].map(t => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <button onClick={handleBack} className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                                        Back
                                    </button>
                                    <button onClick={handleNext} disabled={!formData.date || !formData.time} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-2 transition-all disabled:opacity-50">
                                        Next <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} key="step3" className="space-y-6 text-left">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Enter full name"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="tel"
                                                required
                                                pattern="^01[0-2,5]{1}[0-9]{8}$"
                                                placeholder="e.g. 01012345678"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-blue-400 font-bold uppercase tracking-widest">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                        <input
                                            type="email"
                                            required
                                            placeholder="name@domain.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <button type="button" onClick={handleBack} className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                                        Back
                                    </button>
                                    <button type="submit" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-2 transition-all">
                                        Confirm Booking <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.form>
                        )}

                        {step === 4 && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} key="step4" className="text-center space-y-8">
                                <div className="flex justify-center">
                                    <CheckCircle size={80} className="text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-2">Test Drive Confirmed!</h3>
                                    <p className="text-gray-400">We look forward to seeing you at our showroom. Your booking ticket details are below.</p>
                                </div>

                                <div className="max-w-md mx-auto bg-black/50 border border-white/10 rounded-3xl overflow-hidden shadow-xl text-left p-8 relative">
                                    <div className="absolute top-0 left-0 w-3 h-full bg-blue-600" />
                                    
                                    <div className="border-b border-white/5 pb-4 mb-6">
                                        <h4 className="text-xs text-gray-500 font-bold uppercase mb-1">Selected Vehicle</h4>
                                        <p className="text-xl font-bold text-white">{currentCar.name} ({currentCar.category})</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <h4 className="text-xs text-gray-500 font-bold uppercase mb-1">Date</h4>
                                            <p className="text-md font-bold text-white">{formData.date}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-gray-500 font-bold uppercase mb-1">Time Slot</h4>
                                            <p className="text-md font-bold text-white">{formData.time}</p>
                                        </div>
                                    </div>

                                    <div className="border-b border-white/5 pb-4 mb-6">
                                        <h4 className="text-xs text-gray-500 font-bold uppercase mb-1">Location</h4>
                                        <p className="text-md font-bold text-white">{formData.showroom}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div>
                                            <h4 className="text-xs text-gray-500 font-bold uppercase mb-1">Guest Name</h4>
                                            <p className="text-md font-bold text-white">{formData.name}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-gray-500 font-bold uppercase mb-1">Phone</h4>
                                            <p className="text-md font-bold text-white">{formData.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center border-t border-dashed border-white/20 pt-6">
                                        <div className="w-48 h-12 bg-white flex items-center justify-center rounded">
                                            <div className="w-40 h-8 bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_6px)]" />
                                        </div>
                                    </div>
                                </div>

                                <button onClick={() => window.print()} className="px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-gray-200">
                                    Print Ticket
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
