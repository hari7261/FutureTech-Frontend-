// src/components/NavHeader.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                    FutureTech
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                    <a href="#insights" className="text-gray-300 hover:text-white transition-colors">Insights</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 rounded-lg shadow-lg">
                    <div className="flex flex-col p-4">
                        <a href="#features" className="block py-2 text-gray-300 hover:text-white">Features</a>
                        <a href="#insights" className="block py-2 text-gray-300 hover:text-white">Insights</a>
                        <a href="#pricing" className="block py-2 text-gray-300 hover:text-white">Pricing</a>
                        <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavHeader;
