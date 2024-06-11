import {products as data} from '../data/Product';
import {colors as colors} from '../data/Product';
import ProductCard from './ProductCard';


const ProductList = () => {
    return (
      <div className='mt-8 mb-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map(product => (
            <ProductCard key={product.id} product={product} colors={colors} />
          ))}
        </div>
        <a href='https://unitedbyblue.com/collections/womens' target='_blank'>
          <button className='btnView'><b>VIEW ALL</b></button>
        </a>
      </div>
    )
  }
  
  export default ProductList;