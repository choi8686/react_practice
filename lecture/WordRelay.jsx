const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: 'Hello, webpack!',
  };

  render() {
    return <div>{this.state.text}</div>;
  }
}

module.exports = WordRelay;
