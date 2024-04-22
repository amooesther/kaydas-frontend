import React, { useState } from 'react';
import './CustomerReviews.css';
import Button from '../Button/Button.jsx';
import Ratings from '../Ratings/Ratings.jsx';
import reviewImg1 from '../../Assets/reviewImg1.png'
import reviewImg2 from '../../Assets/reviewImg2.png'
const CustomerReviews = () => {
  

  return (
    <div className='customerWrapper'>
      <div className='reviewTop'>
        <div className='customer'>
          <h1>Customer Reviews</h1>
        </div>
      </div>

      <div className='overallRatings'>
        <div className='star'>
          <span>Overall Rating </span>
          <span><Ratings/></span>
           <span>23 reviews</span>
        </div>
        <div>
          <Button variant='secondary'>Write a Review</Button>
        </div>
      </div>
      <hr />
      <div className='reviews'>
        <div className='firstReview'>
          <div className='reviewName'>
            <p>Mary Portharcout</p>
            <Ratings/>
          </div>
          <div><img src={reviewImg1} alt="" /></div>
          <div className='reviewText'><p>Fantastic selection of frozen Proteins, 
            all delicious and convenient. The app interface 
            is user-friendly, making ordering a breeze. Quick
             delivery and excellent customer service. 
            A lifesaver for busy weeknights!</p>
            <span>19-03-2024</span>
            </div>
        </div>
        <div className='firstReview'>
          <div className='reviewName'>
            <p>Onome Portharcout</p>
            <Ratings/>
          </div>
          <div><img src={reviewImg2} alt="" /></div>
          <div className='reviewText'><p>Fantastic selection of frozen Proteins, 
            all delicious and convenient. The app interface 
            is user-friendly, making ordering a breeze. Quick
             delivery and excellent customer service. 
            A lifesaver for busy weeknights!</p>
            <span>19-03-2024</span>
            </div>
        </div>
      </div>
      <div className='aboutUS'>
        <h1>About us</h1>
     <div className='aboutOne'>
      <div className='about' >
        <h2>What we do</h2>
        <p>We specialize in distributing and retailing 
          premium-grade, nutritious, and hygienic poultry 
          products, fish, and seafood to a wide range of 
          establishments, including eateries, restaurants, hotels,
           supermarkets, and corporate organizations."</p>
      </div>
      <div className='about'>
        <h2>Our Mission</h2>
        <p>Our mission is to distribute and retail fresh and 
          well frozen quality nutritious poultry products, 
          fishes and seafood from reputable farms that use hygiene
           facility to our valued and esteemed customers in Nigeria.</p>
      </div>
      
     </div>
     <div className='aboutTwo'>
        <div className='about'>
          <h2>Our Vision</h2>
          <p>To become a household name and the go-to referral 
            point in the business of distributing and retailing frozen poultry 
            products, fishes, and seafood in Nigeria,.</p>
        </div>
        <div className='about'>
          <h2>What Sets Us Apart?</h2>
          <p>We guarantee fresh and frozen food with precise measurements 
            and timely delivery. </p>
        </div>
      </div>
      </div>
     
      
    </div>

    
  );
};

export default CustomerReviews;
