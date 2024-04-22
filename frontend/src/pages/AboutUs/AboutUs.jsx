import React from 'react'
import './AboutUS.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/footer/Footer.jsx'
import NutritionalTip from '../../Components/NutritionalTip/NutritionalTip.jsx'

const AboutUs = () => {
  return (
    <div>
      <NavBar/>
 <div className='aboutUS'>
        <h1>About us</h1>
     <div className='aboutOne'>
      <div className='about' >
        <h2>What we do</h2>
        <p>We specialize in distributing and retailing 
          premium-grade, nutritious, and hygienic poultry 
          products, fish, and seafood to a wide range of 
          establishments, including eateries, restaurants, hotels,
           supermarkets, and corporate organizations."</p>
      </div>
      <div className='about'>
        <h2>Our Mission</h2>
        <p>Our mission is to distribute and retail fresh and 
          well frozen quality nutritious poultry products, 
          fishes and seafood from reputable farms that use hygiene
           facility to our valued and esteemed customers in Nigeria.</p>
      </div>
      
     </div>
     <div className='aboutTwo'>
        <div className='about'>
          <h2>Our Vision</h2>
          <p>To become a household name and the go-to referral 
            point in the business of distributing and retailing frozen poultry 
            products, fishes, and seafood in Nigeria,.</p>
        </div>
        <div className='about'>
          <h2>What Sets Us Apart?</h2>
          <p>We guarantee fresh and frozen food with precise measurements 
            and timely delivery. </p>
        </div>
      </div>
      </div>
<NutritionalTip/>
<Footer/>
    </div>
  )
}

export default AboutUs