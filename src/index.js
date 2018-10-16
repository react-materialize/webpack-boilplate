import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../react-materialize/src';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button>Click</Button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
