import { useState } from 'react'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Products from './Product';
import Summary from './Summary';



function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Summary />
        <h2 className='text-left mt-20 mb-5 text-3xl'><b>Women's Apparel Sale</b></h2>
        <Products />
        <h2 className='text-left mt-20 mb-5 text-3xl'><b>Top Selling Men's Apparel</b></h2>
        <Products />    
      </main>
      <Footer />
    </div>
  )
}

export default App
