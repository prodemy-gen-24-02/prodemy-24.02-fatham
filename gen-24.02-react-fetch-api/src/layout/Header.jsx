import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-50">
            <h3 className='bg-sky-950 text-white text-xs py-2 italic'>Take 25% off the Mother's Day Shop with code: MD2024 | free exchanges and returns</h3>
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-semibold">United By Blue</Link>

                <nav className="list-none hidden md:flex space-x-6 item-center pr-10 text-base cursor-pointer">
                    <li><a href="#" className="px-4 py-6 bg-white hover:bg-gray-200 transition duration-300">BAGS</a></li>
                    <li><a href="#" className="px-4 py-6 bg-white hover:bg-gray-200 transition duration-300">ACCESSORIES</a></li>
                    <li><a href="#" className="px-4 py-6 bg-white hover:bg-gray-200 transition duration-300">HOUSEHOLD</a></li>
                    <li><a href="#" className="px-4 py-6 bg-white hover:bg-gray-200 transition duration-300">APPAREL</a></li>
                    <li><a href="#" className="px-4 py-6 bg-white hover:bg-gray-200 transition duration-300">MISSION</a></li>
                    <li><a href="#" className="px-4 py-6 bg-white hover:bg-gray-200 transition duration-300">SALE</a></li>
                </nav>

                <div className="hidden md:flex flex space-x-6">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 rounded-lg px-3 py-1"
                    />
                    <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Cart</a>
                </div>

                {/* Burger Menu */}
                <button className="block md:hidden py-2 px-4 text-right rounded focus:outline-none hover:bg-gray-200 group">
                    <div className="w-5 h-1 bg-gray-600 mb-1"></div>
                    <div className="w-5 h-1 bg-gray-600 mb-1"></div>
                    <div className="w-5 h-1 bg-gray-600"></div>
                    <div
                        className="absolute top-0 -right-full h-screen w-full bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                        <ul>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full mt-12">BAGS</li>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full">ACCESSORIES</li>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full">HOUSEHOLD</li>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full">APPAREL</li>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full">MISSION</li>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full">SALE</li>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full">PERSON</li>
                            <li className="hover::bg-gray-200 py-4 px-6 w-full">SHOPPING CART</li>
                        </ul>

                    </div>
                </button>

            </div>
        </header>
    );
};

export default Header;
