import React, { Component, Fragment, PureComponent } from 'react';
import { Button } from 'antd-mobile';
import { Title } from 'components';
import './index.less';

class Home extends (PureComponent || Component) {
  render () {
    return (
      <div className="home">
        <Title>Hello, parcel</Title>
        <Button type="primary" inline onClick={() => {this.props.history.push('/detail')}}>detail</Button>
      </div>
    )
  }
}

export default Home;