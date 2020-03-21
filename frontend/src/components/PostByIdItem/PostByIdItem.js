import React from 'react';
import {Col, Row, Card, CardBody, CardTitle, CardText} from "reactstrap";

import ItemsThumbnail from "../ItemsThumbnail/ItemsThumbnail";

const PostByIdItem = props => {
  return (
    <Row>
      <Col xs="6">
        <Card color="info" className="mb-5">
          <CardBody>
            <ItemsThumbnail image={props.image}/>
            <p><strong>Title: </strong>{props.title}</p>
            <CardTitle><strong>{props.user}</strong></CardTitle>
            <CardText>{props.description}</CardText>

          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PostByIdItem;