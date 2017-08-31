import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './FeaturedProducts.scss';

import ProductCard from 'components/ProductCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevButton = ({className, style, onClick}) => <div
  className={`${styles.slickButton} ${styles.prev}`}
  style={{...style}}
  onClick={onClick}><i className="fa fa-angle-left" aria-hidden="true"></i></div>

const NextButton = ({className, style, onClick}) => <div
  className={`${styles.slickButton} ${styles.next}`}
  style={{...style}}
  onClick={onClick}><i className="fa fa-angle-right" aria-hidden="true"></i></div>

const sliderSettings = {
  dots: false,
  slidesToShow: 4,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ],
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />
}

export default class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.slick.innerSlider.onWindowResized();
    }, 0);
  }

  render() {
    return (
      <div className={styles.FeaturedProducts + ' row'}>
        <Slider {...sliderSettings} ref={ref => {this.slick = ref}}>
          <div><ProductCard /></div>
          <div><ProductCard /></div>
          <div><ProductCard /></div>
          <div><ProductCard /></div>
          <div><ProductCard /></div>
          <div><ProductCard /></div>
        </Slider>
        <button className={styles.shopButton}>Shop the range</button>
      </div>
    );
  }
}
