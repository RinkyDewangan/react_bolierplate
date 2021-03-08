/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import './main.css';
import Search from './searchComponent'
import { Jumbotron, Row, Col, Container, Button } from 'reactstrap';
import AddMovie from './addMovie'

interface Props {
  isOpen?: boolean;
  onExit?: boolean;
}

interface State {
  isModalOpen : boolean;
}

export class MainComponent extends React.Component<Props, State, ReturnType<any>>{
  constructor(props:Props){
    super(props);
    this.state = { isModalOpen: false};
  }
  private handleAdd= (e) =>{
    this.setState({ isModalOpen: true });
  }

  private toggle = () => {
    this.setState({
      isModalOpen : !this.state.isModalOpen
    })
    return this.state.isModalOpen
  };

  render(){
    return( 
      <Jumbotron fluid className="jumbotron1">
        <Container fluid>
          <Row>
            <Col xs="6"><span className="title1">netflix</span><span className="title2">roulette</span></Col>
            <Col xs="6" className="add-movie-button">
              <Button color="secondary" size="lg" className="add-movie-color" onClick={this.handleAdd}>+ ADD MOVIE</Button>
              {this.state.isModalOpen && <AddMovie isOpen={this.state.isModalOpen} toggle={this.toggle}/>}
            </Col>
          </Row>
          <Row>
            <Col className='find-movie-text'>FIND YOUR MOVIE</Col>
         </Row>
         <Search/>
        </Container>
      </Jumbotron>
  )
  }
}
export default MainComponent;