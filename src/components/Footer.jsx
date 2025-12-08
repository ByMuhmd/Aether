import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black border-t border-white/10 pt-32 pb-10 relative overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white whitespace-nowrap select-none">
                    AETHER
                </div>
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

                    <div className="md:col-span-4">
                        <Link to="/" className="text-4xl font-bold tracking-tighter uppercase mb-8 block">
                            AETHER<span className="text-blue-500">.</span>
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                            Redefining the future of automotive luxury. Experience the perfect fusion of performance, design, and sustainability.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={<Facebook size={20} />} href="#" />
                            <SocialLink icon={<Twitter size={20} />} href="#" />
                            <SocialLink icon={<Instagram size={20} />} href="#" />
                            <SocialLink icon={<Youtube size={20} />} href="#" />
                        </div>
                    </div>


                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="text-white font-bold mb-8 text-lg">Models</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><FooterLink to="/models">All Models</FooterLink></li>
                            <li><FooterLink to="/models/sedan">Aether S</FooterLink></li>
                            <li><FooterLink to="/models/suv">Aether X</FooterLink></li>
                            <li><FooterLink to="/models/sport">Aether GT</FooterLink></li>
                            <li><FooterLink to="/models/electric">Aether E</FooterLink></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-8 text-lg">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><FooterLink to="/about">About Us</FooterLink></li>
                            <li><FooterLink to="/innovation">Innovation</FooterLink></li>
                            <li><FooterLink to="/careers">Careers</FooterLink></li>
                            <li><FooterLink to="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>


                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-8 text-lg">Stay Ahead</h4>
                        <p className="text-gray-400 mb-6">Join our exclusive newsletter for the latest updates and reveals.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500 hover:text-white transition-colors">
                                <ArrowRight size={24} />
                            </button>
                        </form>
                    </div>
                </div>


                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Aether Automotive. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 group"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon, href }) {
    return (
        <a
            href={href}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ to, children }) {
    return (
        <Link to={to} className="hover:text-blue-500 transition-colors block w-fit relative group">
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
        </Link>
    );
}
