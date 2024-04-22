import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './ChickenWhole.css';
import { Link } from 'react-router-dom';
import { fetchWhole } from '../../ApiRequests/whole.js';

const ChickenWhole = () => {
  const [wholeItems, setWholeItems] = useState([]);

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

  const renderWholeItems = () => {
    return wholeItems.map((item) => (
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
        <h2>Chicken Whole</h2>
        <div className='itemWrapper'>{renderWholeItems()}</div>
      </div>
    </div>
  );
};

export default ChickenWhole;
