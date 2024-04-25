import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../../Assets/search.png';
import heroImg1 from '../../Assets/heroImg1.png';
import heroImg2 from '../../Assets/heroImg2.png';
import heroImg3 from '../../Assets/heroImg3.png';

import './HeroSection.css';

const HeroSection = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle search form submission if needed
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
            <Link to='/gallery'><button type='submit' className='searchButton'>Search</button></Link>
          </form>
        </div>
      </div>
      <div className='heroTwo'>
        <Link to='/description/1'><div><img src={heroImg1} alt='' /></div></Link>
        <Link to='/description/2'><div><img src={heroImg2} alt='' /></div></Link>
        <Link to='/description/5'><div><img src={heroImg3} alt='' /></div></Link>
      </div>
    </div>
  );
};

export default HeroSection;
