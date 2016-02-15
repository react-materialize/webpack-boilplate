import React, { Component } from 'react';
import { Button } from 'react-materialize';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button>Hi {this.props.name}!</Button>
    );
  }
}

App.propTypes = { name: React.PropTypes.string };
