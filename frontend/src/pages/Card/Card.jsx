import { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import card from '../../Assets/card.png';
import cardImg from '../../Assets/cardImg.png';
import './Card.css';
import Footer from '../../Components/footer/Footer.jsx'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth, db } from '../../Components/firebase.js';
import { getDoc, doc } from 'firebase/firestore';


const Card = () => {
  const [rememberCard, setRememberCard] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [validTill, setValidTill] = useState('');
  const [cvv, setCvv] = useState('');
  const [userDetail, setUserDetail] = useState(null);

  const totalAmount = useSelector(state => state.cart.totalAmount);
  console.log("Total Amount:", totalAmount);

  useEffect(() => {
    const storedCardNumber = localStorage.getItem('cardNumber');
    const storedValidTill = localStorage.getItem('validTill');
    const storedCvv = localStorage.getItem('cvv');
    const storedRememberCard = localStorage.getItem('rememberCard');

    if (storedCardNumber && storedValidTill && storedCvv && storedRememberCard) {
      setCardNumber(storedCardNumber);
      setValidTill(storedValidTill);
      setCvv(storedCvv);
      setRememberCard(JSON.parse(storedRememberCard));
    }
  }, []);

  const handleRememberToggle = () => {
    const newValue = !rememberCard;
    setRememberCard(newValue);
    localStorage.setItem('rememberCard', JSON.stringify(newValue));
  };

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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      setCardNumber(value);
      if (rememberCard) {
        localStorage.setItem('cardNumber', value);
      }
    } else if (name === 'validTill') {
      setValidTill(value);
      if (rememberCard) {
        localStorage.setItem('validTill', value);
      }
    } else if (name === 'cvv') {
      setCvv(value);
      if (rememberCard) {
        localStorage.setItem('cvv', value);
      }
    }
  };

  const handlePayment = () => {
    console.log('Payment processing...');
  };

  const handleCancelPayment = () => {
    console.log('Payment cancelled');
  };

  return (
    <div>
      <NavBar />
      <div className='cardOne'>
        <p><span>NGN</span> {totalAmount}</p>
        {userDetail && (
          <p>{userDetail.email}</p>
        )}
      </div>
      <div className='cardTwo'>
        <div className='cardThree'>
          <div>
            <label htmlFor="card">CARD NUMBER</label><br />
            <input
              type="number"
              name="cardNumber"
              value={cardNumber}
              onChange={handleInputChange}
              placeholder='00000 000000 000000 0000'
            />
          </div>
          <div className='crd'><img src={card} alt="" /></div>
        </div>
        <div className='cardFour'>
          <div className='cards'>
            <label htmlFor="">VALID TILL</label><br />
            <input
              type="number"
              name="validTill"
              value={validTill}
              onChange={handleInputChange}
              placeholder='MM/YY'
            />
          </div>
          <div className='line'></div>
          <div className='cards'>
            <label htmlFor="">CVV</label><br />
            <input
              type="number"
              name="cvv"
              value={cvv}
              onChange={handleInputChange}
              placeholder='123'
            />
          </div>
        </div>
      </div>
      <div className='toggles'>
        <h3>Remember this card next time ?</h3>
        <input
          type="checkbox"
          className='toggle'
          checked={rememberCard}
          onChange={handleRememberToggle}
        />
      </div>

      <img src={cardImg} alt="" className='img' />
      <div className='payButton'>
        <Link to='/successpayment' style={{ textDecoration: 'none' }}>
          <button onClick={handlePayment}><span>Pay</span> <span>NGN</span> {totalAmount} </button>
        </Link>
      </div>
      <div className='changePayment'>
        <h4>Change Payment Method</h4>
        <button onClick={handleCancelPayment}> X Cancel Payment</button>
      </div>
      <Footer />
    </div>
  );
};

export default Card;
