import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="group cursor-pointer flex flex-col items-center">
            {/* Image Container */}
            <div className="relative w-full aspect-square overflow-hidden bg-gray-50 mb-4 rounded-sm">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />

                {/* Quick Add Overlay (Optional, but adds premium feel) */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-brand-red text-white py-2 text-sm uppercase font-bold tracking-wider hover:bg-black transition-colors shadow-lg">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Details */}
            <div className="text-center space-y-1">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-brand-red transition-colors font-serif">
                    {product.name}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{product.brand}</p>
                <p className="text-sm font-bold text-gray-900 mt-1">{product.price}</p>
            </div>
        </div>
    );
}
