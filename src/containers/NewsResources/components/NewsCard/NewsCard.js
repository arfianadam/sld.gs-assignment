import React, { Component } from 'react';
import styles from './NewsCard.scss';

import lionImage from 'assets/lion.jpeg';

export default class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { news } = this.props;
    return (
      <div className={styles.NewsCard + ' col-sm-4'}>
        <div className={styles.thumb}>
          <img src={lionImage} alt="" className={styles.thumbimg}/>
        </div>
        <div className={styles.newsMeta}>
          <div className={styles.title}>{news.title}</div>
          <div className={styles.description}>{news.desc}</div>
        </div>
        <a href="#">Read more</a>
      </div>
    );
  }
}
