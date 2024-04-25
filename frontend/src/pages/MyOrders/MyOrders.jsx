import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import './MyOrders.css';
import Order from '../../Components/OrderHistory/Order';
import CartItems from '../../Components/cartItems/CartItems.jsx';
import Footer from "../../Components/footer/Footer.jsx"
const MyOrders = () => {
  const [showOrders, setShowOrders] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Example breakpoint for small screens

  const toggleOrders = () => {
    setShowOrders(!showOrders); // Toggle showOrders state
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Update state based on screen size
  };


  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar />
      {isSmallScreen ? (
        <div className="myOrders">
          <button className="hamburger-menu-small" onClick={toggleOrders}>
            ☰
          </button>
          {showOrders && (
            <div className="overlay" onClick={toggleOrders}> {/* Close overlay when clicked outside */}
              <div className="order-overlay">
                <Order />
              </div>
            </div>
          )}
          <div className='cartItems'><CartItems /></div>
        </div>
      ) : (
        <div className='myOrders'>
          <div><Order /></div>
          <div className='cartItems'><CartItems /></div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default MyOrders;
