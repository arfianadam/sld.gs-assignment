import React, { Component } from 'react';
import styles from './BigHeader.scss';

import TitleBox from './components/TitleBox';

export default class BigHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <div className={styles.BigHeader}>
        <TitleBox title={title} />
      </div>
    );
  }
}
