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

export default function Sidebar({ filters, setFilters }) {

    const handleTypeChange = (type) => {
        const newTypes = filters.types.includes(type)
            ? filters.types.filter(t => t !== type)
            : [...filters.types, type];
        setFilters({ ...filters, types: newTypes });
    };

    const handlePriceChange = (e, field) => {
        setFilters({ ...filters, [field]: e.target.value });
    };

    const handleStockChange = () => {
        setFilters({ ...filters, inStock: !filters.inStock });
    };

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 pr-0 lg:pr-8">
            <div className="bg-gray-50 p-4 mb-6 lg:hidden rounded flex justify-between items-center">
                <span className="font-bold">Filters</span>
                <ChevronDown className="w-4 h-4" />
            </div>

            <div className="hidden lg:block">
                <FilterSection title="Availability" isOpenDefault={true}>
                    <label className="flex items-center gap-3 cursor-pointer hover:text-brand-red">
                        <input
                            type="checkbox"
                            checked={filters.inStock}
                            onChange={handleStockChange}
                            className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                        />
                        <span className="text-gray-600 text-sm">In stock</span>
                    </label>
                </FilterSection>

                <FilterSection title="Price">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>From</span>
                        <input
                            type="number"
                            value={filters.minPrice}
                            onChange={(e) => handlePriceChange(e, 'minPrice')}
                            className="w-20 p-1 border rounded"
                            placeholder="Rs."
                        />
                        <span>To</span>
                        <input
                            type="number"
                            value={filters.maxPrice}
                            onChange={(e) => handlePriceChange(e, 'maxPrice')}
                            className="w-20 p-1 border rounded"
                            placeholder="Rs."
                        />
                    </div>
                </FilterSection>

                <FilterSection title="Product type" isOpenDefault={true}>
                    {['EDT', 'Perfume oils', 'Gift Sets', 'DP'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer hover:text-brand-red">
                            <input
                                type="checkbox"
                                checked={filters.types.includes(type)}
                                onChange={() => handleTypeChange(type)}
                                className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                            />
                            <span className="text-gray-600 text-sm">{type}</span>
                        </label>
                    ))}
                </FilterSection>
            </div>
        </aside>
    );
}
