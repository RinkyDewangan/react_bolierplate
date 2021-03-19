/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './details.css'

interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    onExit?: boolean;
    detail?:any; 
}

const MovieDetails = (props: Props): JSX.Element => {
    
    return (
        <Container fluid style={{"background":"black"}}>
            <Row>
                <Col xs="12"><span className="title1">netflix</span><span className="title2">roulette</span></Col>
                <Col xs="4">
                    <img src={props.detail.Poster} alt='movie' ></img> 
                </Col>
                <Col xs="8">
                    <Row >
                        <Col xs="6"><span className="movie-title-text">Star Wars</span></Col>
                        <Col xs="6">
                            <div className='circle'>{props.detail.Rating}</div>
                        </Col>
                    </Row>
                    <Row className='movie-text'>Oscar Winning Movie</Row>
                    <Row >
                        <Col xs="2" className="common-text">{props.detail.Year}</Col>
                        <Col xs="10" className="common-text"> 154 min</Col>
                    </Row>
                    <Row className="description"> {props.detail.Description}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default MovieDetails;