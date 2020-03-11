import React from 'react';
import {
  Container,
  MarginBox,
  GreenBackground,
  Title,
  CardsBox,
  Strip
} from './Testimonials.style';
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
      </MarginBox>
    </Container>
  );
};

export default Testimonials;
