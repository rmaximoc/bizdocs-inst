import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import TextContent from '../../components/shared/TextContent/TextContent';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import { CardsBox, CardsBoxPart } from '../../components/CardsBox/CardsBox';
import PlanCardBox from '../../components/PlanCardBox/PlanCardBox';
import Contact from '../../components/Contact/Contact';
import Compliance from '../../components/shared/Compliance/Compliance';
import { ReactComponent as Smart } from '../../assets/images/smartOCR.svg';
import { MarginBox } from '../../components/Header/Header.style';
import { DesktopBox, MobileBox, ButtonBox } from './Empresas.style';
import { BreadBox } from '../Bizdocs/Bizdocs.style';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import GreenButton from '../../components/shared/GreenButton/GreenButton';

const Empresas = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <BreadBox>
        <BreadCrumbs content="Home Page >" link=" Empresas" />
      </BreadBox>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <MarginBox>
          <TextContent
            margin="20px auto 35px"
            color="#585858"
            title="Bizdocs Mobi - Empresas"
            paragraph="Seja qual for a dimensão da sua empresa, existe uma solução Bizdocs para si. É natural que queira experimentar, testando este sistema em funcionamento, utilizando a versão gratuita que lhe disponibilizamos de imediato. Mas estamos certos de que, assim que sentir o alívio de poder trabalhar sem montanhas de papel, vai querer ajustar a sua solução Bizdocs às necessidades específicas da sua empresa."
          />
        </MarginBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <DesktopBox>
          <CardsBox />
        </DesktopBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <MobileBox>
          <CardsBoxPart />
        </MobileBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <ButtonBox>
          <GreenButton
            width="80%"
            margin="0 auto 70px"
            content="Ver mais benefícios e funcionalidades"
          />
        </ButtonBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <PlanCardBox />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <Contact margin="106px 0 174px" />
      </ScrollAnimation>
      <Compliance
        stamp={<Smart />}
        margin="0 auto 35px"
        title="Smart OCR, com Machine Learning"
        content="OCR (Optical Character Recognition) é a tecnologia que permite reconhecer as formas dos caracteres numa simples imagem, transformando-os em texto pesquisável e editável. Quando se reforça isso com com a própria aprendizagem da máquina, que em caso de dúvida lhe pede um esclarecimento, guardando essa decisão para outros documentos semelhantes, o Bizdocs não para nunca de evoluir em eficiência."
        buttonContent="Experimente grátis"
        marginBottom="150px"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Empresas;
