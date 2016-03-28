import React, { Component } from 'react';
import Navbar from './Navbar';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar brand='Logo' className='light-blue lighten-2' right></Navbar>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string
};
