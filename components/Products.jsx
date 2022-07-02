import { useState, useEffect, useRef } from 'react';
import { Card, CardImg } from 'react-bootstrap';
import {
  Stack,
  HStack,
  Divider,
  Text,
  Flex,
  Grid,
  Button,
  Badge,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import Rating from 'react-star-rating-component';
const flexbtw="d-flex w-100 justify-content-between align-items-center"
function Products() {
  let settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: true,
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
          slidesToScroll: 1,
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
    <Stack spacing={0} id="reviewcard">
      <ProductTitle title={'Today Deals'} />
      <Slider {...settings}>
        {[...Array(15).keys()].map((item, index) => {
          return (
            <Stack id={''} key={item}>
              <Card className="d-flex card justify-content-center align-items-center">
                <CardImg
                  variant={'center'}
                  src={`${'./img.jpg'}`}
                  alt="loading...."
                  width={250}
                  className="p-3 "
                ></CardImg>
                <Card.Header className={`${flexbtw}`}>
                  <div className="">
                    <Card.Title className="text-center mt-3">
                      {'shopping bag'}
                    </Card.Title>
                    <h5>$456</h5>
                    <Rating
                      name="rating"
                      starCount={5}
                      editing={false}
                      value={2.5}
                      color={"#333"}
                      emptyStarColor={'#7a7a7a'}
                    />
                  </div>
                  <div>
                    <button className={'btn btn-outline-secondary'}>Add to cart</button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    orrect peer dependency "react@^16.2.0". [4/4] Building fresh
                    packages... success Saved lockfile. success Saved 1 new
                    dependenc
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex w-100">
                  <button className="btn d-block w-100 btn-outline-dark">Buy Now</button>
                </Card.Footer>
              </Card>
            </Stack>
          );
        })}
      </Slider>
    </Stack>
  );
}

function ProductTitle({ title }) {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      <HStack spacing={3}>
        <div className="d-grid">
          <Text fontSize={'4xl'} ml={10} color={'#7a7a7a'}>
            {title}
          </Text>
            <Divider w={'5em'} id="divider" />
        </div>
      </HStack>
      <Button mr={5}>View all</Button>
    </Flex>
  );
}
export default Products;
