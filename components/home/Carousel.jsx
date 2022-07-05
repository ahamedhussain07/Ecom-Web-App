import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { HStack, Text, Stack, Img } from '@chakra-ui/react';
import CarouselImg  from '../../src/context/CustomDb/CarouselDb';
import { SiPaytm, SiPaypal } from 'react-icons/si';

function CarouselContent() {
  return (
    <Carousel className="slider">
      {CarouselImg.map((item, index) => {
        return (
          <Carousel.Item key={item.id}>
            <img src={`${item.img}`} alt="loading..." />
            <Carousel.Caption id="carouselcaption">
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselContent;
