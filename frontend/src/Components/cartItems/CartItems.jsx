import React from 'react'
import './CartItems.css'
import trash from '../../Assets/trash.png'
import close from '../../Assets/close.png'
import fishTwo from '../../Assets/fishTwo.png'
import heroImgTwo from '../../Assets/subTwo.png'


const CartItems = () => {
  return (
    <div >
      <div className='cartItemsWrapper'>
      <div className='cartIt'>
        <div ><img src={fishTwo} /></div>
      <div className='cartItText'>
        <p>Fiesta whole</p>
        <span>N60,000</span>
        <div className='cartItSpan'> 
        <span>N70,000</span>
        <span>-32%</span>
        </div>
        </div>        
      </div>
      <div >
          <div className='cartsItOne'><p>Delivered</p></div>
          <div className='cartsIts'>
            <img src={trash} alt="" />
            <p>Remove</p>
          </div>
        </div>
      </div>
      <div className='cartItemsWrapper'>
      <div className='cartIt'>
        <div ><img src={heroImgTwo} alt="" /></div>
      <div className='cartItText'>
        <p>Chi Whole Chicken</p>
        <span>N60,000</span>
        <div className='cartItSpan'> 
        <img src={close} alt="" className='close'/>
        <span className='availability'>Not Available</span>
        
        </div>
        </div>        
      </div>
      <div className='notAvailable' >
          
          <div className='cartsIts'>
            <img src={trash} alt="" />
            <p>Remove</p>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default CartItems