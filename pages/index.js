import React from 'react'
import { client } from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = ({products, bannerData}) => {

  // const getApi = async () => {}
  // const url = 'https://api.mercadolibre.com/sites/MLB/search?q=informatica'

  // const get = fetch(url).then((res) => res.json()).then((res) => res.results)
  // console.log( await get);

  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className='products-heading'>
      <h2>Best Seller Products</h2>
      <p>Speaker of any variations</p>
    </div>

    <div className='products-container'>
      {products?.map((i) => <Product key={i._id} product={i}/>)}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)
  return {
    props: {products, bannerData}
  }
}

export default Home