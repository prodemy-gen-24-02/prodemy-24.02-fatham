import React, { useState } from 'react';
import star from './assets/star.png';

const ProductCard = ({ product, colors, sizes }) => {
    const [currentImage, setCurrentImage] = useState(product.image);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const changePhoto = (newUrl) => {
        setCurrentImage(newUrl);
    };

    const selectSize = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            setQuantity(value);
        }
    };

    return (
        <div className="container mx-auto mt-12 px-4 py-8">
            <p className='text-left'>Home/Men's Apparel/Bison Ultralight Jacket</p>
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-8 bg-white text-left">

                {/* Product Image */}
                <div className='items-center'>
                    <img src={currentImage} alt={product.name} className="w-full max-md scale-200" />

                    <div className='grid grid-cols-3 gap-4 mt-4'>
                        <img
                            className='opacity-50 hover:opacity-100 hover:scale-105'
                            src={product.image}
                            onClick={() => changePhoto(product.image)} />
                        <img
                            className='opacity-50 hover:opacity-100 hover:scale-105'
                            src={product.thumbnail1}
                            onClick={() => changePhoto(product.thumbnail1)} />
                        <img
                            className='opacity-50 hover:opacity-100 hover:scale-105'
                            src={product.thumbnail2}
                            onClick={() => changePhoto(product.thumbnail2)} />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h6>United By Blue</h6>
                    <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
                    <h4 class="flex items-center mb-4">
                        <span class="text-xl text-gray-400 line-through tracking-wide">${product.originalPrice}</span>
                        <span class="text-xl text-gray-900 tracking-wide indent-2">${product.discountedPrice}</span>
                    </h4>
                    <p class="text-gray-700 mb-4">4 interest-free installments, or from $13.90/mo with shopPay</p>
                    <a href="#" class="underline">Check your purchasing power</a>

                    <div className="flex items-center mt-4 mb-4">
                        <img src={star}></img><span>14 Reviews</span>
                    </div>

                    <div className="flex mt-4">
                        <button
                            className={`ml-2 mt-2 bg-clip-border p-3 hover:outline ${colors[product.color1]}`}
                            onClick={() => changePhoto(product.thumbnail1)}
                        ></button>
                        <button
                            className={`ml-2 mt-2 bg-clip-border p-3 hover:outline ${colors[product.color2]}`}
                            onClick={() => changePhoto(product.image)}
                        ></button>
                    </div>

                    <h4 className="mt-4">Size: {selectedSize}</h4>
                    <div className="grid grid-cols-1 mt-2 md:grid-cols-5 mb-4">
                        {Object.keys(sizes).map((sizeKey) => (
                            <button
                                key={sizeKey}
                                className={`bg-white m-2 px-6 py-1 rounded-2xl border border-black hover:outline focus:outline-none focus:bg-black focus:text-white`}
                                onClick={() => selectSize(sizes[sizeKey])}
                            >
                                {sizes[sizeKey]}
                            </button>
                        ))}
                    </div>

                    <h4>Quantity: </h4>

                    <div className="flex items-center mb-4">
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="py-2 px-3 border border-gray-300 rounded-md w-16 md:w-24 text-center focus:outline-cyan-300"
                        />
                        <span className="ml-3 text-red-600">Only 5 left!</span>
                    </div>

                    <button id="cart"
                        className="bg-black text-white py-3 w-full  hover:bg-gray-800 transition duration-300 mb-4"
                    ><span>Add to Cart</span>
                    </button>

                    <p className="text-gray-700 mb-4 font-semibold">Details</p>
                    <p className="text-gray-700 mb-4 text-justify">The Bison Zip-Up Jacket is a lightweight, weather-resistant layer fitted with a high collar, side pockets, and short length. Its exterior is crafted from 100% recycled polyester that keeps plastic waste out of landfills, while its interior is filled with our signature BisonShield™ insulation – a temperature-regulating material made with salvaged bison wool that we intercept from the waste stream. This responsibly-made piece is part of The United By Blue Impact Collection: an intentionally-designed capsule of sustainable goods at accessible price points – allowing us to reach more people and clean more trash than ever before. 1 product purchased = 1 pound of trash cleaned.</p>

                    <ul className="ml-4 list-disc text-gray-700 list-outside mb-4 text-justify">
                        <li>Shell: 100% recycled polyester</li>
                        <li>Insulation: 50% bison wool, 50% wool</li>
                        <li>Machine wash cold, line dry</li>
                        <li>Made responsibly in Vietnam</li>
                    </ul>

                    <a href="#" class="underline mb-4">Women Size Guide</a>

                    <p>SHARE</p>

                </div>

            </div>
        </div >
    );
};

export default ProductCard;
