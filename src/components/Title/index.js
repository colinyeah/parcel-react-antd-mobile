import React, { Component, PureComponent } from 'react';
import './index.less';

class Title extends (PureComponent || Component) {
  render () {
    return (
      <h1 className="title">
        {this.props.children}
      </h1>
    )
  }
}

export default Title;