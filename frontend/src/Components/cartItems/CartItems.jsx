import React from 'react'
import './CartItems.css'
import trash from '../../Assets/trash.png'
import close from '../../Assets/close.png'


const CartItems = () => {
  return (
    <div >
      <div className='cartItemsWrapper'>
      <div className='cartIt'>
        <div ><img src="https://s3-alpha-sig.figma.com/img/8d46/4db1/65f215516db89a1ea4c585027a98295f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kl7XpMS~~c1Dnl-eYkfOTCzqYhMrU2YxVcRPXLy9NdKbUT2IIrn0SkTpKurqbhaZi5UO7CxmQRPoWiKu9mB~jEVJ5mSn2aiYtELilztQUaexmgHw1MywodQuzg~hk1TOrPT8bjFYQlCdZGPYtQyp-2jWRZv6~fsxuy26aXyfUw7H843hznf5Z8-Zk-Y8cOJDAziIeqKvde3sLqcvNhLLTY2i~5UIl3UFY1dknLx~-BmouNQrPRTjBH6wDbMQ8ihl20UFLHNTLznCQExx~AI8Tsa54TpourN1sg6nrfogG5Nmkryzc~N3kTiKn37vJQF-Ljl~a8cTJtyBX3DzFSpJtQ__" alt="" /></div>
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
        <div ><img src="https://s3-alpha-sig.figma.com/img/4ecb/7bf8/a2f77bd5dbc6ce9fd4efe18ece0eb3ea?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TDEB4tMa~WPEKyFEFNHSWVg7BqvqR2l4RXZYNm2JCJ~1F2a2EmuFmVxBImzOGgr0Ro-jrLyeZHQzrS1CoidqP86OB3bKC8QuBV00V7FKYXeQ~DcHpIcbc5d4cWXGZ-qYCVVvG2GK-W9akbbzLc-DgDDVadXcdfs7jekuxTwdhJAZrjZHIZGTkiQl7TYKh0xhAbZtQTISVL8sbjLZqKvU5nefMrkko~5zkwrP7fV87Hzjm7J-pIo7PdAO06gMwVwq6S2ykymdJ2WrlbB4R7xogwG2TQMj~JjT-ic1ODd6tGUXQe0kTOnqlpOKXSw5PAD42x153qQRfV21LUca0ev4hw__" alt="" /></div>
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