import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './ChickenItems.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../../pages/Cart/CartSlice.js'; // Import addToCart action
import { fetchChickenPart } from '../../ApiRequests/chickenPart.js';

const ChickenItems = () => {
  const [chickenItems, setChickenItems] = useState([]);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const fetchChickenItems = async () => {
      try {
        const data = await fetchChickenPart(); 
        if (data && data.chickenPart && Array.isArray(data.chickenPart)) {
          setChickenItems(data.chickenPart);
        } else {
          console.error("fetchChickenPart did not return the expected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching chickenPart:", error);
      }
    };

    fetchChickenItems();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: parseInt(quantity, 10) }));
};

  const renderChickenItems = () => {
    return chickenItems.map((item) => (
      <div key={item.id} className='itemWrap'>
        <img src={item.imgSrc} alt={item.name} className='itemImg' />
        <div>
          
          <h3>{item.name}</h3>
          
          <div className='itemOne'>        
            <div>20kg</div>
            <div>stone cold</div>
          </div>
          <div className='border'></div>
          <div className='itemCard'>
            <div>
              <p>{item.type}</p>
              <span>Type</span>
            </div>
            <div className='borderTwo'></div>
            <div>
              <p>{item.price}</p>
              <span>Price</span>
            </div>
          </div>
          <div className='border'></div>
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
        <h2>Chicken parts</h2>
        <div className='itemWrapper'>{renderChickenItems()}</div>
      </div>
    </div>
  );
};

export default ChickenItems;
