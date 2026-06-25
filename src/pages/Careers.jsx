import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Globe, ArrowRight } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import officeBg from '../assets/office_modern_1765152490432.png';

const benefits = [
    {
        icon: <Zap size={40} />,
        title: "Impact",
        description: "Work on technology that matters. Your contributions will directly accelerate the world's transition to sustainable energy."
    },
    {
        icon: <Users size={40} />,
        title: "Culture",
        description: "Collaborate with some of the brightest minds in engineering, design, and AI in an environment that fosters creativity."
    },
    {
        icon: <Globe size={40} />,
        title: "Growth",
        description: "We invest in our people. With global opportunities and continuous learning, your potential is limitless."
    }
];

const jobs = [
    { title: "Senior Autonomous Driving Engineer", department: "Engineering", location: "San Francisco, CA", type: "Full-time" },
    { title: "Lead Vehicle Designer", department: "Design", location: "Los Angeles, CA", type: "Full-time" },
    { title: "Marketing Director", department: "Marketing", location: "New York, NY", type: "Full-time" },
    { title: "Battery Systems Researcher", department: "R&D", location: "Berlin, Germany", type: "Full-time" }
];

export default function Careers() {
    return (
        <div className="bg-black min-h-screen text-white">
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={officeBg} alt="Aether Office" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                </div>
                <div className="relative z-10 container text-center">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold mb-6">
                        Join the Revolution
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We're looking for dreamers, doers, and disruptors to help us shape the future of mobility.
                    </motion.p>
                </div>
            </div>

            <section className="py-24 bg-zinc-900">
                <div className="container">
                    <h2 className="text-4xl font-bold mb-16 text-center">Why Aether?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {benefits.map(ben => (
                            <FeatureCard key={ben.title} {...ben} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container">
                    <h2 className="text-4xl font-bold mb-16 text-center">Open Positions</h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {jobs.map(job => (
                            <JobCard key={job.title} {...job} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white font-medium">
                            View All Positions
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function JobCard({ title, department, location, type }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all hover:bg-zinc-900 group cursor-pointer">
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
                <div className="flex gap-4 text-sm text-gray-400 justify-center md:justify-start">
                    <span>{department}</span>
                    <span>•</span>
                    <span>{location}</span>
                    <span>•</span>
                    <span>{type}</span>
                </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                <ArrowRight size={20} />
            </button>
        </div>
    );
}
