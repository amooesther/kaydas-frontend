import React, { useState, useEffect } from 'react';
import './TopDiscount.css';
import topDiscountImg4 from '../../Assets/topDiscountImg4.png';
import { fetchTopDiscounts } from '../../ApiRequests/TopDiscounts';
import { Link } from 'react-router-dom';

const TopDiscount = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getDiscounts = async () => {
      try {
        const response = await fetchTopDiscounts();
        if (response.error) {
          throw new Error(response.error);
        }
        
        const discounts = response.discount || [];
        setItems(discounts);
        console.log('These are the discounts:', discounts);
      } catch (error) {
        console.error('Error fetching discounts:', error);
      }
    };
    getDiscounts();
  }, []);

  return (
    <div>
      <div className='discountTop'>
        <h2>Top Discounts</h2>
        <div className='discountTopOne'>
          <p>Free Delivery on orders above N300,000</p>
     <Link to='/gallery'>     <button>Shop Now</button></Link>
        </div>
      </div>
      <div className='discounts'>
        {items.map((item, index) => (
          <div className='discountOne' key={index}>
            <div className='discountTwo'>
              <img src={item.imgrc} alt="" />
            </div>
            <div className='discountThree'>
              <div className=''>
                <span>{item.name}</span>
                <span>  {item.oldPrice}</span>
                <span>  {item.currentPrice}</span>
              </div>
              <div className='topDiscountFour'>
                <img src={topDiscountImg4} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDiscount;
