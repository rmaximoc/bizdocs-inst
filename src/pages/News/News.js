import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import Compliance from '../../components/shared/Compliance/Compliance';
import Title from '../../components/shared/Title/Title';
import ImageBottomText from '../../components/ImageBottomText/ImageBottomText';
import Background from '../../assets/images/newsBg.png';
import GreenButton from '../../components/shared/GreenButton/GreenButton';
import { TitleGreen, Container, MarginBox } from './News.styles';
import CardImageTitle from '../../components/CardImageTitle/CardImageTitle';
import img from '../../assets/images/adidas.png';

const News = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <Title content="Novidades" />
      <ImageBottomText
        bgImage={Background}
        text="Portugal em destaque nas startups no setor contábil"
      />
      <Container>
        <MarginBox>
          <TitleGreen>Últimas notícias</TitleGreen>
        </MarginBox>
      </Container>
      <CardImageTitle image={img} date="12/12/12" title="soaihdo" />
      <GreenButton />
      <Compliance />
      <DesktopFooter />
    </>
  );
};

export default News;
