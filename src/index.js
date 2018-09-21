import React from 'react';
import ReactDOM from 'react-dom';
import { TextInput } from './react-materialize';

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
          <TextInput onChange={this.testo} type='email' label='email' validate error='needs proper email' />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
