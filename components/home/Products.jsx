import { useState, useEffect, useRef } from 'react';
import { Card, CardImg, Container } from 'react-bootstrap';
import {
  Stack,
  HStack,
  Divider,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import Rating from 'react-star-rating-component';
const flexbtw = 'd-flex  justify-content-between align-items-start';
function Products() {
  let settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: true,
    speed:3000,
    autoplay:true,
    autoplaySpeed:10000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <ProductTitle title={'Today Deals'} />
        <Slider {...settings} className={`mt-5 productslider ${flexbtw} aligns-item-start `} >
          {[...Array(15).keys()].map((item, index) => {
            return (
              <Card className="d-flex card justify-content-center align-items-center" key={item}>
                <CardImg
                  variant={'center'}
                  src={`${'./img.jpg'}`}
                  alt="loading...."
                ></CardImg>
                <Card.Body className={`flex-column ${flexbtw}`}>
                  <div className="">
                    <Card.Title className="text-center ">
                      {'shopping bag'}
                    </Card.Title>
                    <h5>$456</h5>
                    <Rating
                      name="rating"
                      starCount={5}
                      editing={false}
                      value={2.5}
                      color={'#333'}
                      emptyStarColor={'#7a7a7a'}
                    />
                  </div>
                  <p>
                    orrect peer dependency "react@^16.2.0". [4/4] Building fresh
                    packages... success Saved lockfile. success Saved 1 new
                    dependenc
                  </p>
                </Card.Body>
                {/* <Card.Body>
                  <Card.Text>
                    orrect peer dependency "react@^16.2.0". [4/4] Building fresh
                    packages... success Saved lockfile. success Saved 1 new
                    dependenc
                  </Card.Text>
                </Card.Body> */}
                <Card.Footer className={`${flexbtw} gap-3`}>
                  <button className="btn  btn-outline-dark">
                    Buy Now
                  </button>
                  <button className="btn   btn-outline-dark">
                    Add To Cart
                  </button>
                </Card.Footer>
              </Card>
            );
          })}
        </Slider>
    </>
  );
}

function ProductTitle({ title }) {
  return (
    <Flex justifyContent={'space-between'} id="productTitle" mt={5} alignItems={'center'}>
      <HStack spacing={3}>
        <div className={``}>
          <h2 fontSize={'4xl'} ml={10} color={'#7a7a7a'}>
            {title}
          </h2>
        </div>
      </HStack>
      <Button mr={5}>View all</Button>
    </Flex>
  );
}
export default Products;
