import React, {Component, Fragment} from 'react';
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";

import FormElement from "../../components/UI/Form/FormElement";
import connect from "react-redux/es/connect/connect";


class AddItemForm extends Component {

  state = {
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  };

  inputChangeHandler = event => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  submitFormHandler = event => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });
    this.props.onSubmit(formData);
  };

  fileChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    })

  };

  fieldHasError = fieldName => {
    return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
  };

  render() {
    return (
      <Fragment>
        {this.props.error && this.props.error.global && (
          <Alert color="danger">
            Check the internet connection
          </Alert>
        )}
        <Form onSubmit={this.submitFormHandler}>
          <FormElement
            propertyName="title"
            title="Title"
            type="text"
            value={this.state.title}
            onChange={this.inputChangeHandler}
            error={this.fieldHasError('title')}
            placeholder="Title of the item"
          />
          <FormElement
            propertyName="price"
            title="Price"
            type="number"
            required min="0"
            value={this.state.price}
            onChange={this.inputChangeHandler}
            error={this.fieldHasError('price')}
            placeholder="Price of the item"
          />
          <FormElement
            propertyName="description"
            title="Description"
            type="text"
            value={this.state.description}
            onChange={this.inputChangeHandler}
            error={this.fieldHasError('description')}
            placeholder="Enter item description"
          />
          <FormElement
            propertyName="image"
            title="Image"
            type="file"
            onChange={this.fileChangeHandler}
            error={this.fieldHasError('image')}
          />
          <FormGroup row>
            <div>Category: </div>
            <select name="category" onChange={this.inputChangeHandler} value={this.state.category}>
              <option disabled value="">Select</option>
              {this.props.categories.map(categoryId => (
                <option key={categoryId._id} value={categoryId._id}>{categoryId.title}</option>
              ))}
            </select>
          </FormGroup>
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}/>
            <Button type="submit" color="primary">Send item</Button>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categories
  }
};

export default connect(mapStateToProps)(AddItemForm);