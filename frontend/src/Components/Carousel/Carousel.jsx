import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className='carousel'>
      
      <div className='carousel-items'>
        {items.map((item, index) => (
          <div key={index} className={index === activeIndex ? 'carousel-item active' : 'carousel-item'}>
            
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className='chevrons'>
        <button className='chevron-left' onClick={handlePrev}>{'<'}</button>
        <button className='chevron-right' onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  );
};

export default Carousel;
