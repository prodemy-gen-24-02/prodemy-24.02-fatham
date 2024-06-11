import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="absolute bg-gray-800 text-white py-6 inset-x-0 bottom-[-10] mt-[150px]">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p>&copy; 2024 United By Blue. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
