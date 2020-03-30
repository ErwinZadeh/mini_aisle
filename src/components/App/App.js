import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,

  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';


import AddItem from '../AddItem/AddItem'
import MyList from '../MyList/MyList'
import Stores from '../Stores/Stores'

import './App.css';

import Header from '../Header/Header';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <section>
          <Header />
          {/* <Nav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            {/* <Redirect exact from="/" to="/home" /> */}
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/"
              component={AddItem}
            />
            <ProtectedRoute
              exact
              path="/MyList"
              component={MyList}
            />
            <ProtectedRoute
              exact
              path="/Stores"
              component={Stores}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>


          {/* <div className="App">
            <header className="App-header">
              <h2 className="App-title">Mini AISLE!</h2>
            </header>
            <br />
            <main>
              <Route exact path='/' component={AddItem} />
              <Route path='/MyList' component={MyList} />
              <Route path='/Stores' component={Stores} />
            </main>
            <footer className="App-footer"></footer>
          </div> */}

          <Nav />
          <Footer />
        </section>
      </Router>
    )
  }
}

export default connect()(App);
