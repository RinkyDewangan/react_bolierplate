/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactNode } from 'react';
import { Col, Row, Button, Form, FormGroup, Input} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './add.css'
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {addMoviesAction} from '../../actions/movieActions';
import {
    GetMoviesAddStateType,
} from '../../types/movieTypes';

interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    onExit?: boolean;
    type?: string;
    toggle? :any;
}
  
interface State {
   title: string,
   movieUrl: string,
   overview: string,
   runtime: string,
   releaseDate: string,
   genre: string,
   type: string,
}

export class AddMovie extends React.Component<Props, State,ReturnType<any>>{
  constructor(props:Props) {
    super(props);
    this.state = { 
        title:'',
        overview:'',
        releaseDate:'',
        runtime:'',
        genre:'',
        movieUrl:'',
        type:'',
    };
  }

  private myChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void=> {
    this.setState({
        ...this.state,
        [event.currentTarget.name]: event.currentTarget.value
    });
  }

  private onSubmit = (event: React.FormEvent<HTMLButtonElement>): void=> {
    alert('movie created succesfully...')
  }

  private onReset = (event: React.FormEvent<HTMLButtonElement>): void=> {
       alert('data reset...')
  }

  private onClose = (event: React.FormEvent<HTMLButtonElement>): boolean=> {
     return !this.props.isOpen
  }

  render(){
  return (
   <>
   <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="modal-custom">
        <ModalHeader> ADD MOVIE
        <button onClick={(e) => this.onClose(e)} className="btn topright"><i className="fa fa-close"></i></button>
        </ModalHeader>
        <ModalBody>
            <Form>
                <Row form>
                    <Col md={8}>
                        <FormGroup>
                            <h6 className='input-title-text'>TITLE</h6>
                            <Input type="text" placeholder="Title" className="input-type" onChange={(e) => this.myChangeHandler(e)} defaultValue={this.state.title}/>
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <h6 className='input-title-text'>RELEASE DATE</h6>
                            <Input type="date" placeholder="Select Date" className="input-type" onChange={(e) => this.myChangeHandler(e)} defaultValue={this.state.releaseDate}/>
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <h6 className='input-title-text'>MOVIE URL</h6>
                            <Input type="text" placeholder="Movie Url here" className="input-type" onChange={(e) => this.myChangeHandler(e)} defaultValue={this.state.movieUrl}/>
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <h6 className='input-title-text'>GENRE</h6>
                            <Input type="text" placeholder="Select Genre" className="input-type" onChange={(e) => this.myChangeHandler(e)} defaultValue={this.state.genre}/>
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <h6 className='input-title-text'>OVERVIEW</h6>
                            <Input type="text" placeholder="Overview here" className="input-type" onChange={(e) => this.myChangeHandler(e)} defaultValue={this.state.overview}/>
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup>
                            <h6 className='input-title-text'>RUNTIME</h6>
                            <Input type="text" placeholder="Runtime here" className="input-type" onChange={(e) => this.myChangeHandler(e)} defaultValue={this.state.runtime}/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" size="lg" onClick={(e) => this.onReset(e)}>RESET</Button>
                <Button color="primary" size="lg" onClick={(e) => this.onSubmit(e)}>SUBMIT</Button>
            </ModalFooter>
    </Modal>
    </>

  );
  }
}

const actions: any = Object.assign({}, addMoviesAction);
function mapStateToProps(state: GetMoviesAddStateType) {
  return {
    movie: state.movie
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie);
