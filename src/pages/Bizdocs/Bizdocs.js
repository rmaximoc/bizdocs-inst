import React from 'react';
import GlobalStyle from '../../global.styles';
import { CardBox } from './Bizdocs.style';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import TextContentBox from '../../components/TextContentBox/TextContentBox';
import TextContentBoxButton from '../../components/TextContentBoxButton/TextContentBoxButton';
import CardWithLink from '../../components/CardWithLink/CardWithLink';
import cardContent from '../../components/CardWithLink/cardContent';
import { ReactComponent as Clock } from '../../assets/images/clock.svg';

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
            href={card.href}
          />
        ))}
      </CardBox>
      <TextContentBoxButton />
      <Compliance
        margin="0 auto 84px"
        image={Clock}
        title="A Qualquer hora, em qualquer lugar"
        content="O Bizdocs aceita qualquer tipo de documento, da fatura ao talão de caixa, através de qualquer dispositivo, desde um scanner ou multifunções a um simples smartphone. Como funciona em Cloud, pode aceder aos seus documentos ou carregar seja o que for onde estiver, quando quiser, como preferir."
        buttonContent="Experimente grátis"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Bizdocs;
