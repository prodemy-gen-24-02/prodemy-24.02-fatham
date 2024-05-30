import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr"
import ProductDetail from "../component/ProductDetail"
// import { colors, products, sizes } from "../data/Product"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { BeatLoader } from "react-spinners"
import ProductListSWRcopy from '../component/ProductListSWRcopy';


const Detail = () => {

    // Fetcher function
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { id } = useParams();

    // Fetch data using SWR
    const { data: colors, error: colorsError, isLoading: isLoadingColors } = useSWR("http://localhost:3000/colors", fetcher);
    const { data: sizes, error: sizesError, isLoading: isLoadingSizes } = useSWR("http://localhost:3000/sizes", fetcher);
    const { data: products, error: productsError, isLoading: isLoadingProducts } = useSWR("http://localhost:3000/products", fetcher);

    // Handle errors
    if (colorsError || sizesError || productsError) {
        return alert(JSON.stringify(colorsError || sizesError || productsError));
    }

    // Handle loading state
    if (isLoadingProducts || isLoadingColors || isLoadingSizes) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <BeatLoader color="#16537e" />
            </div>
        );
    }

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
            <h2 className="mt-4 text-left text-3xl"><b>Related Product</b></h2>
            <ProductListSWRcopy />
            <Footer />
        </div>
    );
};

export default Detail