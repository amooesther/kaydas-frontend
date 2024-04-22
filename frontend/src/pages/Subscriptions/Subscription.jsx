import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx'
import redHeart from '../../Assets/redHeart.png'
import deliveryMan from '../../Assets/deliveryMan.png'
import deliveryVan from '../../Assets/deliveryVan.png'
import subOne from '../../Assets/subOne.png'
import clock from '../../Assets/clock.png'
import truck from '../../Assets/truck.png'
import subTwo from '../../Assets/subTwo.png'
import subThree from '../../Assets/subThree.png'
import subFour from '../../Assets/subFour.png'
import arrowUp from '../../Assets/arrowUp.png'
import arrowUpTwo from '../../Assets/arrowUpTwo.png'
import Button from '../../Components/Button/Button.jsx'
import { Link } from 'react-router-dom'
import './Subscription.css'
import Footer from '../../Components/footer/Footer.jsx'


const Subscription = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (isAutoplaying) {
        goToNextSlide();
      }
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [currentSlide, isAutoplaying]);

  const totalSlides = 4;

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };
  return (
    <div>
      <NavBar/>
      <div className='subscriptionWrapper'>
      <h3>We make prompt and scheduled delivery</h3>
        <div className='subscription'>
        
        <div className='sub'>
          <div className='subLeft'>
            <div><img src={deliveryVan} alt="" /></div>
            <div className='subOne'>
      <Link  to='/gallery' style={{ textDecoration: 'none' }}>    <div className='btnWrapper'><Button>order Now</Button></div></Link> 
              <p>We deliver to Private Corporate Organization</p>
             <div className='subTwo'> <img src={redHeart} alt="" /> <span>11k+</span></div>
            </div>
            
          </div>
          <div className='verticalLine'></div>
          <div className='subRight'>
      <div className='deliveryGuy'><img src={deliveryMan} alt="" /></div>
      <div className='subOne'>
    <Link  to='/gallery' style={{ textDecoration: 'none' }}>  <div className='btnWrapper'><Button>order Now</Button></div></Link> 
      <p>Gift Your Loved Ones</p>
             <div className='subTwo'> <img src={redHeart} alt="" /> 11k+</div>
      </div>
          </div>
        </div>
      </div>
      </div>
    <div className='carouselWrapper'>
      
      
      <div className='carouselWrap'>
      <Link  to='/gallery' style={{ textDecoration: 'none' }}><h2 className={currentSlide === 0 ? 'active' : ''}>Chicken</h2></Link>
<img src={subOne} alt="" />
<h3>Weekly</h3>
<p>Schedule weekly orders at your convenience.
   saved all your favorite
   products for delivery weekly.</p>
   <span><img src={clock} alt="" /> Buy Weekly/Month</span>
   <span><img src={truck} alt="" /> Bulk Delivery</span>
   <span className='span'>From 300kg per product Per week</span>
   <div className='carouselBtnWrapper'>
   <Link to='/scheduleOrder' style={{ textDecoration: 'none' }}> <div className='buttonWrap'><Button variant='tertiaryTwo' size='small'>Subscribe Now</Button></div></Link>
    <div className='buttonWrap'> <Button variant='tertiaryOne' size='small'>Learn More</Button></div>
   </div>
      </div>
      
      <div className='carouselWrap'>
      <Link  to='/gallery' style={{ textDecoration: 'none' }}> <h2 className={currentSlide === 1 ? 'active' : ''}>Fish</h2></Link>
<img src={subTwo} alt="" />
<h3>Monthly</h3>
<p>If weekly purchase is not convinient 
  stock up your store on a monthly
   basis so you don't get stranded.</p>
   <span><img src={clock} alt="" /> Buy  Monthly/Year + Customize</span>
   <span><img src={truck} alt="" /> Bulk Delivery</span>
   <span className='span'>From 500kg  Per  month</span>
   <div className='carouselBtnWrapper'>
  <Link to='/scheduleOrder' style={{ textDecoration: 'none' }}>  <div className='buttonWrap'><Button variant='tertiaryTwo' size='small'>Subscribe Now</Button></div></Link>
    <div className='buttonWrap'> <Button variant='tertiaryOne' size='small'>Learn More</Button></div>
   </div>
      </div>
      <div className='carouselWrap'>
      <Link  to='/gallery' style={{ textDecoration: 'none' }}>  <h2 className={currentSlide === 1 ? 'active' : ''}>Whole</h2></Link>
<img src={subThree} alt="" />
<h3>Random</h3>
<p>You have the option to order at anytime and
   schedule your delivery. 
   Your satisfaction is our priority. </p>
   
   <span><img src={truck} alt="" />4,8 or unlimited days by month</span>
   <span className='span'>From 200kg- 5tonnes and above</span>
   <div className='carouselBtnWrapper'>
  <Link to='/scheduleOrder' style={{ textDecoration: 'none' }}><div className='buttonWrap'><Button variant='tertiaryTwo' size='small'>Subscribe Now</Button></div></Link>  
    <div className='buttonWrap'> <Button variant='tertiaryOne' size='small'>Learn More</Button></div>
   </div>
      </div>
      <div className='carouselWrap'>
      <Link  to='/gallery' style={{ textDecoration: 'none' }}>  <h2 className={currentSlide === 1 ? 'active' : ''}>Chicken part</h2></Link>
<img src={subFour} alt="" />
<h3>Daily Orders</h3>
<p>Your satisfaction is our priorityTaking the stress 
  of you whenever you crave favorite protein, 
  we are just a call away</p>
   <span><img src={clock} alt="" /> Buy by hour/day</span>
   <span><img src={truck} alt="" /> Bulk Delivery</span>
   <span className='span'>From 300kg per product Per week</span>
   <div className='carouselBtnWrapper'>
 <Link to='/scheduleOrder' style={{ textDecoration: 'none' }}> <div className='buttonWrap'><Button variant='tertiaryTwo' size='small'>Subscribe Now</Button></div></Link>  
    <div className='buttonWrap'> <Button variant='tertiaryOne' size='small'>Learn More</Button></div>
   </div>
      </div>
    </div>
    <div className='arrowWrapper'>
    <div className='arrowUpBtn'>
      <button><img src={arrowUp} alt="" /></button>
      <button><img src={arrowUpTwo} alt="" /></button>
      </div>
      <p>Need more information? Reach out to us!</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Subscription