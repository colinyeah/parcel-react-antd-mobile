import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './routes/home';
import Detail from './routes/detail';

class Root extends (PureComponent || Component){

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </Router>
    )}
}

render(<Root />, document.getElementById('root'));