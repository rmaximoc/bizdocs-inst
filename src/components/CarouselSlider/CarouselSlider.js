import React from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import { element, number } from 'prop-types';
import { Container, MarginBox, Carousel } from './CarouselSlider.style';

const CarouselSlider = ({
  firstCard,
  secondCard,
  thirdCard,
  slidesToShow,
  slidesToScroll
}) => {
  return (
    <Container>
      <MarginBox>
        <Carousel>
          <Slider
            variableWidth={false}
            dots
            adaptiveHeight
            arrows={false}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            appendDots={dots => (
              <div
                style={{
                  bottom: '0px'
                }}
              >
                <ul style={{ margin: '0px' }}> {dots} </ul>
              </div>
            )}
          >
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
  thirdCard: element.isRequired,
  slidesToShow: number.isRequired,
  slidesToScroll: number.isRequired
};

export default CarouselSlider;
