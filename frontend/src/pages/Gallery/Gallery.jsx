import React, { useState } from 'react';
import './Gallery.css';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Button from '../../Components/Button/Button.jsx';
import TopDiscount from '../../Components/TopDiscounts/TopDiscount.jsx';

import ChickenItems from '../../Components/Chicken/ChickenItems.jsx';
import ChickenWhole from '../../Components/ChickenWhole/ChickenWhole.jsx';
import Footer from '../../Components/footer/Footer.jsx';
import Fish from '../../Components/Fish/Fish.jsx';
import Wholesale from '../../Components/Wholesale/Wholesale.jsx';
import Chicken from '../../Components/Chicken/Chicken.jsx';


const Gallery = () => {

  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className='gallery'>
      <NavBar />
      <div className='galleryWrapper'>
        <form action='' className='galleryForm'>
          <input type='text' placeholder='Search Kaydas coldroom' />
        <div className='galleryBtn'><Button >Search</Button></div>  
        </form>
      </div>
      <TopDiscount />
      <Chicken addToCart={addToCart} /> 
      <Fish addToCart={addToCart} /> 
      <ChickenItems addToCart={addToCart} /> 
      <ChickenWhole addToCart={addToCart} /> 
      <Wholesale addToCart={addToCart} /> 
      <Footer />
    </div>
  );
};

export default Gallery;
