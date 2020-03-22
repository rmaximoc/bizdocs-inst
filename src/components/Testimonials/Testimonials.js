import React from 'react';
import {
  Container,
  MarginBox,
  GreenBackground,
  Title,
  CardsBox,
  Strip
} from './Testimonials.style';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import TestimonialCard from '../TestimonialsCard/TestimonialCard';
import testimonialContent from './testimonialContent';

const Testimonials = () => {
  return (
    <Container>
      <Strip />
      <GreenBackground />
      <MarginBox>
        <Title>Testemunhos</Title>
        <CardsBox>
          {testimonialContent.map(card => (
            <TestimonialCard
              image={card.image}
              text={card.text}
              name={card.name}
              key={card.image}
              minHeight={card.height}
              marginTop={card.marginTop}
            />
          ))}
        </CardsBox>
        <CarouselSlider
          firstCard={
            <TestimonialCard
              image={testimonialContent[0].image}
              text={testimonialContent[0].text}
              name={testimonialContent[0].name}
              key={testimonialContent[0].image}
              minHeight="467px"
              marginTop="0"
            />
          }
          secondCard={
            <TestimonialCard
              image={testimonialContent[1].image}
              text={testimonialContent[1].text}
              name={testimonialContent[1].name}
              key={testimonialContent[1].image}
              minHeight="467px"
              marginTop="0"
            />
          }
          thirdCard={
            <TestimonialCard
              image={testimonialContent[2].image}
              text={testimonialContent[2].text}
              name={testimonialContent[2].name}
              key={testimonialContent[2].image}
              minHeight="467px"
              marginTop="0"
            />
          }
        />
      </MarginBox>
    </Container>
  );
};

export default Testimonials;
