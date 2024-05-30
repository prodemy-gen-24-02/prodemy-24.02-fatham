// import { products as data } from '../data/Product';
// import { colors as colors } from '../data/Product';
import ProductCard from './ProductCard';
import useSWR from "swr";
import { BeatLoader } from "react-spinners";



const ProductList = () => {

  // Fetcher function
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // Fetch data using SWR
  const { data: products, error: productsError, isLoading: isLoadingProducts } = useSWR("http://localhost:3000/products", fetcher);
  const { data: colors, error: colorsError, isLoading: isLoadingColors } = useSWR("http://localhost:3000/colors", fetcher);

  // Handle errors
  if (productsError || colorsError) {
    return alert(JSON.stringify(productsError || colorsError));
  }

  // Handle loading state
  if (isLoadingProducts || isLoadingColors) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#16537e" />
      </div>
    );
  }

  return (
    <div className='mt-8 mb-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} colors={colors} />
        ))}
      </div>
      <a href='https://unitedbyblue.com/collections/womens' target='_blank'>
        <button className='btnView'><b>VIEW ALL</b></button>
      </a>
    </div>
  );
}

export default ProductList;