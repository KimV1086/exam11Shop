import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchItemsId} from "../../store/actions/itemActions";

import PostByIdItem from "../../components/PostByIdItem/PostByIdItem";

class ItemById extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchItemsId(id);
  }

  render() {
    let item = null;
    if (this.props.itemId && this.props.itemId.user) {
      item = <PostByIdItem
        image={this.props.itemId.image}
        user={this.props.itemId.user.username}
        description={this.props.itemId.description}
        title={this.props.itemId.title}
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
    fetchItemsId: id => dispatch(fetchItemsId(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemById);