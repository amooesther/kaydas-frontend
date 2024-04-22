import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Button from '../../Components/Button/Button.jsx'
import contactImg from '../../Assets/contactImg.png'
import arrowLeftBlue from '../../Assets/arrowLeftBlue.png'
import Footer from '../../Components/footer/Footer.jsx'
import './ContactUs.css'
import { Link } from 'react-router-dom'
const ContactUs = () => {
  return (
    <div >
      <NavBar/>
      <div className='contactUs'>
      <div className='contactRight'>
        <h2>Contact us</h2>
        <h4>interested in Kaydas?</h4>
        <p>Please fill out the form provided, 
          and one of our team members will reach out to you to
           discuss further details regarding  your order.</p>
           <form action="" className='contactForm'>
            <label htmlFor="">FullName</label>
            <input type="text" />
            <label htmlFor="">Email Address</label>
            <input type="email" />
            <label htmlFor="">Phone Number</label>
            <input type="number" />
            <textarea id="message" name="message" rows="2" cols="25" placeholder="I'm interested in"></textarea>
           </form>
           <p>By clicking the button below, you agree to our Terms of Services
             and acknowledge our Global Privacy Policy</p>
            <Button>Get in touch</Button>
            <div className='contactLine'></div> 
             <h4>Email Us</h4>
             <span>kaydasenterprise@gmail.com</span>
             <h4>Call Us</h4>
             <span>Questions about plans, pricing or availability? Just have your people call our people.</span>
             <span>(234) 706-0971-471</span>
             <span>(234) 803-7735-462</span>
      </div>
      <div className='contactLeft'>
   <Link to='/'>    <img src={arrowLeftBlue} alt="" className='contactArrow'/> </Link> <br/>
<img src={contactImg} alt=""  className='contactImgTwo'/>
      </div>
      </div>
<Footer/>
    </div>
  )
}

export default ContactUs