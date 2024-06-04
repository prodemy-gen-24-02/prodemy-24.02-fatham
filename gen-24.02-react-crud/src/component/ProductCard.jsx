import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, colors }) => {
    const [currentImage, setCurrentImage] = useState(product.image);

    const changePhoto = (newUrl) => {
        setCurrentImage(newUrl);
    };

    return (
        <div className='border p-2 rounded shadow-md w-full max-w-sm mx-auto hover:scale-105'>
            <div className='relative'>
                <Link to={`/detail/${product.id}`}>
                    <img src={currentImage} alt={product.name} className='w-full h-64 object-cover' />
                </Link>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <button className='absolute rounded-full bg-black text-white h-7 w-20 text-xs bottom-0 left-0 ml-3 mb-3'>{product.quantity}</button>
                </a>
            </div>
            <h3 className='mt-4 text-lg font-bold text-left indent-2'>{product.name}</h3>
            <h4 className='mt-2 text-left indent-2'>
                <span className='line-through text-gray-400'>${product.originalPrice}</span>
                <span className='ml-2 text-black'>${product.discountedPrice}</span>
            </h4>
            <div className='flex'>
                <button className={`ml-2 mt-2 bg-clip-border p-3 hover:outline ${colors[product.color1]}`} onMouseMove={() => changePhoto(product.image2)}></button>
                <button className={`ml-2 mt-2 bg-clip-border p-3 hover:outline ${colors[product.color2]}`} onMouseMove={() => changePhoto(product.image)}></button>
            </div>
        </div>
    );
};

export default ProductCard;
