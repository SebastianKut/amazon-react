import React from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { products } from '../../data/products';

function Shop() {
  return (
    <div className="shop">
      <div className="shop__container">
        <img
          className="shop__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_2x._CB412256578_.jpg"
          alt=""
        />
        <div className="shop__row">
          {products.slice(0, 5).map((product) => {
            const { id, title, rating, price, image, global_ratings } = product;
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
                global_ratings={global_ratings}
              />
            );
          })}
        </div>
        <div className="shop__row">
          {products.slice(5, 10).map((product) => {
            const { id, title, rating, price, image, global_ratings } = product;
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
                global_ratings={global_ratings}
              />
            );
          })}
        </div>
        <div className="shop__row">
          {products.slice(10, 15).map((product) => {
            const { id, title, rating, price, image, global_ratings } = product;
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
                global_ratings={global_ratings}
              />
            );
          })}
        </div>
        <div className="shop__row">
          {products.slice(15, 20).map((product) => {
            const { id, title, rating, price, image, global_ratings } = product;
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
                global_ratings={global_ratings}
              />
            );
          })}
        </div>
        <div className="shop__row">
          {products.slice(20, 25).map((product) => {
            const { id, title, rating, price, image, global_ratings } = product;
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
                global_ratings={global_ratings}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
