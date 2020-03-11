import React from 'react';
import GlobalStyle from '../global.styles';
import { CardBox } from './Bizdocs.style';
import Header from '../components/Header/Header';
import Compliance from '../components/Compliance/Compliance';
import DesktopFooter from '../components/shared/DesktopFooter/DesktopFooter';
import TextContentBox from '../components/TextContentBox/TextContentBox';
import TextContentBoxButton from '../components/TextContentBoxButton/TextContentBoxButton';
import CardWithLink from '../components/CardWithLink/CardWithLink';
import cardContent from '../components/CardWithLink/cardContent';

const Bizdocs = () => {
  return (
    <>
      <GlobalStyle />
      <Header bgColor="#1B2555" />
      <TextContentBox />
      <CardBox>
        {cardContent.map(card => (
          <CardWithLink
            image={card.image}
            title={card.title}
            paragraph={card.paragraph}
            linkText={card.linkText}
            href={card.hre}
          />
        ))}
      </CardBox>
      <TextContentBoxButton />
      <Compliance />
      <DesktopFooter />
    </>
  );
};

export default Bizdocs;
