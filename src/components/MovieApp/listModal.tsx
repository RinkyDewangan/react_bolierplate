/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import EditMovie from './editMovie';
import DeleteMovie from './deleteMovie';
import './list.css'

interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    onExit?: boolean;
}

interface State {
    isModalOpen? : boolean;
    dropdownOpen? :boolean;
}

export default class ListModal extends React.Component<Props,State,ReturnType<any>>{

constructor(props:Props){
    super(props);
    this.state = { isModalOpen: false, dropdownOpen:false};
}

  private toggle = () => {
      this.setState({
          dropdownOpen : !this.state.dropdownOpen
      })
  };

  private onClick= () =>{
        this.setState({ isModalOpen: true });
  }

  render(){
  return (
    <Dropdown className='dropdown-custom' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle></DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={this.onClick}>EDIT</DropdownItem>
            {this.state.isModalOpen && <EditMovie isOpen={this.state.isModalOpen}/>}
        <DropdownItem onClick={this.onClick}>DELETE</DropdownItem>
            <DeleteMovie isOpen={this.state.isModalOpen}/>
      </DropdownMenu>
    </Dropdown>
  );
  }
}


