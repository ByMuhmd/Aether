import React from 'react';

export default function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}
