import React, {Component, Fragment} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "reactstrap/es/Container";
import {NotificationContainer} from "react-notifications";

import {logOutUser} from "./store/actions/userActions";

import Toolbar from "./components/UI/Toolbar/Toolbar";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ItemsBuilder from "./containers/ItemsBuilder/ItemsBuilder"
import ItemById from "./containers/ItemById/ItemById";
import NewItem from "./containers/NewItem/NewItem";



class App extends Component {
  render() {
    return (
      <Fragment>
        <NotificationContainer/>
        <header>
          <Toolbar
            user={this.props.user}
            logout={this.props.logOutUser}
          />
        </header>
        <Container className="my-5">
          <Switch>
            <Route path="/" exact component={ItemsBuilder}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/posts/new" exact component={NewItem}/>
            <Route path="/posts/:id" component={ItemById}/>

          </Switch>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));