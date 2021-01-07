import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_2x._CB412256578_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product />
      </div>
      <div className="home__row"></div>
      <div className="home__row"></div>
    </div>
  );
}

export default Home;
