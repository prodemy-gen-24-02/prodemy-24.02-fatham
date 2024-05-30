import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProductList from '../component/ProductList';
import Summary from '../component/Summary';
import ProductListSWRcopy from '../component/ProductListSWRcopy';



function Home() {

  return (
    <div className="Home">
      <Header/>
      <main>
        <Summary />
        <h2 className='text-left mt-20 mb-5 text-3xl'><b>Women's Apparel Sale</b></h2>
        <ProductListSWRcopy />
        <h2 className='text-left mt-20 mb-5 text-3xl'><b>Top Selling Men's Apparel</b></h2>
        <ProductListSWRcopy />    
      </main>
      <Footer/>
    </div>
  )
}

export default Home
