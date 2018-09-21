import React from 'react';
import ReactDOM from 'react-dom';
import { TextInput, Section } from './react-materialize';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section>
        <div className='row'>
          <div className='col6'>
            <TextInput label='email' validate type='email' />
          </div>
        </div>
      </Section>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
