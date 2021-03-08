
import React from "react";
import './display.css';
import { Row, Col} from 'reactstrap';

class Footer extends React.Component{
  render(): JSX.Element {
    return (
      <Row className="footer-row">
        <Col><span className="footer-title1">netflix</span><span className="footer-title2">roulette</span></Col>
      </Row>
    );
  }
}

export default Footer;
