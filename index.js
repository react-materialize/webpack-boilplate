import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-materialize';

const App = ({name}) =>
  <Button> Hi {name}!</Button>;

ReactDOM.render(
  <App name="stranger"/>, document.querySelector('.react-root')
);
