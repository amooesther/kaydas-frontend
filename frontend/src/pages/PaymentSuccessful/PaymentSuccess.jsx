import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import success from '../../Assets/success.png'
import Button from '../../Components/Button/Button.jsx'
import { Link } from 'react-router-dom'
import Footer from '../../Components/footer/Footer.jsx'

import './PaymentSuccess.css'
const PaymentSuccess = () => {
  return (
    <div >
        <NavBar/>
        <div className='success'>
        <img src={success} alt="" />
        <div className='successPay'> 
            <h3>Payment Successful</h3>
            <p>Fund transfer to “kaydas coldroom” was successful</p>
  <Link to="/receipt" style={{ textDecoration: 'none' }}><Button size='large'>View Receipt</Button></Link> 
  </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PaymentSuccess