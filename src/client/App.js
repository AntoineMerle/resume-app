import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "test" };
  }

  render() {
    return (
      <div>
          <h1>Hello FUCKING {this.state.username}</h1>
      </div>
    );
  }
}
