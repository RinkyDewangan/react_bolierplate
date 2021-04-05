/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactNode } from 'react';
import { Col, Row, Button, Form, FormGroup, Input} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { editMoviesAction } from 'src/actions/movieActions';
import { GetMoviesEditStateType } from 'src/types/movieTypes';
import './add.css'
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { editMovieToList } from 'src/effects/movieEffects';

interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    onExit?: boolean;
}
  
interface State {
   movieId?: string,
   title: string,
   movieUrl: string,
   overview: string,
   runtime: string,
   releaseDate: string,
   genre: string,
}

export class EditMovie extends React.Component<Props, State,ReturnType<any>>{
  baseState: Readonly<State>;
  constructor(props:Props) {
    super(props);
    this.state = { 
        movieId:'ABCD',
        title:'',
        overview:'',
        releaseDate:'',
        runtime:'',
        genre:'',
        movieUrl:'',
    };
    this.baseState = this.state;
  }

  private myChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void=> {
    this.setState({
        ...this.state,
        [event.currentTarget.name]: event.currentTarget.value
    });
  }

  private onSubmit = (event: React.FormEvent<HTMLButtonElement>): void=> {
    alert('movie updated succesfully...')
    editMovieToList(event.currentTarget.id)
  }

  private onReset = (event: React.FormEvent<HTMLButtonElement>): void=> {
    this.setState(this.baseState)
  }

  render(){
  return (
   <Modal isOpen={this.props.isOpen} className="modal-custom">
        <ModalHeader>EDIT MOVIE</ModalHeader>
        <ModalBody>
            <Form>
                <Row form>
                    <Col md={8}>
                        <FormGroup>
                            <h6 className='input-title-text'>MOVIE ID</h6>
                            <Input type="text" placeholder="Movie ID" className="input-type" defaultValue={this.state.movieId}/>
                        </FormGroup>
                    </Col>
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
                <Button color="primary" size="lg" onClick={(e) => this.onSubmit(e)}>SAVE</Button>
            </ModalFooter>
    </Modal>
  );
  }
}


const actions: any = Object.assign({}, editMoviesAction);
function mapStateToProps(state: GetMoviesEditStateType) {
  return {
    movie: state.id
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
)(EditMovie);
