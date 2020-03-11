import React from 'react';
import { element, string } from 'prop-types';
import {
  Container,
  MarginBox,
  TextContent,
  NameText,
  Cards
} from './TestimonialCard.style';

const TestimonialCard = ({ image, text, name, minHeight, marginTop }) => {
  return (
    <Container>
      <MarginBox>
        <Cards minHeight={minHeight} marginTop={marginTop}>
          <img src={image} alt="" />
          <TextContent>{text}</TextContent>
          <NameText>{name}</NameText>
        </Cards>
      </MarginBox>
    </Container>
  );
};

TestimonialCard.propTypes = {
  image: element.isRequired,
  text: string.isRequired,
  name: string.isRequired,
  minHeight: string.isRequired,
  marginTop: string
};

TestimonialCard.defaultProps = {
  marginTop: '0px'
};

export default TestimonialCard;
