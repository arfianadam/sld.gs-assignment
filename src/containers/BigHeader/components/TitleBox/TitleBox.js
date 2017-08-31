import React, { Component } from 'react';
import styles from './TitleBox.scss';

export default class TitleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <div className={styles.TitleBox}>
        <h3>{title}</h3>
      </div>
    );
  }
}
