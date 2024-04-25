import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToHeart } from '../../pages/Cart/CartSlice.js'; // Import addToHeart action creator
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Order from '../../Components/OrderHistory/Order.jsx';
import Footer from '../../Components/footer/Footer.jsx';
import './Order.css';

const MyOrderHistory = ({ likedItems }) => {
  const [showOrderOverlay, setShowOrderOverlay] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const dispatch = useDispatch(); // Using useDispatch hook to get dispatch function
  
  const toggleOrderOverlay = () => {
    setShowOrderOverlay(!showOrderOverlay);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Updated function to dispatch addToHeart action
  const handleAddToLikedItems = (item) => {
    dispatch(addToHeart(item)); // Dispatch addToHeart action with the item
  };

  return (
    <div>
      <NavBar />
      <div className='history'>
        {isSmallScreen ? (
          <>
            {showOrderOverlay && (
              <div className="overlay" onClick={toggleOrderOverlay}>
                <div className="order-overlay">
                  <Order />
                </div>
              </div>
            )}
            <button className="hamburger-menu" onClick={toggleOrderOverlay}>
              ☰
            </button>
          </>
        ) : (
          <Order />
        )}

        <div className='histories'>
          <div className='profileOne'>
            <p>orders</p>
            <div>
              <div className='profileUp'>
                <p>In progress/Delivered</p>
                <p>Declined/Returned</p>
              </div>
            </div>
          </div>
          {/* Liked product */}
          {likedItems && likedItems.map((item, index) => (
            <div className='historyRight' key={index}>
              <div>
                <img src={item.imgSrc} alt="" />
              </div>
              <div className='orderHistories'>
                <div className='historyInner'>
                  <span>{item.name}</span>
                  <span>order 24333330</span>
                  <span>Delivered</span>
                  <span>{currentDate}</span>
                </div>
                <p onClick={() => handleAddToLikedItems(item)}>Add to Liked</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyOrderHistory;
