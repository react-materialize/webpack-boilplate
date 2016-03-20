import React, { Component } from 'react';
import CardPanel from './CardPanel';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardPanel className="teal lighten-4 black-text">
            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </CardPanel>
      </div>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string
};
