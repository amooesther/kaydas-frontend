import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Order from '../../Components/OrderHistory/Order.jsx';
import './Profile.css';
import Footer from '../../Components/footer/Footer.jsx';

const Profile = () => {
  const [showOrders, setShowOrders] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleOrders = () => {
    setShowOrders(!showOrders);
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

  return (
    <div>
      <NavBar />
      {isSmallScreen ? (
        <div className='profile'>
          <button className="hamburger-menu" onClick={toggleOrders}>
            ☰
          </button>
          {showOrders && (
            <div className="overlay" onClick={toggleOrders}>
              <div className="order-overlay">
                <Order />
              </div>
            </div>
          )}
          <div>
            <div className='profileOne'>
              <p>orders</p>
              <div className='profileUp'>
                <p>In progress/Delivered</p>
                <p>Declined/Returned</p>
              </div>
            </div>
            <ul className='lists'>
              <li>Items</li>
              <li>Date Ordered</li>
              <li>Quantity</li>
              <li>Price</li>
              <li>Status</li>
            </ul>
            <h2>You haven't placed any orders yet</h2>
          </div>
        </div>
      ) : (
        <div className="profile">
          <Order />
          <div>
            <div className='profileOne'>
              <p>orders</p>
              <div className='profileUp'>
                <p>In progress/Delivered</p>
                <p>Declined/Returned</p>
              </div>
            </div>
            <ul className='lists'>
              <li>Items</li>
              <li>Date Ordered</li>
              <li>Quantity</li>
              <li>Price</li>
              <li>Status</li>
            </ul>
            <h2>You haven't placed any orders yet</h2>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Profile;
