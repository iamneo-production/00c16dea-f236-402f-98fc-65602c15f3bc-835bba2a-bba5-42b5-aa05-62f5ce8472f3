import React, { useRef } from 'react';
import '../Assets/Home.css';
import Navbar from '../Components/Navbar';
import backgroundImage4 from '../Assets/Images/download 3.jpeg';
import backgroundImage3 from '../Assets/Images/download.jpeg';
import backgroundImage2 from '../Assets/Images/download 2.jpeg';
import backgroundImage1 from '../Assets/bg.jpg'; 
import { Link } from 'react-router-dom';

function Home() {
  const categoriesRef = useRef(null); 

  return (
    <div className='home'>
      <div className='advertisement'>
        <img src={backgroundImage1} alt='Advertisement' />
      </div>

      {/* Categories */}
      <div className='category-section' ref={categoriesRef} >
        <h2>Categories</h2>
        <div className='category-container'>
          {/* Fruits Category */}
          <Link to='/dinning' className='category'>
            <img src={backgroundImage2} alt='Dinning' />
            <h3>Dinning</h3>
          </Link>

          {/* Vegetables Category */}
          <Link to='/sofa' className='category'>
            <img src={backgroundImage3} alt='Sofa' />
            <h3>Sofa</h3>
          </Link>

          {/* Dairy Category */}
          <Link to='/bed' className='category'>
            <img src={backgroundImage4} alt='Bed' />
            <h3>Bed</h3>
          </Link>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Home;