import React, { Component } from 'react';
import styles from './ProductCard.scss';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.ProductCard}>
        <div className={styles.thumb}></div>
        <div className={styles.productMeta + ' clearfix'}>
          <div className={styles.productName}>Product Title</div>
          <div className={styles.productPrice}>14,95€</div>
        </div>
        <div className={styles.productDesc}>Lorem ipsum sit dolor amet lorem ipsum sit dolor</div>
      </div>
    );
  }
}
