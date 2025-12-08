import React from 'react';
import Hero from '../components/Hero';
import ModelShowcase from '../components/ModelShowcase';
import BrandStory from '../components/BrandStory';

export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            <Hero />
            <ModelShowcase />
            <BrandStory />
        </div>
    );
}
