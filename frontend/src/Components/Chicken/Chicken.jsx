import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './ChickenItems.css';
import { Link } from 'react-router-dom';
import { fetchChicken } from '../../ApiRequests/chicken.js'; // Import the fetchChicken function

const Chicken = () => {
    const [chickenItems, setChickenItems] = useState([]);

    useEffect(() => {
        const fetchChickenItems = async () => {
            try {
                const data = await fetchChicken(); // Use the fetchChicken function
                if (data && data.chicken && Array.isArray(data.chicken)) {
                    setChickenItems(data.chicken);
                } else {
                    console.error("fetchChicken did not return the expected data format:", data);
                }
            } catch (error) {
                console.error("Error fetching chicken:", error);
            }
        };

        fetchChickenItems();
    }, []);

    const renderChickenItems = () => {
        if (!Array.isArray(chickenItems) || chickenItems.length === 0) {
            return <p>No chicken items available</p>;
        }

        return chickenItems.map((item) => (
            <div key={item.id} className='itemWrap'>
                <img src={item.imgrc} alt={item.name} className='itemImg'/>
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
                <h2>Chicken</h2>
                <div className='itemWrapper'>{renderChickenItems()}</div>
            </div>
        </div>
    );
};

export default Chicken;