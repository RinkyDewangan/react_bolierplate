import React from "react";
import './main.css';
import { Row, Col} from 'reactstrap';

export const HeaderComponent = (): JSX.Element => ( 
    <Row>
    <Col xs="6" className = 'top-left-header'><span className="title1">netflix</span><span className="title2">roulette</span></Col>
    </Row>
  )
export default HeaderComponent;