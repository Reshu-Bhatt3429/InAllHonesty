import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col w-full font-sans">
            {/* Announcement Bar */}
            <div className="bg-brand-red text-white text-xs py-2 px-4 text-center tracking-widest uppercase font-medium">
                Free Shipping on all orders above Rs. 999
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Logo */}
                    <div className="flex-1 lg:flex-none text-center lg:text-left">
                        <a href="/" className="flex items-center justify-center lg:justify-start gap-3">
                            <img src={logo} alt="In all honesty" className="h-16 w-auto object-contain" />
                            <span className="hidden xl:block text-2xl font-serif text-brand-red tracking-tight font-bold">In all honesty</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 uppercase text-sm font-semibold tracking-wide text-gray-800">
                        {['Home', 'Shop All', 'EDT', 'Perfume oils', 'Gift Sets', 'About Us'].map((item) => (
                            <a key={item} href="#" className="hover:text-brand-red transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-4 lg:gap-6 text-gray-700">
                        <button className="hover:text-brand-red transition-colors"><Search className="w-5 h-5" /></button>
                        <button className="hidden lg:block hover:text-brand-red transition-colors"><User className="w-5 h-5" /></button>
                        <button className="hover:text-brand-red transition-colors"><Heart className="w-5 h-5" /></button>
                        <div className="relative cursor-pointer hover:text-brand-red transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Mock */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white p-6 lg:hidden animate-in slide-in-from-left duration-300">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-bold text-brand-red">Menu</span>
                        <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6" /></button>
                    </div>
                    <nav className="flex flex-col gap-4 text-lg font-medium text-gray-800">
                        {['Home', 'Shop All', 'EDT', 'Perfume oils', 'Gift Sets', 'About Us'].map((item) => (
                            <a key={item} href="#" className="border-b pb-2">{item}</a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
