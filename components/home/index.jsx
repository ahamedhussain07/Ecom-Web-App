import { useState, useEffect } from 'react';
import CarouselContent from './Carousel';
import ProductUI from './Products';
import Aboutus from '../about';
import FooterCompo from '../footer';
import { Introdb } from '../../src/context/CustomDb/Introdb';

import Intro from './Intro';
function HomePage({ productsData }) {
  const [Products, setProducts] = useState([]);
  const FilterProducts = () => {
    let MobileDb = filterFunc('Mobile');
    let gamesDb = filterFunc('videogames');
    let fashinoDb = filterFunc('fashino');
    let furnitureDb = filterFunc('furniture');
    let electronicsDb = filterFunc('Electronics');
    setProducts([MobileDb, gamesDb, fashinoDb, furnitureDb, electronicsDb]);
  };
  const filterFunc = (productType) => {
    let productsItem = productsData.filter(
      (item, i) => item.productType == productType
    );
    return { productsItem };
  };
  useEffect(() => {
    FilterProducts();
  }, []);
  return (
    <>
      <article>
        <section id="carousel">
          <CarouselContent />
        </section>
        <section id="introcontainer">
          <Intro Db={Introdb} />
        </section>
        {Products.map((item, i) => {
          return (
            <section id="Products">
              <ProductUI items={item} />
            </section>
          );
        })}
      </article>
      <section>
        <Aboutus />
      </section>
      <footer><FooterCompo/></footer>
    </>
  );
}

export default HomePage;
