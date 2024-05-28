import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from "../component/ProductDetail"
import { colors, products, sizes } from "../data/Product"
import Header from "../layout/Header"
import Footer from "../layout/Footer"


const Detail = () => {

    const { id } = useParams();
    const product = products.find(product => product.id.toString() === id);

    return (
        <div className="Detail">
            <Header />
            <div>
                {product && (
                    <ProductDetail
                        key={product.id}
                        product={product}
                        colors={colors}
                        sizes={sizes}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Detail