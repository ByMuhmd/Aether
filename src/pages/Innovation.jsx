import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { Cpu, Leaf, Shield, Globe } from 'lucide-react';
import techBg from '../assets/tech_background_1765145469847.png';

export default function Innovation() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="bg-black min-h-screen text-white overflow-hidden">

            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={techBg}
                        alt="Future Technology"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
                </motion.div>

                <div className="relative z-10 container text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            BEYOND <br /> TOMORROW
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl text-blue-400 font-light tracking-widest uppercase"
                    >
                        Engineering the Impossible
                    </motion.p>
                </div>
            </div>


            <div className="relative z-10 bg-black">
                <div className="container py-32 space-y-32">
                    <FeatureSection
                        icon={<Cpu size={64} />}
                        title="Neural Core AI"
                        description="Our proprietary AI system processes 500 trillion operations per second. It doesn't just drive; it thinks, learns, and evolves with you, enabling true Level 5 autonomy."
                        align="left"
                        color="text-blue-500"
                        gradient="from-blue-500/20"
                    />

                    <FeatureSection
                        icon={<Leaf size={64} />}
                        title="Sustainable Luxury"
                        description="We've redefined premium materials. 100% vegan interiors, recycled carbon fiber composites, and a manufacturing process that is carbon neutral by 2030."
                        align="right"
                        color="text-green-500"
                        gradient="from-green-500/20"
                    />

                    <FeatureSection
                        icon={<Shield size={64} />}
                        title="Active Defense"
                        description="A 360-degree invisible shield. Sensor fusion technology anticipates hazards milliseconds before they occur, reacting faster than human reflexes."
                        align="left"
                        color="text-red-500"
                        gradient="from-red-500/20"
                    />

                    <FeatureSection
                        icon={<Globe size={64} />}
                        title="Global Connectivity"
                        description="Seamless integration with smart cities and V2X communication. Your Aether vehicle communicates with infrastructure and other vehicles to optimize traffic flow and safety."
                        align="right"
                        color="text-purple-500"
                        gradient="from-purple-500/20"
                    />
                </div>


                <div className="mt-24 py-32 border-t border-white/10 bg-zinc-900/30 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5 blur-3xl" />
                    <div className="container relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            <Stat number={500} suffix="+" label="Patents Filed" delay={0} />
                            <Stat number={0} suffix="%" label="Carbon Emissions" delay={0.2} />
                            <Stat number={24} suffix="/7" label="AI Monitoring" delay={0.4} />
                            <Stat number={100} suffix="%" label="Recyclable" delay={0.6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureSection({ icon, title, description, align, color, gradient }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center gap-16 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex-1 relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} to-transparent opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-700`} />
                <div className="relative bg-zinc-900/50 border border-white/10 p-12 rounded-3xl backdrop-blur-md hover:border-white/20 transition-colors">
                    <div className={`${color} mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                        {icon}
                    </div>
                    <h3 className="text-4xl font-bold mb-6">{title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
                </div>
            </div>
            <div className="flex-1 flex justify-center">

                <div className="relative w-64 h-64">
                    <div className={`absolute inset-0 border-2 border-dashed ${color} rounded-full opacity-20 animate-[spin_10s_linear_infinite]`} />
                    <div className={`absolute inset-4 border-2 border-dashed ${color} rounded-full opacity-40 animate-[spin_15s_linear_infinite_reverse]`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent opacity-10 blur-2xl`} />
                </div>
            </div>
        </motion.div>
    );
}

function Stat({ number, suffix, label, delay }) {
    return (
        <div className="text-center group cursor-default">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
                className="relative inline-block"
            >
                <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="relative text-6xl md:text-8xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
                    <Counter from={0} to={number} duration={2} />{suffix}
                </h4>
            </motion.div>
            <p className="text-blue-500 text-sm font-medium uppercase tracking-widest">{label}</p>
        </div>
    );
}

function Counter({ from, to, duration }) {
    const nodeRef = useRef();

    useEffect(() => {
        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                node.textContent = Math.round(value);
            }
        });
        return () => controls.stop();
    }, [from, to, duration]);

    return <span ref={nodeRef} />;
}
