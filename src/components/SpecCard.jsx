import React from 'react';

export default function SpecCard({ icon, label, value }) {
    return (
        <div className="bg-black/50 p-8 rounded-2xl border border-white/5 text-center hover:border-blue-500/30 transition-colors">
            <div className="text-blue-500 mb-4 flex justify-center scale-150">
                {icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider">{label}</p>
        </div>
    );
}
