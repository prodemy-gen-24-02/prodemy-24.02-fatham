import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const CartPage = () => {
    const { cart } = useContext(CartContext);

    const calculateTotalPrice = (cart) => {
        let totalPrice = 0;
        for (const product of cart) {
            totalPrice += product.originalPrice * product.quantity;
        }
        return totalPrice;
    };

    const calculateSubtotal = (product) => {
        return product.originalPrice * product.quantity;
    };
    
    const totalPrice = calculateTotalPrice(cart);

    console.log(cart);

    return (
        <div>
            <Header />
            <div className="container mx-auto mt-24 px-4 py-8">
                <h1 className="text-3xl font-semibold text-left">Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="">
                        <h2 className="mt-4 mb-4 text-left">Your Order</h2>
                        <table className="table-auto w-full border-collapse text-left">
                            <thead>
                                <tr>
                                    <th className="border-b-4 border-gray-800 px-4 py-2">Image</th>
                                    <th className="border-b-4 border-gray-800 px-4 py-2">Name</th>
                                    <th className="border-b-4 border-gray-800 px-4 py-2">Price</th>
                                    <th className="border-b-4 border-gray-800 px-4 py-2">Size</th>
                                    <th className="border-b-4 border-gray-800 px-4 py-2">Quantity</th>
                                    <th className="border-b-4 border-gray-800 px-4 py-2">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, index) => (
                                    <tr key={index} className="">
                                        <td className="border-b-2 border-gray-300 px-4 py-2">
                                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="border-b-2 border-gray-300 px-4 py-2">{product.name}</td>
                                        <td className="border-b-2 border-gray-300 px-4 py-2">${product.originalPrice}</td>
                                        <td className="border-b-2 border-gray-300 px-4 py-2">{product.selectedSize}</td>
                                        <td className="border-b-2 border-gray-300 px-4 py-2">{product.quantity}</td>
                                        <td className="border-b-2 border-gray-300 px-4 py-2">${calculateSubtotal(product).toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="5" className="text-left font-semibold px-4 py-2">Total</td>
                                    <td className="px-4 py-2 font-bold">${totalPrice.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='text-right'>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                            <span>Purchase</span>
                        </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
