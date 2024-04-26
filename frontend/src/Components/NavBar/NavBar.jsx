import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../Assets/logo.png';
import cart from '../../Assets/cart.png';
import heart from '../../Assets/heart.png';
import userAvatar from '../../Assets/userAvatar.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'; // Changed Link to NavLink
import { auth, db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const heartCount = useSelector((state) => state.cart.heartCount);

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
      window.location.href = "/login";
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
          <NavLink
            exact
            to='/'
            activeClassName="active" // Add activeClassName
            style={{ textDecoration: 'none' }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/aboutUs'
            activeClassName="active" // Add activeClassName
            style={{ textDecoration: 'none' }}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contactUS'
            activeClassName="active" // Add activeClassName
            style={{ textDecoration: 'none' }}
          >
            Contact US
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/subscription'
            activeClassName="active" // Add activeClassName
            style={{ textDecoration: 'none' }}
          >
            Subscription
          </NavLink>
        </li>
      </ul>
      <div className='newLoginCart'>
        <NavLink to='/myorders'>
          <img src={heart} alt='heart' />
        </NavLink>
        <div className='cartCount'>{heartCount}</div>
        <img src={cart} alt='cart' onClick={goToCart} className='mainCart' />
        <div className='cartCount'>{cartCount}</div>
        {userDetail ? (
          <div className='user'>
            <NavLink to='/profile'>
              <div className='userAvatar'>
                <img src={userAvatar} alt='' />
              </div>
            </NavLink>
            <button onClick={handleLogout} className='userBtn'>Hi {userDetail.Name}</button>
          </div>
        ) : (
          <NavLink to='./Login'>
            <button className='loginBtn'>Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
