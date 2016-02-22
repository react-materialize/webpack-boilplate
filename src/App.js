import React, { Component } from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';


export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar className="blue" right>
          <NavItem href=''>Foo</NavItem>
          <NavItem href=''>Bar</NavItem>
        </Navbar>
      </div>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string
};
