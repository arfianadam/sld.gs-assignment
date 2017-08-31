import React, { Component } from 'react';
import styles from './App.scss';

import BigHeader from 'containers/BigHeader';
import Section from 'containers/Section';
import FeaturedProducts from 'containers/FeaturedProducts';
import NewsResources from 'containers/NewsResources';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.App}>
        <BigHeader
          title="Lorem ipsum sit dolor lorem amet"
        />
        <Section title="Feature Products">
          <FeaturedProducts />
        </Section>
        <Section title="News and Resources">
          <NewsResources />
        </Section>
      </div>
    );
  }
}
