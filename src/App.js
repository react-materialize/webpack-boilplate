import React, { Component } from 'react';
import Footer from './Footer';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer className="light-blue" pepe={true}>
        <p className="white-text">hey</p>
        <p className="white-text">ho</p>
      </Footer>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string
};
