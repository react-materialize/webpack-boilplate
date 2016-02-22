import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Breadcrumb>hi</Breadcrumb>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string
};
