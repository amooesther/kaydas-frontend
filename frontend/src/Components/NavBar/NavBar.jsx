import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../Assets/logo.png';
import cart from '../../Assets/cart.png';
import heart from '../../Assets/heart.png';
import userAvatar from '../../Assets/userAvatar.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux'; 

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

 
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User data not found");
        }
      } else {
        console.log("User not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUserDetail(null); 
      window.location.href="/login"
    }).catch((error) => {
      console.error("Error logging out:", error);
    });
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className='navBar'>
      <div className='navLogo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='toggleButton' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navMenu ${menuVisible ? 'active' : ''}`}>
        <li>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to='/aboutUs'>
            About Us
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to='/contactUS'>
            Contact US
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to='/subscription'>
            Subscription
          </Link>
        </li>
      </ul>
      <div className='newLoginCart'>
        <Link to='/myorders'>
          <img src={heart} alt='cart' />
        </Link>
        <div className='cartCount'>{cartCount}</div>         
          <img src={cart} alt='cart' onClick={goToCart}/>
        
        <div className='cartCount'>{cartCount}</div> 
        {userDetail ? (
          <div className='user'>
          <Link to='/profile'> <div className='userAvatar'>
              <img src={userAvatar} alt='' />
            </div></Link> 
            <button onClick={handleLogout} className='userBtn'>Hi {userDetail.Name}</button>
          </div>
        ) : (
          <Link to='./Login'>
            <button  className='loginBtn'>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
