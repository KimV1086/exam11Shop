import React, {Component, Fragment} from 'react';
import AddItemForm from "../../components/AddItemForm/AddItemForm";
import {sendItem} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import {fetchCategories} from "../../store/actions/categoryActions";

class NewItem extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  createItem = itemData => {
    this.props.sendItem(itemData).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <Fragment>
        <h2>New item</h2>
        <AddItemForm
          onSubmit={this.createItem}
          categories={this.props.categories}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories
});

const mapDispatchToProps = dispatch => ({
  sendItem: itemData => dispatch(sendItem(itemData)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);