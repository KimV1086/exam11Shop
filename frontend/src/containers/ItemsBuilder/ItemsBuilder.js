import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchItems} from "../../store/actions/itemActions";

import Items from "../../components/Items/Items";


class ItemsBuilder extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  getItem = id => {
    this.props.history.push({
      pathname: '/items/' + id
    })
  };

  render() {
    return (
      <Fragment>
        <h1>All items</h1>
        {this.props.items.map(item => (
          <Items
            key={item._id}
            image={item.image}
            title={item.title}
            price={item.price}
            onClick={() => this.getItem(item._id)}/>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.item.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsBuilder);