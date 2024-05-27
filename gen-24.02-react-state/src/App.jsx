import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import ProductCard from './ProductCard'
import Footer from './Footer'

import './App.css'

const colors = {
  black: "bg-[#111111]",
  orange : "bg-[#c46210]",
};

const sizes = {
  s: 'S',
  m: 'M',
  l: 'L',
  xl: 'XL',
  xxl: 'XXL',
};

const products = [
  {
    id: 1,
    name: 'EcoKnit™ Seamed Sweatshirt',
    image: 'https://unitedbyblue.com/cdn/shop/products/204-036-11425_WMNS_BISON_ULTRALIGHT_brickred_ccvvv6307.jpg?v=1679003851',
    thumbnail1 : 'https://unitedbyblue.com/cdn/shop/products/204-036-02623_WMNS_BISON_ULTRALIGHT_black6302.jpg?v=1679003851&width=1946',
    thumbnail2 : 'https://unitedbyblue.com/cdn/shop/products/204-036-03123_WMNS_BISON_ULTRALIGHT_boulder_Grey6295.jpg?v=1679003783&width=1946',
    originalPrice: 88.00,
    discountedPrice: 62.00,
    quantity: 'SALE',
    color1: 'orange',
    color2: 'black',
    link: 'https://unitedbyblue.com/products/mens-bison-ultralight-vest?variant=39541581512776'
  }
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="p-8">
        <div className="">
          {products.map(product => (
            <ProductCard key={product.id} product={product} colors={colors} sizes={sizes}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App
