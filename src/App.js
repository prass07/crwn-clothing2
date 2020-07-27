import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/hompepage/homepage.component.jsx';

const HatsPage = () => (
  <h1>Hats</h1>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path ='/' component = {HomePage} />
        <Route path = '/hats' component = {HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
