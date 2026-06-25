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
        price: 4100000,
        priceStr: 'EGP 4,100,000',
        image: sedanImg,
        interior: sedanInt,
        accent: 'from-blue-900 to-black',
        tagline: 'Executive Excellence',
        description: 'The Aether S redefines the luxury sedan with unmatched comfort, cutting-edge technology, and a silent, high-performance electric powertrain.',
        specs: {
            range: '720 km',
            acceleration: '3.2s',
            topSpeed: '250 km/h',
            power: '520 hp'
        },
        features: ['Autopilot Level 3', 'Massage Seats', '3D Surround Sound', 'Augmented Reality HUD'],
        colors: [
            { name: 'Royal Blue', hex: '#1e3a8a', price: 0 },
            { name: 'Obsidian Black', hex: '#000000', price: 50000 },
            { name: 'Metallic Silver', hex: '#6b7280', price: 35000 }
        ],
        wheels: [
            { name: '19" Aero Sport Wheels', price: 0 },
            { name: '20" Multi-spoke Premium Wheels', price: 60000 }
        ],
        interiors: [
            { name: 'Obsidian Black Leather', hex: '#111827', price: 0 },
            { name: 'Bright White Leather', hex: '#f9fafb', price: 90000 }
        ]
    },
    {
        id: 'suv',
        name: 'Aether X',
        category: 'SUV',
        price: 4600000,
        priceStr: 'EGP 4,600,000',
        image: suvImg,
        interior: suvInt,
        accent: 'from-gray-900 to-black',
        tagline: 'Dominance & Luxury',
        description: 'Command the road with the Aether X. A luxury SUV offering spacious elegance without compromising on performance or off-road capability.',
        specs: {
            range: '640 km',
            acceleration: '3.8s',
            topSpeed: '240 km/h',
            power: '600 hp'
        },
        features: ['All-Wheel Drive', 'Panoramic Glass Roof', 'Adaptive Air Suspension', '7-Seat Premium Layout'],
        colors: [
            { name: 'Stone Grey', hex: '#374151', price: 0 },
            { name: 'Obsidian Black', hex: '#000000', price: 50000 },
            { name: 'Pearl White', hex: '#ffffff', price: 35000 }
        ],
        wheels: [
            { name: '20" Offroad Adventure Wheels', price: 0 },
            { name: '22" Turbine Prestige Wheels', price: 80000 }
        ],
        interiors: [
            { name: 'Classic Beige Leather', hex: '#f5f5dc', price: 0 },
            { name: 'Premium Black Leather', hex: '#111827', price: 40000 }
        ]
    },
    {
        id: 'sport',
        name: 'Aether GT',
        category: 'Sport',
        price: 5800000,
        priceStr: 'EGP 5,800,000',
        image: sportImg,
        interior: sportInt,
        accent: 'from-red-900 to-black',
        tagline: 'Visceral Performance',
        description: 'Born for the track, unleashed on the street. The Aether GT delivers extreme performance with active aerodynamics and lightweight engineering.',
        specs: {
            range: '610 km',
            acceleration: '1.9s',
            topSpeed: '320 km/h',
            power: '1020 hp'
        },
        features: ['Carbon Ceramic Brakes', 'Active Aerodynamics', 'Dedicated Track Mode', 'Launch Control'],
        colors: [
            { name: 'Racing Red', hex: '#991b1b', price: 0 },
            { name: 'Matte Carbon', hex: '#1f2937', price: 120000 },
            { name: 'Golden Sun Yellow', hex: '#eab308', price: 90000 }
        ],
        wheels: [
            { name: '21" Forged Track Wheels', price: 0 },
            { name: 'Ultralight Carbon Fiber Wheels', price: 150000 }
        ],
        interiors: [
            { name: 'Sport Alcantara Red/Black', hex: '#7f1d1d', price: 0 },
            { name: 'Black Leather with Contrast Stitching', hex: '#000000', price: 50000 }
        ]
    },
    {
        id: 'electric',
        name: 'Aether E',
        category: 'Electric',
        price: 3600000,
        priceStr: 'EGP 3,600,000',
        image: electricImg,
        interior: electricInt,
        accent: 'from-cyan-900 to-black',
        tagline: 'The Future, Today',
        description: 'Efficiency meets elegance. The Aether E is the perfect daily driver, combining advanced smart connectivity with sustainable materials.',
        specs: {
            range: '800 km',
            acceleration: '4.0s',
            topSpeed: '225 km/h',
            power: '450 hp'
        },
        features: ['Solar Panel Roof', 'Bi-directional Charging', '100% Vegan Interior', 'Integrated Smart AI Assistant'],
        colors: [
            { name: 'Electric Cyan', hex: '#0891b2', price: 0 },
            { name: 'Pearl White', hex: '#f3f4f6', price: 30000 },
            { name: 'Steel Grey', hex: '#4b5563', price: 25000 }
        ],
        wheels: [
            { name: '18" Eco-dynamic Wheels', price: 0 },
            { name: '19" Aero Plus Wheels', price: 40000 }
        ],
        interiors: [
            { name: 'Eco Light Grey Fabric', hex: '#d1d5db', price: 0 },
            { name: 'Modern Slate Blue Leather', hex: '#1e293b', price: 30000 }
        ]
    }
];
