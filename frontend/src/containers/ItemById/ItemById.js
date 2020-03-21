import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchItemsId, fetchDelete} from "../../store/actions/itemActions";

import OneItemById from "../../components/OneItemById/OneItemById";

class ItemById extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchItemsId(id);
  }

  delete = (id) => {
    this.props.fetchDelete(id);
  };

  render() {
    let item = null;
    if (this.props.itemId && this.props.itemId.user) {
      item = <OneItemById
        image={this.props.itemId.image}
        title={this.props.itemId.title}
        description={this.props.itemId.description}
        category={this.props.itemId.category.title}
        phone={this.props.itemId.user.phoneNumber}
        user={this.props.itemId.user.displayName}
        delete={() => this.delete(this.props.itemId._id)}
      />;
    } else {
      item = <p>Loading</p>;
    }
    return (
      <Fragment>
        <h1>Item</h1>
        {item}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemId: state.item.itemId,
    user: state.user.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItemsId: id => dispatch(fetchItemsId(id)),
    fetchDelete: id => dispatch(fetchDelete(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemById);