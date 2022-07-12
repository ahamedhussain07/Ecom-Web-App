import React from 'react';
import { Row, Badge,Col, Card, CardImg, Container } from 'react-bootstrap';
function Intro({ Db, product }) {
  console.log(Db);
  return (
    <Container id="intro" fluid={true} className={`${product && 'banner'}`}>
      <Row xxl={'auto'}>
        {Db.map((item, index) => {
          return (
            <Col
              key={item.id}
              style={{ backgroundImage: `url(${item.img || item.image})` }}
              className={`${item.productType && 'banner'}`}
              id={'col'}
            >
              <h4>{item.name}</h4>
              <Badge>Limeted Offer 75%</Badge>
              <button className="btn btn-dark text-white fw-bold ">
                Buy ${item.price}
              </button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Intro;
