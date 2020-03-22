import React from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import { element } from 'prop-types';
import { Container, MarginBox, Carousel } from './CarouselSlider.style';

const settings = {
  className: '',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const CarouselSlider = ({ firstCard, secondCard, thirdCard }) => {
  return (
    <Container>
      <MarginBox>
        <Carousel>
          <Slider dots adaptiveHeight arrows={false} settings={settings}>
            <div>{firstCard}</div>
            <div>{secondCard}</div>
            <div>{thirdCard}</div>
          </Slider>
        </Carousel>
      </MarginBox>
    </Container>
  );
};

CarouselSlider.propTypes = {
  firstCard: element.isRequired,
  secondCard: element.isRequired,
  thirdCard: element.isRequired
};

export default CarouselSlider;
