/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { Container, Jumbotron } from "reactstrap";
import Footer from "./footer"
import './display.css'
import MovieList from './movieList'
import {movieList} from '../../data/movieList'
import NavController from './navComponent'
import ErrorBoundary from "./errorBoundary";

interface Props {
  children?: ReactNode;
  sortBy?: string;
}

interface State {
  sortKey: string;
}

export default class DisplayComponent extends React.Component<Props, State,ReturnType<any>>{
  constructor(props:Props) {
    super(props);
    this.state = { 
       sortKey : "Year"
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState({
      sortKey: e.target.value
    })
  }

  render(){
    return(
    <Jumbotron fluid className="jumbotron2">
      <Container fluid>
        <NavController sortProp={this.state.sortKey} handler={this.handler}/>
        <ErrorBoundary>
          <MovieList movies={movieList} sortProp={this.state.sortKey}/>
        </ErrorBoundary> 
      </Container>
      <Footer/>
    </Jumbotron>
    )
    }
}
