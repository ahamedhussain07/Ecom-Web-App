import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { HStack, Text, Stack, Img } from '@chakra-ui/react';
import { CarouselImg } from '../CustomDb/CarouselDb';
import { SiPaytm, SiPaypal } from 'react-icons/si';

function CarouselContent() {
  return (
    <Stack mb={5} bg={'blackAlpha.800'}>
      <Carousel className="slider">
        {CarouselImg.map((item, index) => {
          return (
            <Carousel.Item key={item.id}>
              <img src={`${item.img}`} alt="loading..." />
              <Carousel.Caption id="carouselcaption">
                <h2>{item.caption}</h2>
                {item.icon}
                {item.id === 5 && (
                  <>
                    ||<h4>Paytm</h4>
                    <SiPaytm></SiPaytm>
                    ||<h4>Paypal</h4>
                    <SiPaypal />
                  </>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Stack>
  );
}

export default CarouselContent;

  //         return(
  //       <Carousel.Item>
  //  ||<h4>Paytm</h4>
  //           <SiPaytm></SiPaytm>
  //           ||<h4>Paypal</h4>
  //           <SiPaypal />
  //      </Carousel.Item>
  //       })