import React, { useState } from 'react';
import './Delivery.css';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import arrowLeftBlue from '../../Assets/arrowLeftBlue.png';
import deliveryImg from '../../Assets/deliveryImg.png';
import Footer from '../../Components/footer/Footer.jsx'
import { Link } from 'react-router-dom';

const Delivery = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <NavBar />
      <div className='deliveryWrap'>
        <div className='deliveryOne'>
      <Link to='/'>    <img src={arrowLeftBlue} alt="" /></Link>
          <h1 className='heading'>Delivery status</h1>
        </div>
        <div className='deliveryMap'>
          <div>
            <iframe
              width="100%"
              height="300px"
              src="https://maps.google.com/maps?width=100%25&amp;height=500px&amp;hl=en&amp;q=Abuloma%20Port%20Harcourt%20Nigeria+(Kaydas%20cold%20Room)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
        <div className='deliveryTwo'>
          <h3>Estimated time of delivery</h3>
          <h3>00:00</h3>
        </div>
        <div className='deliveryThree'>
          <div>
            <img src={deliveryImg} alt="" />
          </div>
          <div className='deliveryThreeTwo'>
            <h2>Paul Joe ⭐⭐⭐⭐⭐</h2>
            <h3>Your delivery guy</h3>
            <p>
              Paul Joe is vaccinated and was sanitized before the protein was
              handed over to him for delivery. His body temperature is normal.
            </p>
          </div>
        </div>
        <div className='deliveryFour'>
          <h3>Track your order</h3>
          <div className='radio'>
            <div className="radio-container">
              <input
                type="radio"
                id="orderConfirmed"
                name="orderStatus"
                value="option1"
                checked={selectedValue === "option1"}
                onChange={() => handleRadioChange("option1")}
              />
              <label htmlFor="orderConfirmed" className="radio-inner"></label>
            </div>
            <p>Order Confirmed: Your order has been received</p>
          </div>
          <div className='radio'>
            <div className="radio-container">
              <input
                type="radio"
                id="orderNotConfirmed"
                name="orderStatus"
                value="option2"
                checked={selectedValue === "option2"}
                onChange={() => handleRadioChange("option2")}
              />
              <label htmlFor="orderNotConfirmed" className="radio-inner"></label>
            </div>
            <p>Order is being prepared: Your order is getting prepared</p>
          </div>
          <div className='radio'>
            <div className="radio-container">
              <input
                type="radio"
                id="orderPrepared"
                name="orderStatus"
                value="option3"
                checked={selectedValue === "option3"}
                onChange={() => handleRadioChange("option3")}
              />
              <label htmlFor="orderPrepared" className="radio-inner"></label>
            </div>
            <p>Order Prepared: Your order has been prepared</p>
          </div>
          <div className='radio'>
            <div className="radio-container">
              <input
                type="radio"
                id="deliveryInProcess"
                name="orderStatus"
                value="option4"
                checked={selectedValue === "option4"}
                onChange={() => handleRadioChange("option4")}
              />
              <label htmlFor="deliveryInProcess" className="radio-inner"></label>
            </div>
            <p>Delivery in process: Hang on, your order is on the way</p>
          </div>
          <div className='radio'>
            <div className="radio-container">
              <input
                type="radio"
                id="deliveryDone"
                name="orderStatus"
                value="option5"
                checked={selectedValue === "option5"}
                onChange={() => handleRadioChange("option5")}
              />
              <label htmlFor="deliveryDone" className="radio-inner"></label>
            </div>
            <p>Delivery successfully done: Thank you for choosing us</p>
          </div>
          <button className='deliveryBtn'>Track Order</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;
