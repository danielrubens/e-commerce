import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import product from '../sanity_ecommerce/schemas/product';

const FooterBanner = ({footerBanner: {discount ,largeText1, largeText2, saleTime, 
    smallText, midText, desc, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
        <div className='banner-desc'>
            <div className='left'>
                <p>{discount}</p>
                <h3>{largeText1}</h3>
                <h3>{largeText2}</h3>
                <h3>{saleTime}</h3>
            </div>
            <div className='right'>
                <p>{smallText}</p>
                <h3>{midText}</h3>
                <p>{desc}</p>
                <Link href={`/product/${product}`}>
                    <button type="button">{buttonText}</button>
                </Link>
            </div>
            <img
            src={urlFor(image)}
            className='footer-banner-image'
            ></img>
        </div>
    </div>
  )
}

export default FooterBanner