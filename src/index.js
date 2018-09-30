import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '../../react-materialize/src';

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
      <Carousel images={[
        'https://picsum.photos/200/?random',
        'https://picsum.photos/200/?random',
        'https://picsum.photos/200/?random',
        'https://picsum.photos/200/?random',
        'https://picsum.photos/200/?random'
      ]} />
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
