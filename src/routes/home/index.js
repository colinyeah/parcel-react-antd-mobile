import React, { Component, Fragment, PureComponent } from 'react';
import { Button } from 'antd-mobile';

class Home extends (PureComponent || Component) {
  render () {
    return (
      <div>
        <Button onClick={() => {this.props.history.push('/detail')}}>detail</Button>
      </div>
    )
  }
}

export default Home;