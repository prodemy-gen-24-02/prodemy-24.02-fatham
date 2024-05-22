import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'EcoKnit™ Seamed Sweatshirt',
    image: 'https://cdn.shopify.com/s/files/1/0287/3670/products/201360_FoxGlove00001_1.jpg?v=1675193507&width=533',
    image2: 'https://unitedbyblue.com/cdn/shop/products/201360_stoneblue00001.jpg?v=1675193507',
    originalPrice: 88.00,
    discountedPrice: 62.00,
    quantity: 'SALE',
    link: 'https://unitedbyblue.com/products/mens-bison-ultralight-vest?variant=39541581512776'
  },
  {
    id: 2,
    name: 'Bison Ultralight Hooded Vest',
    image: 'https://unitedbyblue.com/cdn/shop/products/WMNSBISONULTRALIGHTHOODEDVEST_NIGHTSKY_204-054-25024_0379.jpg?v=1676322146&width=1946',
    image2: 'https://unitedbyblue.com/cdn/shop/products/WMNSBISONULTRALIGHTHOODEDVEST_FORESTFLOOR_204-054-34324_0065.jpg?v=1676322146&width=1946',
    originalPrice: 120.00,
    discountedPrice: 90.00,
    quantity: 'Only 2 Left',
    link: 'https://unitedbyblue.com/products/mens-bison-ultralight-vest?variant=39541581512776'
  },
  {
    id: 3,
    name: 'Bison Ultralight Jacket',
    image: 'https://unitedbyblue.com/cdn/shop/products/104-067-35125_smokyochre_9060.jpg?v=1675261754',
    image2: 'https://unitedbyblue.com/cdn/shop/products/104-067-02625_black_9071.jpg?v=1675261754&width=1946',
    originalPrice: 220.00,
    discountedPrice: 154.00,
    quantity: 'Selling Fast',
    link: 'https://unitedbyblue.com/products/mens-bison-ultralight-vest?variant=39541581512776'
  },
  {
    id: 4,
    name: 'Bison Ultralight Vest',
    image: 'https://unitedbyblue.com/cdn/shop/products/MENSULTRALIGHTVESTFORESTFLOOR104-033-34325_8110.jpg?v=1675195436',
    image2: 'https://unitedbyblue.com/cdn/shop/products/MENSULTRALIGHTVESTNIGHTSKY104-033-25025_9134.jpg?v=1678667755&width=1946',
    originalPrice: 148.00,
    discountedPrice: 104.00,
    quantity: 'Selling Fast',
    link: 'https://unitedbyblue.com/products/mens-bison-ultralight-vest?variant=39541581512776'
  }
];

const Products = () => {
  return (
    <div className='mt-8 mb-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <a href='https://unitedbyblue.com/collections/womens' target='_blank'>
        <button className='btnView'><b>VIEW ALL</b></button>
      </a>
    </div>
  )
}

export default Products;