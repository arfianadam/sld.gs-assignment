import React, { Component } from 'react';
import styles from './Section.scss';

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={styles.Section + " container"}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        {children}
      </div>
    );
  }
}
