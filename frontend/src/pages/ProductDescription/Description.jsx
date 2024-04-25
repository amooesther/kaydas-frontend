import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import arrowLeftBlue from '../../Assets/arrowLeftBlue.png';
import heart from '../../Assets/heart.png';
import location from '../../Assets/location.png';
import clock from '../../Assets/clock.png';
import './Description.css';
import Footer from '../../Components/footer/Footer.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchDetails } from '../../ApiRequests/details.js';
import { addToCart, incrementHeartCount, updateClickedProduct, addToHeart } from '../../pages/Cart/CartSlice.js'; // Import updateClickedProduct action

const Description = () => {
  const { id: detailsId } = useParams();
  const [details, setDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [heartClicked, setHeartClicked] = useState(false); // State to track heart button click
  const [likedItems, setLikedItems] = useState([]); // State to store liked items
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDetails();
        if (data && data.details) {
          const product = data.details.find(item => item.id == detailsId);
          setDetails(product);
        } else {
          console.error('Data format or details not found:', data);
        }
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchData();
  }, [detailsId]);

  const changeQuantity = ({ target: { value } }) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (details) {
      dispatch(addToCart({ ...details, quantity: parseInt(quantity, 10) }));
      navigate('/cart');
    }
  };

  const handleAddToHeart = () => {
    if (details) {
      dispatch(addToHeart(details)); // Dispatch the product itself
    }
    dispatch(incrementHeartCount());
    dispatch(updateClickedProduct(details)); 
    setHeartClicked(true); 
  
   
    setLikedItems(prevLikedItems => [...prevLikedItems, details]); 
  
    navigate('/myorderhistory', { state: { likedItems: [...likedItems, details] } });



  };
  

  return (
    <div>
      <NavBar />
      <div className='description'>
        <div className='descriptionLeft'>
          <div>
            <div className='descriptionLeftUp'>
              <Link to="/gallery"><img src={arrowLeftBlue} alt="" /></Link>
              <p>Product details</p>
              <button className='heartBtn' onClick={handleAddToHeart}><img src={heart} alt="heart" /></button>
            </div>
            {details && (
              <>
                <img src={details.imgSrc} alt={details.name} className='fish' />
                <h4>Product Description</h4>
                <p className='descP'>{details.description}</p>
                <span className='spanOne'>{details.type}</span>
                <h5>{details.name}</h5>
                <div className='spanTwo'>
                  <span className='spanTwoOne'>⭐4.5</span>
                  <div className='spanTwoTwo'>Stone Cold</div>
                </div>
                <span className='spanOne'>80% of people suggest this product</span>
                <div className='descriptionLeftDown'>
                  <div>Quantity</div>
                  <button className=' descriptionDown' onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <div className=' descriptionDownOne'>{quantity}</div>
                  <button className=' descriptionDown' onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </>
            )}
            <div className='descBtn'>
              <button onClick={handleAddToCart} className='cartBtn'>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='descriptionRight'>
          <h4>Delivery Options</h4>
          <select id="Location" name="membership" className='selectLocation'>
            <option value="Location">Choose Location</option>
            <option value="location">Location</option>
            <option value="location">Location</option>
            <option value="Location">Location</option>
          </select>
          <div className='map'><iframe width="220" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=abuloma%20port%20harcourt+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/" className='frame'>gps trackers</a></iframe></div>
          <div className='location'>
            <img src={location} alt="" />
            <span>No 6 jetty rd Abuloma portharcourt</span>
          </div>
          <div className='buttons'>
            <Link to='/contactUs'><button className='buttOne'><img src={clock} alt="" /> ASAP</button></Link>
            <Link to='/contactUs'><button className='buttTwo'> <img src={clock} alt="" /> Schedule</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Description;
