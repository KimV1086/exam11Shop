import React from 'react';
import {Col, Row, Card, CardBody} from "reactstrap";

import ItemsThumbnail from "../ItemsThumbnail/ItemsThumbnail";

const Items = props => {
  return (
    <Row>
      <Col xs="6">
        <Card color="info" className="mb-5" onClick={props.onClick}>
          <CardBody>
            <ItemsThumbnail image={props.image}/>
            <p><strong>Title: </strong>{props.title}</p>
            <p><strong>Title: </strong>{props.price}</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Items;