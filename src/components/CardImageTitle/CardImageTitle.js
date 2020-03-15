import React from 'react';
import { string, element } from 'prop-types';
import {
  Container,
  MarginBox,
  Date,
  Title,
  Image,
  CardBox
} from './CardImageTitle.style';

const CardImageTitle = ({ image, date, title }) => {
  return (
    <Container>
      <MarginBox>
        <CardBox>
          <Image>
            <img src={image} alt="" />
          </Image>
          <Date>{date}</Date>
          <Title>{title}</Title>
        </CardBox>
      </MarginBox>
    </Container>
  );
};

CardImageTitle.propTypes = {
  image: element.isRequired,
  date: string.isRequired,
  title: string.isRequired
};

export default CardImageTitle;
