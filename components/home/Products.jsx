import { useState, useEffect, useRef } from 'react';
import { Card, CardImg, Container } from 'react-bootstrap';
import { Stack, HStack, Divider, Text, Flex, Button } from '@chakra-ui/react';
import IntroDb from './Intro';
import Slider from 'react-slick';
import Rating from 'react-star-rating-component';
const flexbtw = 'd-flex  justify-content-start align-items-start';
let settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 2,
  infinite: true,

  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
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
function Products({ items }) {
  const [Offers, setOffers] = useState([]);
  const getTitle = items.productsItem.map((item, i) => item.productType)[0];
  const limitedoffers = () => {
    const getoffers = items.productsItem.filter((item, i) => item.price < 20).splice(0,3)
    console.log(getoffers);
    setOffers(getoffers);
  };
  useEffect(() => {
    limitedoffers();
  }, []);

  return (
    <>
      <Flex
        justifyContent={'space-between'}
        id="productTitle"
        p={10}
        alignItems={'center'}
      >
        <HStack spacing={5}>
          <div className={`title p-3`}>
            <h2 color={'#7a7a7a'}>{getTitle}</h2>
          </div>
        </HStack>
        <Button mr={5}>View all</Button>
      </Flex>
      <IntroDb Db={Offers} product={true} />
      <Slider
        {...settings}
        className={`mt-5 productslider ${flexbtw} aligns-item-start `}
      >
        {items.productsItem.map((item, index) => {
          return (
            <Card
              className="d-flex card justify-content-start align-items-start"
              key={item}
            >
              <CardImg
                variant={'top'}
                src={`${item.image}`}
                id="img"
                alt="loading...."
              ></CardImg>
              <Card.Body className={`flex-column ${flexbtw}`}>
                <div className="">
                  <Card.Title className="">
                    {item.name.split('').length > 15
                      ? item.name.substring(0, 15)
                      : item.name}
                  </Card.Title>
                  <strong>${item.price}</strong>
                  <br />
                  <Rating
                    name="rating"
                    starCount={5}
                    editing={false}
                    value={item.reviews?.rating || 2.5}
                    id={'rating'}
                    starColor={'#333'}
                    emptyStarColor={'#7a7a7a'}
                  />
                </div>
              </Card.Body>
              <Card.Footer className={`${flexbtw} gap-3`}>
                <button className="btn  btn-outline-dark">Buy Now</button>
                <button className="btn   btn-outline-dark">Add To Cart</button>
              </Card.Footer>
            </Card>
          );
        })}
      </Slider>
    </>
  );
}

export default Products;
