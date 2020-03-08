import React from 'react';
import {
  Container,
  MarginBox,
  GreenBackground,
  Title,
  CardsBox
} from './Testimonials.style';
import TestimonialCard from '../TestimonialsCard/TestimonialCard';
import testimonialContent from './testimonialContent';

const Testimonials = () => {
  return (
    <Container>
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
            />
          ))}
        </CardsBox>
      </MarginBox>
    </Container>
  );
};

export default Testimonials;
