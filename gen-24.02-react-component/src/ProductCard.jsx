import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [currentImage, setCurrentImage] = useState(product.image);

    const changePhoto = (newUrl) => {
        setCurrentImage(newUrl);
    };

    return (
        <div className='border p-2 rounded shadow-md w-full max-w-sm mx-auto hover:scale-105'>
            <div className='relative'>
                <img src={currentImage} alt={product.name} className='w-full h-64 object-cover' />
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <button className='absolute rounded-full bg-black text-white h-7 w-20 text-xs bottom-0 left-0 ml-3 mb-3'>{product.quantity}</button>
                </a>
            </div>
            <h3 className='mt-4 text-lg font-bold'>{product.name}</h3>
            <h4 className='mt-2'>
                <span className='line-through text-gray-500'>${product.originalPrice}</span>
                <span className='ml-2 text-red-600'>${product.discountedPrice}</span>
            </h4>
            <div className='flex'>
                <button className='ml-2 mt-2 bg-clip-border p-3 bg-sky-400 hover:outline' onClick={() => changePhoto(product.image2)}></button>
                <button className='ml-2 mt-2 bg-clip-border p-3 bg-red-200 hover:outline' onClick={() => changePhoto(product.image)}></button>
            </div>
        </div>
    );
};

export default ProductCard;
