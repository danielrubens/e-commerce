import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components';
const Home = () => {
  return (
    <>
    HeroBanner
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speaker of any variations</p>
    </div>

    <div className='products-container'>
      {['Product1', 'Product2'].map((i) => i)}
    </div>
    Footer
    </>
    
  )
}

export default Home