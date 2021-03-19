/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";
import { Container, Jumbotron } from "reactstrap";
import Footer from "./footer"
import './display.css'
import MovieList from './movieList'
import { movieList } from '../../data/movieList'
import NavController from './navComponent'
import ErrorBoundary from "./errorBoundary";

interface Props {
  children?: ReactNode;
  sortBy?: string;
  showMovieDetails?: any;
  showDetailsHandler?: any;
}

interface State {
  sortKey: string;
}

export const DisplayComponent = (props: Props): JSX.Element => {

  const [sortKey, keyHandler] = useState("Year");

  const handler = (e) => keyHandler(e.target.value);
  
  const showDetailsHandler = (status,movie) => {
    props.showMovieDetails(status,movie)
  }

  return (
    <ErrorBoundary>
    <Jumbotron fluid className="jumbotron2">
      <Container fluid>
        <NavController sortProp={sortKey} handler={(e) => handler(e)} />
        <ErrorBoundary>
          {props.children}
          <MovieList movies={movieList} sortProp={sortKey} showDetails={showDetailsHandler}
          />
        </ErrorBoundary>
      </Container>
      <Footer />
    </Jumbotron>
    </ErrorBoundary>
  )

}

export default DisplayComponent;
