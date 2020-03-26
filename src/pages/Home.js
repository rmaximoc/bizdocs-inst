import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import GlobalStyle from '../global.styles';
import Header from '../components/Header/Header';
import IntroSection from '../components/IntroSection/IntroSection';
import ClientSection from '../components/ClientSection/ClientSection';
import { MainBackground, SecondBackground } from './Home.style';
import ClientsLogo from '../components/ClientsLogo/ClientsLogo';
import MainlyFunctions from '../components/MainlyFunctions/MainlyFunctions';
import Testimonials from '../components/Testimonials/Testimonials';
import Compliance from '../components/shared/Compliance/Compliance';
import DesktopFooter from '../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../components/shared/MobileFooter/MobileFooter';
import image from '../assets/images/home.png';

const Stamp = () => {
  return (
    <img
      style={{ maxWidth: '67px', maxHeight: '67px' }}
      src={image}
      alt="stamp"
    />
  );
};

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <MainBackground>
        <Header />
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          duration={1}
          delay={1}
        >
          <IntroSection />
        </ScrollAnimation>
      </MainBackground>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <ClientSection />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <ClientsLogo />
      </ScrollAnimation>
      <SecondBackground>
        <MainlyFunctions />
      </SecondBackground>
      <Testimonials />
      <Compliance
        margin="0 auto 78px"
        stamp={<Stamp />}
        title="Conformidade com DL28/2019"
        content="O Bizdocs está em total conformidade com o DL 28/2019, tanto em contabilidade manual como automatizada."
        buttonContent="Experimente grátis"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Home;
