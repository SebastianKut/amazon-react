import React from 'react';
import './Home.css';
import CategoryRow from './CategoryRow';
import CategoryBanner from './CategoryBanner';
import { categoryRows, categoryBanners } from './categories';
import Carousel from 'react-elastic-carousel';
import { heroImages } from './data/heroImages';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel pagination={false} enableTilt={true}>
          {heroImages.map((img, index) => (
            <img className="home__image" src={img} key={index} />
          ))}
        </Carousel>
        <CategoryRow categories={categoryRows.slice(0, 4)} />
        <CategoryRow categories={categoryRows.slice(4, 8)} />
        <CategoryBanner
          title={categoryBanners[0].title}
          link={categoryBanners[0].link_title}
          images={categoryBanners[0].images}
        />
        <CategoryBanner
          title={categoryBanners[1].title}
          link={categoryBanners[1].link_title}
          images={categoryBanners[1].images}
        />
        <CategoryBanner
          title={categoryBanners[2].title}
          link={categoryBanners[2].link_title}
          images={categoryBanners[2].images}
        />
        <CategoryRow categories={categoryRows.slice(8)} />
        <CategoryBanner
          title={categoryBanners[3].title}
          link={categoryBanners[3].link_title}
          images={categoryBanners[3].images}
        />
        <CategoryBanner
          title={categoryBanners[4].title}
          link={categoryBanners[4].link_title}
          images={categoryBanners[4].images}
        />
      </div>
    </div>
  );
}

export default Home;
