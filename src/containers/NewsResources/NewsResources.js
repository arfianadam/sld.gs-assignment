import React, { Component } from 'react';
import styles from './NewsResources.scss';

import NewsCard from './components/NewsCard';

const news = [
  {
    title: 'News title',
    desc: 'Praesent pulvinar sapien fermentum, faucibus diam congue, ultricies turpis.'
  },
  {
    title: 'News title',
    desc: 'Duis non ante ut odio sollicitudin dapibus phasellus non urna sit amet odio'
  },
  {
    title: 'News title',
    desc: 'Lorem ipsum dolor sit amet consectetur'
  },
]; // mock data

export default class NewsResources extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.NewsResources + ' row'}>
        {news.map((news, i) => <NewsCard news={news} key={i} />)}
      </div>
    );
  }
}
