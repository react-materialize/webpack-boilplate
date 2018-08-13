import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FeatureDiscovery } from './react-materialize';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    }
  }

  render() {
    return (
      <div>
        <Button onClick={() => { this.setState({ opened: !this.state.opened }) }}>Open</Button>
        <Button large floating fabClickOnly fab='horizontal' icon='edit' waves='light' className='red' id='menu'>
          <Button floating icon='insert_chart' className='red' />
          <Button floating icon='format_quote' className='yellow darken-1' />
          <Button floating icon='publish' className='green' />
          <Button floating icon='attach_file' className='blue' />
        </Button>

        <FeatureDiscovery className='red white-text' target='menu' open={this.state.opened}>
          <h5>Title</h5>
          <p>A bunch of text</p>
        </FeatureDiscovery>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
