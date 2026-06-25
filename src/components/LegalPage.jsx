import React from 'react';

export default function LegalPage({ title, lastUpdated, children }) {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-20">
            <div className="container max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>
                <p className="text-gray-400 mb-12">Last updated: {lastUpdated}</p>
                <div className="space-y-12 text-gray-300 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
