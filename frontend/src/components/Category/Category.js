import React from 'react';
import {Col, Row} from "reactstrap";

const Category = props => {
  return (
    <Row>
      <Col xs="6" onClick={props.onClick}>
        <p><strong>{props.category}</strong></p>
      </Col>
    </Row>
  );
};

export default Category;