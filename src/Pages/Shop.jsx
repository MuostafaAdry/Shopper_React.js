import React from 'react';
import Hero from '../components/Shop/Hero/Hero';
import PopularItem from '../components/Shop/PopularItem/PopularItem';
import Offers from '../components/Shop/Offers/Offers';
import NewCollection from '../components/Shop/NewCollection/NewCollection';
import NewsLetter from '../components/Shop/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
       <Hero/> 
       <PopularItem/>  
         <Offers/>
         <NewCollection/>
         <NewsLetter/>
    </div>
  );
}

export default Shop;
