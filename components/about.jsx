import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Avatar } from '@chakra-ui/react';
import styles from '../styles/Product.module.scss';
import { Aboutarr, Developers, sponsor,vote } from '../src/context/CustomDb/AboutDb.js';
function About() {
  return (
    <>
      <div md={12} className="mt-3 w-100">
        <h2 className={`text-center ${styles.head2}`}>About us</h2>
      </div>
      <Container spacing={5} className={`${styles.aboutus}`} fluid={true}>
        <Row>
          <Col>
            {Developers.map((item, index) => {
              return (
                <Row className={`${styles.work} m-2`} key={item.id}>
                  <div className="d-flex p-3  justify-content-start align-items-center">
                    <Avatar src={`${item.img}`} alt="loading..." />
                    <div className="d-grid gap-1 ms-3">
                      <h4>{item.name}</h4>
                      <h6>{item.work}</h6>
                    </div>
                  </div>
                  <span>{item.caption}</span>
                </Row>
              );
            })}
          </Col>
          <Col className="d-flex flex-column   justify-content-around w-25">
            {Aboutarr.map((item, index) => {
              return (
                <Row sm={12} key={item.id} className={`${styles.work}  p-4`}>
                  <h4>{item.title}</h4>
                  <span>{item.caption}</span>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h2 className={`text-center ${styles.head2}`}>Sponsor</h2>
        </Row>
        <div className={styles.sponsor}>
          {sponsor.map((item, index) => {
            return (
              <span key={item.id} xl={12} className={``}>
                {item.icon}
              </span>
            );
          })}
        </div>
      </Container>
      <Container>
        <Row>
          <h2 className={`text-center display-6 `}>Send a FeedBack ?</h2>
        </Row>
        <div className={styles.sponsor}>
          {vote.map((item, index) => {
            return (
              <span title={`${item.title}`} key={item.id} xl={12} style={{fontSize:"1rem"}}>
                {item.icon}
              </span>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default About;
