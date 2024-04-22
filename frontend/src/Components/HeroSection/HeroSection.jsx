import React, { useState } from 'react';
import search from '../../Assets/search.png';
import heroImg1 from '../../Assets/heroImg1.png';
import heroImg2 from '../../Assets/heroImg2.png';
import heroImg3 from '../../Assets/heroImg3.png';
import { Link } from 'react-router-dom';

import './HeroSection.css';

const HeroSection = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className='heroWrapper'>
      <div className='heroOne'>
        <h1 className='heroText'>
          Enjoy affordable doorstep delivery of your <span>fresh frozen proteins!</span>
        </h1>
        <div className='inputWrapper'>
          <form onSubmit={handleFormSubmit} className='searchWrapper'>
           
          <input
         type="text"
         placeholder="Search Kaydas Cold Room"
         className="searchInput"
         value={searchValue}
         onChange={handleInputChange}
         />

           
        <Link to='/gallery'>   <button type='submit' className='searchButton'>Search</button></Link> 
          </form>
        </div>
      </div>
      <div className='heroTwo'>
        <div><img src={heroImg1} alt='' /></div>
        <div><img src={heroImg2} alt='' /></div>
        <div><img src={heroImg3} alt='' /></div>
      </div>
    </div>
  );
};

export default HeroSection;