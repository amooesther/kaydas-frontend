import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './ChickenItems.css';
import { Link } from 'react-router-dom';
import { fetchChickenPart } from '../../ApiRequests/chickenPart.js';

const ChickenItems = () => {
  const [chickenItems, setChickenItems] = useState([]);

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

  const renderChickenItems = () => {
    return chickenItems.map((item) => (
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
              <Button variant='tertiaryTwo' size='small'>
                Add to cart
              </Button>
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
