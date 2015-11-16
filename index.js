import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-materialize/dist/Button';

class XButton extends React.Component {
  render() {
    return <Button>test {this.props.children}</Button>;
  }
}

class App extends React.Component {
    render() {
        return <XButton>Hi, {this.props.name}!</XButton>;
    }
}

ReactDOM.render(
    <App name="stranger"/>,
    document.querySelector('.react-root')
);
