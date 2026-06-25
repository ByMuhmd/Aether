import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Models', path: '/models' },
        { name: 'Configurator', path: '/configurator' },
        { name: 'Innovation', path: '/innovation' },
        { name: 'Compare', path: '/compare' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tighter uppercase relative z-50">
                    AETHER<span className="text-blue-500">.</span>
                </Link>


                <div className="hidden md:flex items-center gap-1">
                    <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/5 mr-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${location.pathname === link.path
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/contact"
                        className="px-6 py-3 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40"
                    >
                        Test Drive
                    </Link>
                </div>


                <button
                    className="md:hidden text-white relative z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black z-40 flex flex-col justify-center px-8 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-4xl font-bold flex items-center justify-between group ${location.pathname === link.path ? 'text-blue-500' : 'text-white'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronRight
                                            className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${location.pathname === link.path ? 'opacity-100 translate-x-0' : ''
                                                }`}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    to="/contact"
                                    className="mt-8 w-full py-4 text-center font-bold text-lg bg-blue-600 text-white rounded-2xl block hover:bg-blue-700 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book a Test Drive
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
