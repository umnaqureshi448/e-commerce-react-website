import React from 'react'
import { getProducts } from '../data/Product';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {

  const products= getProducts ();
  return (
    <div className='page'>
    <div className="home-hero">
      <h1 className='home-title'>Welcome To ShopHub</h1>
      <p className='home-subtitle'>Discover Amazing Products At Reasonable Prices</p>

    </div>
    <div className="container">
      <h1 className="page-title">Our Products</h1>
      <div className="product-grid">
        {products.map((product)=>(
          <ProductCard product={product}  key={product.id}/>
        ))}
          
      </div>
    </div>
    </div>
  )
}

export default Home