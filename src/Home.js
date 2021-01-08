import React from 'react';
import './Home.css';
import Product from './Product';
import { products } from './products';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_2x._CB412256578_.jpg"
          alt=""
        />
        <div className="home__row">
          {products.slice(0, 2).map((product) => {
            const { id, title, rating, price, image } = product;
            return (
              <Product
                key={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
              />
            );
          })}
        </div>
        <div className="home__row">
          {products.slice(2, 5).map((product) => {
            const { id, title, rating, price, image } = product;
            return (
              <Product
                key={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
              />
            );
          })}
        </div>
        <div className="home__row">
          {products.slice(5).map((product) => {
            const { id, title, rating, price, image } = product;
            return (
              <Product
                key={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;