import React from 'react';
import {Col, Row, Card, CardBody, CardTitle, CardText, Button} from "reactstrap";

import ItemsThumbnail from "../ItemsThumbnail/ItemsThumbnail";

const OneItemById = props => {
  return (
    <Row>
      <Col xs="6">
        <Card color="info" className="mb-5">
          <CardBody>
            <ItemsThumbnail image={props.image}/>
            <p><strong>Title: </strong>{props.title}</p>
            <CardText><strong>Description: </strong>{props.description}</CardText>
            <CardTitle><strong>Category: </strong>{props.category}</CardTitle>
            <CardTitle><strong>Phone: </strong>{props.phone}</CardTitle>
            <CardTitle><strong>Seller: </strong>{props.user}</CardTitle>
            <Button onClick={props.delete}>Delete</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default OneItemById;