import React, { Component } from 'react';
import styles from './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Hello world!</h1>
      </div>
    );
  }
}
