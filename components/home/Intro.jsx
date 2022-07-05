import React from 'react';
import { Introdb } from '../../src/context/CustomDb/Introdb';
import { Row, Badge,Col, Card, CardImg, Container } from 'react-bootstrap';
function Intro() {
  return (
    <Container id="intro" fluid={true}>
      <Row xxl={'auto'}>
        {Introdb.map((item, index) => {
          return (
            <Col
              key={item.id}
              style={{ backgroundImage: `url(${item.img})` }}
              id="col"
            >
              <Badge>Limeted Offer 75%</Badge>
              <button className="btn btn-dark text-white fw-bold ">BuyNOW</button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Intro;
