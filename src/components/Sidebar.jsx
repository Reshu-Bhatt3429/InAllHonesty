import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({ title, isOpenDefault = false, children }) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <div className="border-b border-gray-100 py-6">
            <button
                className="flex items-center justify-between w-full text-left mb-2 group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-sm font-bold uppercase tracking-wide text-gray-900 group-hover:text-brand-red transition-colors">{title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
            </button>

            {isOpen && (
                <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0 pr-0 lg:pr-8">
            <div className="bg-gray-50 p-4 mb-6 lg:hidden rounded flex justify-between items-center">
                <span className="font-bold">Filters</span>
                <ChevronDown className="w-4 h-4" />
            </div>

            <div className="hidden lg:block">
                <FilterSection title="Availability" isOpenDefault={true}>
                    <label className="flex items-center gap-3 cursor-pointer hover:text-brand-red">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red" />
                        <span className="text-gray-600 text-sm">In stock (8)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:text-brand-red">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red" disabled />
                        <span className="text-gray-400 text-sm">Out of stock (0)</span>
                    </label>
                </FilterSection>

                <FilterSection title="Price">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>From</span>
                        <input type="number" className="w-20 p-1 border rounded" placeholder="Rs." />
                        <span>To</span>
                        <input type="number" className="w-20 p-1 border rounded" placeholder="Rs." />
                    </div>
                </FilterSection>

                <FilterSection title="Product type" isOpenDefault={true}>
                    {['EDT', 'Perfume oils', 'Gift Sets'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer hover:text-brand-red">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red" />
                            <span className="text-gray-600 text-sm">{type}</span>
                        </label>
                    ))}
                </FilterSection>
            </div>
        </aside>
    );
}
