import React, { Component } from 'react';
import Poster from './components/poster';
import Home from './components/home';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/poster' component={Poster}/>
      </Switch>
    );
  }
}

export default App;
