import sedanImg from '../assets/car_sedan_1765140743492.png';
import suvImg from '../assets/car_suv_1765140756740.png';
import sportImg from '../assets/car_sports_1765140771577.png';
import electricImg from '../assets/car_electric_1765140786900.png';

import sedanInt from '../assets/interior_sedan_1765142745183.png';
import suvInt from '../assets/interior_suv_1765142759216.png';
import sportInt from '../assets/interior_sport_1765142773813.png';
import electricInt from '../assets/interior_electric_1765142787304.png';

export const cars = [
    {
        id: 'sedan',
        name: 'Aether S',
        category: 'Sedan',
        price: 85000,
        priceStr: '$85,000',
        image: sedanImg,
        interior: sedanInt,
        accent: 'from-blue-900 to-black',
        tagline: 'Executive Excellence',
        description: 'The Aether S redefines the executive sedan with unmatched comfort, cutting-edge technology, and a silent yet powerful electric drivetrain.',
        specs: {
            range: '450 miles',
            acceleration: '3.2s',
            topSpeed: '155 mph',
            power: '520 hp'
        },
        features: ['Autopilot Level 3', 'Massage Seats', '360° Surround Sound', 'Augmented Reality HUD']
    },
    {
        id: 'suv',
        name: 'Aether X',
        category: 'SUV',
        price: 95000,
        priceStr: '$95,000',
        image: suvImg,
        interior: suvInt,
        accent: 'from-gray-900 to-black',
        tagline: 'Dominance & Luxury',
        description: 'Command the road with the Aether X. A luxury SUV that offers spacious elegance without compromising on performance or off-road capability.',
        specs: {
            range: '400 miles',
            acceleration: '3.8s',
            topSpeed: '150 mph',
            power: '600 hp'
        },
        features: ['All-Wheel Drive', 'Panoramic Glass Roof', 'Adaptive Air Suspension', '7-Seat Configuration']
    },
    {
        id: 'sport',
        name: 'Aether GT',
        category: 'Sport',
        price: 120000,
        priceStr: '$120,000',
        image: sportImg,
        interior: sportInt,
        accent: 'from-red-900 to-black',
        tagline: 'Pure Adrenaline',
        description: 'Born for the track, unleashed on the street. The Aether GT delivers visceral performance with a design that cuts through the air.',
        specs: {
            range: '380 miles',
            acceleration: '1.9s',
            topSpeed: '200 mph',
            power: '1020 hp'
        },
        features: ['Carbon Ceramic Brakes', 'Active Aerodynamics', 'Track Mode', 'Launch Control']
    },
    {
        id: 'electric',
        name: 'Aether E',
        category: 'Electric',
        price: 75000,
        priceStr: '$75,000',
        image: electricImg,
        interior: electricInt,
        accent: 'from-cyan-900 to-black',
        tagline: 'The Future, Today',
        description: 'Efficiency meets style. The Aether E is the perfect daily driver for the modern era, featuring smart connectivity and a sustainable design.',
        specs: {
            range: '500 miles',
            acceleration: '4.0s',
            topSpeed: '140 mph',
            power: '450 hp'
        },
        features: ['Solar Roof', 'Bi-directional Charging', 'Vegan Interior', 'AI Assistant']
    }
];
