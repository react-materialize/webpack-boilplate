import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Button } from 'react-materialize';

const App = ({name}) =>
  <Dropdown trigger={
    <Button>Drop me!</Button>
  }>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Bye</p>
  </Dropdown>;

ReactDOM.render(
  <App />, document.getElementById('root')
);
