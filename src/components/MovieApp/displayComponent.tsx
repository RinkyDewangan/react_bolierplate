/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Container, Jumbotron } from "reactstrap";
import Footer from "./footer"
import './display.css'
import MovieList from './movieList'
import {movieList} from '../../data/movieList'
import NavController from './navComponent'
import ErrorBoundary from "./errorBoundary";

const DisplayComponent = ():JSX.Element => (
    <Jumbotron fluid className="jumbotron2">
      <Container fluid>
        <NavController/>
        <ErrorBoundary>
          <MovieList movies={movieList}/>
        </ErrorBoundary> 
      </Container>
      <Footer/>
    </Jumbotron>
)

export default DisplayComponent;