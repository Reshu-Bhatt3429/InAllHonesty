import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

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
    const [isMobileOpen, setIsMobileOpen] = useState(false);

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
        <>
            {/* Mobile Toggle Button */}
            <div
                className="bg-gray-50 p-4 mb-6 lg:hidden rounded flex justify-between items-center cursor-pointer active:bg-gray-100 transition-colors"
                onClick={() => setIsMobileOpen(true)}
            >
                <span className="font-bold uppercase tracking-wide text-sm">Filters</span>
                <ChevronDown className="w-4 h-4" />
            </div>

            {/* Main Sidebar Content - Desktop (Inline) / Mobile (Fixed Modal) */}
            <aside className={`
        fixed inset-0 z-50 bg-white p-6 overflow-y-auto transition-transform duration-300 lg:transition-none
        lg:translate-x-0 lg:static lg:z-auto lg:w-64 lg:p-0 lg:overflow-visible lg:block lg:flex-shrink-0 lg:pr-8
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                {/* Mobile Close Button */}
                <div className="flex justify-between items-center mb-8 lg:hidden">
                    <span className="text-xl font-bold font-serif text-brand-red">Filters</span>
                    <button onClick={() => setIsMobileOpen(false)} className="p-2 -mr-2 text-gray-500">
                        <X className="w-6 h-6" />
                    </button>
                </div>

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

                {/* Mobile View Results Button */}
                <div className="mt-8 lg:hidden">
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="w-full bg-brand-red text-white py-3 font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors"
                    >
                        View Results
                    </button>
                </div>
            </aside>

            {/* Mobile Backdrop */}
            {isMobileOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />
            )}
        </>
    );
}
