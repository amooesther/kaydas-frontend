import React from 'react';
import './Order.css';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import order from '../../Assets/order.png';
import orderHeart from '../../Assets/orderHeart.png';
import orderProfile from '../../Assets/orderProfile.png';
import orderInvoices from '../../Assets/orderInvoices.png';
import wallet from '../../Assets/wallet.png';
import tracks from '../../Assets/tracks.png';
import logout from '../../Assets/logout.png';
import chevronUp from '../../Assets/chevronUp.png';
import chevronRight from '../../Assets/chevronRight.png';
import { Link } from 'react-router-dom'

const Order = ({ orderItems }) => {
    console.log(orderItems, "this is the OrderItems");
    return (
        <div className="overlay">
            <div className="order-overlay">
              
                <div className='order'>
                <h1>My Kaydas Account</h1>
                <Link to="/myorderhistory" style={{ textDecoration: 'none' }}>    <div className='orderItems'>
                        <img src={order} alt="" />
                        <p>Order</p>
                        <img src={chevronRight} alt="" className='chevronRight' />
                    </div></Link>
                 <Link to="/profile" style={{ textDecoration: 'none' }}>  <div className='orderItems'>
                        <img src={orderProfile} alt="" />
                        <p>Profile</p>
                        <img src={chevronRight} alt="" className='chevronRight' />
                    </div></Link> 
                    <div className='orderItems'>
                        <img src={orderHeart} alt="" />
                        <p>Saved Items</p>
                        <img src={chevronRight} alt="" className='chevronRight' />
                    </div>
                    <Link to="/receipt" style={{ textDecoration: 'none' }}> <div className='orderItems'>
                <img src={orderInvoices} alt="" />
                        <p>Invoices</p>
                        <img src={chevronRight} alt="" className='chevronRight'/>
                    </div></Link>  
                    <div className='orderItems'>
                        <img src={wallet} alt="" />
                        <p>Wallet</p>
                        <img src={chevronRight} alt=""className='chevronRight' />
                    </div>
                 <Link to='/delivery' style={{ textDecoration: 'none' }}>  <div className='orderItems'>
                        <img src={tracks} alt="" />
                        <p>Track Order</p>
                        <img src={chevronRight} alt=""className='chevronRight' />
                    </div></Link> 
                    <div className='orderTwo'>
                        <h2>Schedules and settings</h2>
                        <div className='orderItems'>
                        <p>My Address</p>
                        <img src={chevronRight} alt=""className='chevronRight' />
                    </div> 
                <Link to='/nutrition'  style={{ textDecoration: 'none' }} >  <div className='orderItems'>
                        <p>Nutritional Tips</p>
                        <img src={chevronRight} alt=""className='chevronRight' />
                    </div> </Link> 
                    <div className='orderItems'>
                        <p>Account Management</p>
                        <img src={chevronRight} alt=""className='chevronRight' />
                    </div> 
                
                    <div className='logout'>
                    <img src={logout} alt="" />
                        <p>Logout</p>
                        <img src={chevronUp} alt="" className='chevronRight' />
                    
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
