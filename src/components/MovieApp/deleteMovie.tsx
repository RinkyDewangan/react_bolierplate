/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactNode, ReactPropTypes } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter , Button} from 'reactstrap';
import { GetMoviesDeleteStateType } from 'src/types/movieTypes';
import './add.css'
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { deleteMoviesAction } from 'src/actions/movieActions';
import { deleteMovieFromList } from 'src/effects/movieEffects';

interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    onExit?: boolean;
    type?: string;
}

export class DeleteMovie extends React.Component<Props,ReturnType<any>>{
  constructor(props)
  {
    super(props);
  }
 
  private onDelete = (event: React.FormEvent<HTMLButtonElement>): void=> {
       alert('movie deleted...')
       deleteMovieFromList(event.currentTarget.id); 
  }
  

  render(){
  return (
   <>
   <Modal isOpen={this.props.isOpen} className="modal-custom">
        <ModalHeader>DELETE MOVIE</ModalHeader>
        <ModalBody> Are You Sure You want to delete this movie ?</ModalBody>   
        <ModalFooter>
            <Button color="danger" size="lg" onClick={(e) => this.onDelete(e)}>CONFIRM</Button>
        </ModalFooter>
    </Modal>
    </>
  );
  }
}

const actions: any = Object.assign({}, deleteMoviesAction);
function mapStateToProps(state: GetMoviesDeleteStateType) {
  return {
    id: state.id
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
)(DeleteMovie);
