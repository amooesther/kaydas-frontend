import React, { useMemo, useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import trash from '../../Assets/trash.png';
import './Cart.css';
import cartIcon from '../../Assets/cart.png';
import ChickenItems from '../../Components/Chicken/ChickenItems.jsx';
import ChickenWhole from '../../Components/ChickenWhole/ChickenWhole.jsx';
import Footer from '../../Components/footer/Footer.jsx';
import Wholesale from '../../Components/Wholesale/Wholesale.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { updateTotalAmount, removeItem, incrementQuantity, decrementQuantity } from '../Cart/CartSlice.js'; // Import actions from CartSlice
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = useMemo(() => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cartItems]);
  const deliveryFee = 1500;

  useEffect(() => {
    const newTotalAmount = subtotal + deliveryFee;
    setTotalAmount(newTotalAmount);
    dispatch(updateTotalAmount(newTotalAmount)); 
  }, [subtotal, deliveryFee, dispatch]);

  const handleCheckout = () => {
    console.log(totalAmount); 
    navigate('/payment', { state: { totalAmount } });
  };

  // Function to remove an item from the cart
  const removeCartItem = (itemId) => {
    dispatch(removeItem({ itemId }));
  };

  // Function to increment quantity
  const incrementItem = (itemId) => {
    dispatch(incrementQuantity({ itemId }));
  };

  // Function to decrement quantity
  const decrementItem = (itemId) => {
    dispatch(decrementQuantity({ itemId }));
  };

  return (
    <div>
      <NavBar />
      <div className='fullCartWrapper'>
        <div className='cartDisplay'>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className='fullCart' key={index}>
                <div className='fullCartImg'><img src={item.imgSrc} alt="" /></div>
                <div className='fullCartSpan'>
                  <span>{item.name}</span>
                  <span>In stock</span>
                  <div className='trash'>
                  <img src={trash} alt="" /> 
                    <button onClick={() => removeCartItem(item.id)} className='trashBtn'> Remove</button>    
                  </div>
                </div>
                <div className='fullCartRight'>
                  <div>
                    <p>{item.price}/kg</p>
                  </div>
                  <div className='fullCartBtnWrapper'>
                    <button onClick={() => decrementItem(item.id)}>-</button>
                    <div>{item.quantity}</div>
                    <button onClick={() => incrementItem(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='emptyCart'>
              <div className='cartWrap'>
                <div className='cartImg'><img src={cartIcon} alt="" /></div>
                <div className='count'>{cartItems ? cartItems.length : 0}</div>
              </div>
            </div>
          )}
        </div>
        <div className='cartSummary'>
          <p>Cart Summary</p>
          <div className='summary'>
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>
          <div className='summary'>
            <span>Delivery fee</span>
            <span>{deliveryFee}</span>
          </div>
          <div className='summary'>
            <span>Total</span>
            <span>{totalAmount}</span>
          </div>
          <button onClick={handleCheckout} className='checkOutBtn'>Checkout</button>
        </div>
      </div>
      <div className='cartCards'>
        <div className='itemWrapper'>
        </div>
      </div>
      <ChickenItems />
      <ChickenWhole />
      <Wholesale />
      <Footer />
    </div>
  );
};

export default Cart;
