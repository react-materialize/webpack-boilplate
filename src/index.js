import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from './react-materialize';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <div className='col6'>
          <Input name='group1' type='radio' value='red' label='Red' />
          <Input name='group1' type='radio' value='yellow' label='Yellow' />
        </div>
        <div className='col6'>
          hello
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
          <input type="radio" id="huey2" name="drone" value="huey2" checked />
          <label for="huey2">Huey</label>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
