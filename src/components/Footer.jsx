import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-brand-red text-white pt-16 pb-8 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg w-fit">
                        <img src={logo} alt="Logo" className="h-12 w-auto brightness-0 invert" />
                        {/* Inverted logo/white filter via css or just using the image if it works on red */}
                    </div>
                    <p className="opacity-90 leading-relaxed">
                        In all honesty promises premium fragrances that speak to your soul. Crafted with care and passion.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Facebook className="w-5 h-5 cursor-pointer hover:opacity-75" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:opacity-75" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:opacity-75" />
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
                    <ul className="flex flex-col gap-3 opacity-90">
                        <li><a href="#" className="hover:underline">Search</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Track Your Order</a></li>
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="font-bold text-lg mb-6 tracking-wide">Policies</h3>
                    <ul className="flex flex-col gap-3 opacity-90">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Refund Policy</a></li>
                        <li><a href="#" className="hover:underline">Shipping Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-bold text-lg mb-6 tracking-wide">Stay Connected</h3>
                    <p className="mb-4 opacity-90">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 bg-white text-black text-sm outline-none focus:ring-2 focus:ring-black"
                        />
                        <button className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-900 transition-colors uppercase tracking-wider text-xs">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/20 text-center opacity-75 text-xs">
                © {new Date().getFullYear()} In all honesty. All rights reserved.
            </div>
        </footer>
    );
}
