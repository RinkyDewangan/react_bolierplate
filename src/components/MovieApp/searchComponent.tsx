import React, { Component } from "react";
import { Button, Input , Row, Col} from 'reactstrap';
class Search extends Component{
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Row>
           <Col xs="8">
          <Input
              type="text"
              placeholder="What do you want to watch?">
          </Input>
          </Col>
          <Col xs="3">
          <Button>SEARCH</Button>
          </Col>
      </Row>
      </React.Fragment>
    );
  }
}

export default Search;
