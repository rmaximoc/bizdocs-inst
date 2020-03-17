import React from 'react';
import { string, element } from 'prop-types';
import { Date, Title, Image, CardBox } from './CardsNews.style';

const CardsNews = ({ image, date, title }) => {
  return (
    <CardBox>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Date>{date}</Date>
      <Title>{title}</Title>
    </CardBox>
  );
};

CardsNews.propTypes = {
  image: element.isRequired,
  date: string.isRequired,
  title: string.isRequired
};

export default CardsNews;
