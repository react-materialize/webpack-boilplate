import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from './react-materialize';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.testo = this.testo.bind(this);
  }

  testo(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className='row'>
        <div className='col6'>
          <Select>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </Select>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
