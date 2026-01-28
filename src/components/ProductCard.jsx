import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="group cursor-pointer flex flex-col items-center">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-white mb-6 rounded-sm">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-normal group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-4 bottom-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.19, 1, 0.22, 1)">
                    <button className="w-full bg-black/90 backdrop-blur text-white py-3 text-xs uppercase font-bold tracking-[0.15em] hover:bg-brand-red transition-colors shadow-2xl">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Details */}
            <div className="text-center space-y-1.5 w-full px-2">
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">{product.brand}</p>
                <h3 className="text-base font-medium text-gray-900 group-hover:text-brand-red transition-colors font-serif tracking-wide">
                    {product.name}
                </h3>
                <p className="text-sm font-bold text-gray-900 mt-1">{product.price}</p>
            </div>
        </div>
    );
}
