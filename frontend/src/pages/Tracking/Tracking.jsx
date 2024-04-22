import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Button from '../../Components/Button/Button.jsx'
import approved from '../../Assets/approved.png'
import pack from '../../Assets/package.png'
import rider from '../../Assets/rider.png'
import delivered from '../../Assets/delivered.png'
import deliveredImg from '../../Assets/deliveredImg.png'
import Footer from '../../Components/footer/Footer.jsx'
import { Link } from 'react-router-dom'
import './Tracking.css'


const Tracking = () => {
  return (
    <div className='trackingWrap'>
      <NavBar/>
      <h1>Product Progress</h1>
      <div className='tracking'>
        <div className='trackingLeft'>
        <div className='track'>
          <div> <img src={approved} alt="" /> </div>
          <div> 
            <h3>Approval status</h3>
            <p>10:15AM 17th March 2024</p>
            <Button>Approved</Button>
          </div>        
          </div>
          <div className='track'>
          <div> <img src={pack} alt="" /> </div>
          <div> 
            <h3>Packing Approved</h3>
            <p>10:15AM 17th March 2024</p>
            <Button>Approved</Button>
          </div>
        </div>
        <div className='track'>
          <div> <img src={rider} alt="" /> </div>
          <div> 
            <h3>Dispatch Rider</h3>
            <p>10:15AM 17th March 2024</p>
            <Button>Approved</Button>
          </div>
        </div>
        <div className='track'>
          <div> <img src={delivered} alt="" /> </div>
          <div> 
            <h3>Delivery Status</h3>
            <p>10:15AM 17th March 2024</p>
            <Button>Approved</Button>
          </div>
        </div>
        </div>
        
        <div className='trackingRight'>
          <img src={deliveredImg} alt="" />
        </div>
        
      </div>
     
  <Link to='/delivery'>   <div className='trackingBtn'><Button size='extraLarge'>Get Your Tracking Code</Button></div></Link> 
   <Footer/>
    </div>
  )
}

export default Tracking