import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col w-full font-sans">
            {/* Announcement Bar */}
            <div className="bg-brand-red text-white text-[11px] py-2.5 px-4 text-center tracking-[0.2em] uppercase font-medium">
                Free Shipping on all orders above Rs. 999
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-5 flex items-center justify-between">

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="w-6 h-6 text-gray-800" />
                    </button>

                    {/* Logo */}
                    <div className="flex-1 lg:flex-none text-center lg:text-left">
                        <a href="/" className="flex items-center justify-center lg:justify-start gap-4">
                            <img src={logo} alt="In all honesty" className="h-14 w-auto object-contain" />
                            <span className="hidden xl:block text-2xl font-serif text-brand-red tracking-tight font-bold">In all honesty</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10 uppercase text-[13px] font-bold tracking-widest text-gray-800">
                        {['Home', 'Shop All', 'EDT', 'Perfume oils', 'Gift Sets', 'About Us'].map((item) => (
                            <a key={item} href="#" className="hover:text-brand-red transition-colors relative group py-2">
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-5 lg:gap-8 text-gray-800">
                        <button className="hover:text-brand-red transition-colors transform hover:scale-110 duration-200"><Search className="w-5 h-5" StrokeWidth={1.5} /></button>
                        <button className="hidden lg:block hover:text-brand-red transition-colors transform hover:scale-110 duration-200"><User className="w-5 h-5" StrokeWidth={1.5} /></button>
                        <button className="hover:text-brand-red transition-colors transform hover:scale-110 duration-200"><Heart className="w-5 h-5" StrokeWidth={1.5} /></button>
                        <div className="relative cursor-pointer hover:text-brand-red transition-colors transform hover:scale-110 duration-200">
                            <ShoppingBag className="w-5 h-5" StrokeWidth={1.5} />
                            <span className="absolute -top-1.5 -right-1.5 bg-brand-red text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Mock */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl p-6 lg:hidden animate-in slide-in-from-left duration-300">
                    <div className="flex justify-between items-center mb-12">
                        <span className="text-xl font-serif font-bold text-brand-red">Menu</span>
                        <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6" /></button>
                    </div>
                    <nav className="flex flex-col gap-6 text-xl font-medium text-gray-900">
                        {['Home', 'Shop All', 'EDT', 'Perfume oils', 'Gift Sets', 'About Us'].map((item) => (
                            <a key={item} href="#" className="border-b border-gray-100 pb-4 hover:text-brand-red transition-colors flex justify-between items-center group">
                                {item}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
