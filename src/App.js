import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/hompepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component';
import SigninAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
      <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path ='/' component = {HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route path = '/signin' component = {SigninAndSignUpPage} />
        </Switch>
      </div>
    );
    }
}

export default App;
