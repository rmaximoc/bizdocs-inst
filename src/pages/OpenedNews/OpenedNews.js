import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import Compliance from '../../components/shared/Compliance/Compliance';
import Title from '../../components/shared/Title/Title';
import { DateBox } from './OpenedNews.style';
import { MarginBox } from '../../components/Header/Header.style';
import Paragraph from '../../components/shared/Paragraph/Paragraph';
import CardImageTitle from '../../components/CardImageTitle/CardImageTitle';
import { TitleGreen } from '../News/News.styles';
import GreenButton from '../../components/shared/GreenButton/GreenButton';

const OpenedNews = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <MarginBox>
        <Title
          margin="90px auto 5px"
          content="Contabilistas veem várias vantagens no mercado"
        />
        <DateBox>22/11/2019 - 14:54</DateBox>
        <img src="" alt="" />
      </MarginBox>
      <Paragraph
        color="#585858"
        content="Dois contabilistas contam como tem sido trabalhar
        com o M Contabilidade. Érica Silvestre (ES) e Carlos Alberto Garcia (CAG)
        reconhecem várias vantagens na integração do portal online do Millennium bcp
        com o TOConline, uma plataforma de apoio aos contabilistas da Ordem dos
        Contabilistas Certificados Érica Silvestre (ES), contabilista certificada
        e gerente do escritório de contabilidade Gomes e Silvestre – Contabilidade,
        Gestão e Consultoria (NIKOS Contabilidade), localizado no Montijo, Portugal.
        Carlos Garcia (CAG), contabilista certificado e sócio do escritório de contabilidade
        Garcia & Garcia, localizado em Flamengos, na Ilha do Faial, Região Autónoma
        dos Açores. Como teve conhecimento do serviço M Contabilidade? ES: Tive
        conhecimento do M Contabilidade do Millennium bcp através da newsletter da
        Ordem dos Contabilistas Certificados (OCC) que recebo diariamente no meu e-mail."
      />
      <MarginBox>
        <TitleGreen>Últimas notícias</TitleGreen>
      </MarginBox>
      <CardImageTitle />
      <MarginBox>
        <GreenButton
          margin="0 auto"
          minWidth="372px"
          content="Ver mais notícias"
        />
      </MarginBox>
      <Compliance
        buttonContent="Experimente grátis"
        title="Integração Automatizada"
        content="O Bizdocs é compatível com os principais sistemas de contabilidade e gestão, permitindo uma integração imediata e sem disrupção. Os processos habituais entre si e a sua contabilidade podem ser automatizados, permitindo que, por exemplo, faturas sejam classificadas e lançadas sem intervenção humana – e com menos erros e atrasos."
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default OpenedNews;
