/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";
import './main.css';
import Search from './searchComponent'
import { Jumbotron, Row, Col, Container, Button } from 'reactstrap';
import AddMovie from './addMovie'
import MovieDetails from './movieDetails'

interface Props {
  isOpen?: boolean;
  onExit?: boolean;
  showMovieDetails?: boolean;
  children?: ReactNode;
  movieDetail?:any;
}

interface State {
  isModalOpen: boolean;
}

export const MainComponent = (props: Props): JSX.Element => {
  const [isModalOpen, toggle] = useState(false);

  const handleAdd = () => toggle(!isModalOpen);
  return (
    <Jumbotron fluid className="jumbotron1">
      {<React.Fragment>
        {!props.showMovieDetails ?
          <Container fluid>
            <Row>
              <Col xs="6"><span className="title1">netflix</span><span className="title2">roulette</span></Col>
              <Col xs="6" className="add-movie-button">
                <Button color="secondary" size="lg" className="add-movie-color" onClick={()=>handleAdd()}>+ ADD MOVIE</Button>
                {isModalOpen && <AddMovie isOpen={isModalOpen} toggle={()=>handleAdd()} />}
              </Col>
            </Row>
            <Row>
              <Col className='find-movie-text'>FIND YOUR MOVIE</Col>
            </Row>
            <Search />
          </Container>
          : <MovieDetails detail={props.movieDetail}/>}
      </React.Fragment>
      }
    </Jumbotron>
  )

}


export default MainComponent;
