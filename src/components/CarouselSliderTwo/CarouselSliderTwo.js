import React from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import { element, number } from 'prop-types';
import { Container, MarginBox, Carousel, Box } from './CarouselSliderTwo.style';

const CarouselSlider = ({
  firstCard,
  secondCard,
  thirdCard,
  fourthCard,
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
          >
            <Box>
              <div>{firstCard}</div>
              <div>{secondCard}</div>
            </Box>
            <Box>
              <div>{thirdCard}</div>
              <div>{fourthCard}</div>
            </Box>
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
  fourthCard: element.isRequired,
  slidesToShow: number.isRequired,
  slidesToScroll: number.isRequired
};

export default CarouselSlider;
