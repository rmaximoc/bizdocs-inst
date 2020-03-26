import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import Compliance from '../../components/shared/Compliance/Compliance';
import Title from '../../components/shared/Title/Title';
import ImageBottomText from '../../components/ImageBottomText/ImageBottomText';
import Background from '../../assets/images/newsBg.png';
import GreenButton from '../../components/shared/GreenButton/GreenButton';
import { TitleGreen, MarginBox, ButtonBox } from './News.styles';
import CardImageTitle from '../../components/CardImageTitle/CardImageTitle';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { BreadBox } from '../Bizdocs/Bizdocs.style';
import { ReactComponent as Stamp } from '../../assets/images/integration-white.svg';

const News = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <BreadBox>
        <BreadCrumbs content="Home Page >" link=" Novidades" />
      </BreadBox>
      <Title margin="20px auto 35px" content="Novidades" />
      <ImageBottomText
        bgImage={Background}
        text="Portugal em destaque nas startups no setor contábil"
      />
      <MarginBox>
        <TitleGreen>Últimas notícias</TitleGreen>
      </MarginBox>
      <CardImageTitle />
      <CardImageTitle />
      <ButtonBox>
        <GreenButton content="Ver mais notícias" minWidth="372px" />
      </ButtonBox>
      <Compliance
        stamp={<Stamp />}
        margin="0 auto 75px"
        title="Integração Automatizada"
        content="O Bizdocs é compatível com os principais sistemas de contabilidade e gestão, permitindo uma integração imediata e sem disrupção. Os processos habituais entre si e a sua contabilidade podem ser automatizados, permitindo que, por exemplo, faturas sejam classificadas e lançadas sem intervenção humana – e com menos erros e atrasos."
        buttonContent="Experimente grátis"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default News;
