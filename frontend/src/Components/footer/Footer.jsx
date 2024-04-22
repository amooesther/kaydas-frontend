import React from 'react';
import facebook from '../../Assets/facebook.png';
import instagramIcon from '../../Assets/instagramIcon.png';
import whatsapp from '../../Assets/whatsapp.png';
import googlePlay from '../../Assets/googlePlay.png';
import appleStore from '../../Assets/appleStore.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='footerWrap'>
        <div className='footerContent'>
          <div className='footerOne'>
            <h2>Kaydas Enterprise</h2>
            <div className='socials'>
              <img src={facebook} alt='' />
              <img src={instagramIcon} alt='' />
              <img src={whatsapp} alt='' />
            </div>
            <div className='downloadOption'>
              <h2>Download mobile apps</h2>
              <div className='appIcons'>
                <img src={googlePlay} alt='' />
                <img src={appleStore} alt='' />
              </div>
            </div>
          </div>
          <div className='footerTwo'>
            <div className='footerColumn'>
              <h2>Account</h2>
              <p>My Account</p>
              <p>Order History</p>
              <p>Cart</p>
              <p>Checkout</p>
              <p>Shop</p>
            </div>
            <div className='footerColumn'>
              <h2>Quick Links</h2>
              <p>About</p>
              <p>Blog</p>
              <p>How it works</p>
              <p>Referrals</p>
              <p>Delivery Information</p>
            </div>
            <div className='footerColumn'>
              <h2>Support</h2>
              <p>FAQS</p>
              <p>Contact</p>
              <p>Help</p>
              <p>Track order</p>
            </div>
            <div className='footerColumn'>
              <h2>Company</h2>
              <p>Privacy policy</p>
              <p>Terms and conditions</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='ruling' />
      <span className='copyWrite'>&copy; 2024 Kaydas cold room. All rights reserved.</span>
    </div>
  );
};

export default Footer;
