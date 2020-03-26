import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import GlobalStyle from '../../global.styles';
import { CardBox, BreadBox } from './Bizdocs.style';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import TextContentBox from '../../components/TextContentBox/TextContentBox';
import TextContentBoxButton from '../../components/TextContentBoxButton/TextContentBoxButton';
import CardWithLink from '../../components/CardWithLink/CardWithLink';
import cardContent from '../../components/CardWithLink/cardContent';
import { ReactComponent as Clock } from '../../assets/images/clock.svg';
import CarouselSlider from '../../components/CarouselSlider/CarouselSlider';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

const Bizdocs = () => {
  return (
    <>
      <GlobalStyle />
      <Header bgColor="#1B2555" />
      <BreadBox>
        <BreadCrumbs content="Home Page >" link=" Bizdocs" />
      </BreadBox>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <TextContentBox />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
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
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <CarouselSlider
          slidesToShow={1}
          slidesToScroll={1}
          firstCard={
            <CardWithLink
              image={cardContent[0].image}
              title={cardContent[0].title}
              paragraph={cardContent[0].paragraph}
              linkText={cardContent[0].linkText}
              href={cardContent[0].href}
            />
          }
          secondCard={
            <CardWithLink
              image={cardContent[1].image}
              title={cardContent[1].title}
              paragraph={cardContent[1].paragraph}
              linkText={cardContent[1].linkText}
              href={cardContent[1].href}
            />
          }
          thirdCard={
            <CardWithLink
              image={cardContent[2].image}
              title={cardContent[2].title}
              paragraph={cardContent[2].paragraph}
              linkText={cardContent[2].linkText}
              href={cardContent[2].href}
            />
          }
        />
      </ScrollAnimation>
      <TextContentBoxButton />
      <Compliance
        margin="0 auto 84px"
        image={<Clock />}
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
