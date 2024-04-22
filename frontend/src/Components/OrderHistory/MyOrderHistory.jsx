import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Order from '../../Components/OrderHistory/Order.jsx';
import fishTwo from '../../Assets/fishTwo.png';
import Footer from '../../Components/footer/Footer.jsx';
import './Order.css';

const MyOrderHistory = () => {
  const [showOrderOverlay, setShowOrderOverlay] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

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

  return (
    <div>
      <NavBar />
      <div className='history'>
        {isSmallScreen ? (
          <>
            {/* Show the Order component as an overlay on small screens */}
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
          // Display Order component by default on larger screens
          <Order />
        )}

        {/* Main content section */}
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
          {/* Sample order histories */}
          <div className='historyRight'>
            <div><img src={fishTwo} alt="" /></div>
            <div className='orderHistories'>
              <div className='historyInner'>
                <span>Hake Fish</span>
                <span>order 24333330</span>
                <span>Delivered</span>
                <span>on 4th march</span>
              </div>
              <p>See Details</p>
            </div>
          </div>
          <div className='historyRight'>
            <div><img src={fishTwo} alt="" /></div>
            <div className='orderHistories'>
              <div className='historyInner'>
                <span>Hake Fish</span>
                <span>order 24333330</span>
                <span>Delivered</span>
                <span>on 4th march</span>
              </div>
              <p>See Details</p>
            </div>
          </div>
          <div className='historyRight'>
            <div><img src={fishTwo} alt="" /></div>
            <div className='orderHistories'>
              <div className='historyInner'>
                <span>Hake Fish</span>
                <span>order 24333330</span>
                <span>Delivered</span>
                <span>on 4th march</span>
              </div>
              <p>See Details</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyOrderHistory;
