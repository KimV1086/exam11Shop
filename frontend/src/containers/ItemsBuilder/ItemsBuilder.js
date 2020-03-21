import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchItems} from "../../store/actions/itemActions";
import {fetchCategories} from "../../store/actions/categoryActions"

import Items from "../../components/Items/Items";
import Category from "../../components/Category/Category";


class ItemsBuilder extends Component {
  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchCategories();
  }

  getItem = id => {
    this.props.history.push({
      pathname: '/items/' + id
    })
  };

  getCategory = (id) => {
    this.props.fetchItems(id);
  };

  fetchAllItems = () => {
    this.props.fetchItems();
  };

  render() {
    return (
      <Fragment>
        <h2>Categories</h2>
        <Link to={'/'}>
          <h5 onClick={this.fetchAllItems}>All items</h5>
        </Link>
        {this.props.categories.map(category => (
          <Category
            key={category._id}
            category={category.title}
            onClick={() => this.getCategory(category._id)}/>
        ))}
        <h2>All items</h2>
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
    items: state.item.items,
    categories: state.category.categories
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: id => dispatch(fetchItems(id)),
    fetchCategories: () => dispatch(fetchCategories())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsBuilder);