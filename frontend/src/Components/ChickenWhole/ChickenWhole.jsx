import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './ChickenWhole.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../../pages/Cart/CartSlice.js'; // Import addToCart action
import { fetchWhole } from '../../ApiRequests/whole.js';

const ChickenWhole = () => {
  const [wholeItems, setWholeItems] = useState([]);
  const dispatch = useDispatch(); 
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchWholeItems = async () => {
      try {
        const data = await fetchWhole(); 
        if (data && data.whole && Array.isArray(data.whole)) {
          setWholeItems(data.whole);
        } else {
          console.error("fetchWhole did not return the expected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching Whole:", error);
      }
    };

    fetchWholeItems();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: parseInt(quantity, 10) }));
};

  const renderWholeItems = () => {
    return wholeItems.map((item) => (
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
        <h2>Chicken Whole</h2>
        <div className='itemWrapper'>{renderWholeItems()}</div>
      </div>
    </div>
  );
};

export default ChickenWhole;
