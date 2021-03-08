/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactNode } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter , Button} from 'reactstrap';
import './add.css'

interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    onExit?: boolean;
    type?: string;
}

export default class DeleteMovie extends React.Component<Props,ReturnType<any>>{
 
  private onDelete = (event: React.FormEvent<HTMLButtonElement>): void=> {
       alert('movie deleted...')
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
