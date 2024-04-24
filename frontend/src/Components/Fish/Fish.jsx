import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './Fish.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../../pages/Cart/CartSlice.js'; // Import addToCart action
import { fetchFish } from '../../ApiRequests/fish.js';

const Fish = () => {
    const [fishItems, setFishItems] = useState([]);
    const dispatch = useDispatch(); 
    const [quantity, setQuantity] = useState(1); 

    useEffect(() => {
        const fetchFishItems = async () => {
            try {
                const data = await fetchFish(); 
                if (data && data.fish && Array.isArray(data.fish)) {
                    setFishItems(data.fish);
                } else {
                    console.error("fetchFish did not return the expected data format:", data);
                }
            } catch (error) {
                console.error("Error fetching fish:", error);
            }
        };

        fetchFishItems();
    }, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, quantity: parseInt(quantity, 10) }));
    };
    
    const renderFishItems = () => {
        return fishItems.map((item) => (
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
                <h2>Fish</h2>
                <div className='itemWrapper'>{renderFishItems()}</div>
            </div>
        </div>
    );
};

export default Fish;
