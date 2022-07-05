import React from 'react'
import CarouselContent from './Carousel';
import Products from './Products';
import Intro from './Intro';
function HomePage() {
  return (
    <>
      <article>
        <section id="carousel">
          <CarouselContent />
        </section>
        <section id="introcontainer">
          <Intro />
        </section>
        <section id="Products"><Products /></section>
      </article>
    </>
  );
}

export default HomePage