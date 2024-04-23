import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './Wholesale.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../../pages/Cart/CartSlice.js'; // Import addToCart action
import { fetchWholesale } from "../../ApiRequests/wholesale.js";

const Wholesale = () => {
  const [wholesaleItems, setWholesaleItems] = useState([]);
  const dispatch = useDispatch(); 
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const fetchWholesaleItems = async () => {
      try {
        const data = await fetchWholesale(); 
        if (data && data.wholesale && Array.isArray(data.wholesale)) {
          setWholesaleItems(data.wholesale);
        } else {
          console.error("fetchWholesale did not return the expected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching Wholesale:", error);
      }
    };

    fetchWholesaleItems();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: parseInt(quantity, 10) }));
};

  const renderWholesaleItems = () => {
    return wholesaleItems.map((item) => (
      <div key={item.id} className='itemWrap'>
        <img src={item.imgSrc} alt={item.name} className='itemImg' />
        <div>
          <h3>{item.name}</h3>
          <div className='itemOne'>
            <div>Weight</div>
            <div>20kg</div>
          </div>
          <div className='itemCard'>
            <div>
              <p>{item.type}</p>
              <span>Type</span>
            </div>
            <div>
              <p>{item.price}</p>
              <span>Price</span>
            </div>
          </div>
          <div className='btnWrapper'>
            <Link to={`/description/${item.id}`}>
              <div>
                <Button variant='tertiaryOne' size='small'>
                  View details
                </Button>
              </div>
            </Link>
            <div>
              <button onClick={() => handleAddToCart(item)} className='addToCartBtn'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className='cartCards'>
        <h2>Wholesale</h2>
        <div className='itemWrapper'>{renderWholesaleItems()}</div>
      </div>
    </div>
  );
};

export default Wholesale;
