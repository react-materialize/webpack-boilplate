import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-materialize';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>Hi {this.props.name}!</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <App name="stranger"/>,
  document.querySelector('.react-root')
);
