import React, { useState, useEffect } from 'react';

const heroImages = [
    '/hero_3.webp',
    '/hero_1.webp',
    '/hero_2.webp',
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Preload images for smoother transition
    useEffect(() => {
        heroImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden mb-12 bg-gray-100 group">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Hero ${index + 1}`}
                        loading="eager"
                        className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-linear ${index === currentIndex ? 'scale-110' : 'scale-100'
                            }`}
                    />
                </div>
            ))}

            {/* Overlay Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white bg-black/20">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight drop-shadow-lg opacity-0 animate-fade-in-up" key={currentIndex}>
                    Eau De Toilette
                </h1>
                <p className="text-sm md:text-base uppercase tracking-[0.3em] font-medium drop-shadow-md opacity-90">
                    Collection
                </p>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

