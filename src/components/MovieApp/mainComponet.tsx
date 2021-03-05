import React from "react";
import './main.css';
import Search from './searchComponent'
import { Jumbotron, Row, Col, Container, Button } from 'reactstrap';

export const MainComponent = (): JSX.Element => ( 
      <Jumbotron fluid className="jumbotron1">
        <Container fluid>
          <Row>
            <Col xs="6"><span className="title1">netflix</span><span className="title2">roulette</span></Col>
            <Col xs="6" className="add-movie-button"><Button color="secondary" size="lg" className="add-movie-color">+ ADD MOVIE</Button></Col>
          </Row>
          <Row>
            <Col className='find-movie-text'>FIND YOUR MOVIE</Col>
         </Row>
         <Search/>
        </Container>
      </Jumbotron>
  )
export default MainComponent;