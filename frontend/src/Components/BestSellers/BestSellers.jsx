import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './BestSellers.css';
import topDiscountImg4 from '../../Assets/topDiscountImg4.png';
import chickens from '../../Assets/chickens.png';
import Ratings from '../Ratings/Ratings';
import { fetchBestSeller } from '../../ApiRequests/BestSeller';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBestSeller();
        if (data && data.seller && Array.isArray(data.seller)) {
          setBestSellers(data.seller);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='wrap'>
      <div className="bestTop">
        <h2>Best Sellers</h2>
      <Link to='/gallery'>  <Button>Shop Now</Button></Link>
      </div>
      <div className='bestWrap'>
        {bestSellers.map((seller, index) => (
          <div key={index} className='bestImg'>
            <div className='image'>
              <div > <img src={seller.imgSrc} alt={seller.name} className='sellerImg' /></div>
            </div>
            <div className='imgDown'>
              <div className='downs'>
                <div>
                  <span>{seller.name}</span>
                  <span>{seller.currentPrice}</span>
                  <span>
                    <Ratings /> {seller.reviews} reviews
                  </span>
                </div>
                <div>
                  <img src={topDiscountImg4} alt='' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
