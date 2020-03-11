import React from 'react';
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
import { ReactComponent as Stamp } from '../assets/images/green-stamp.svg';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <MainBackground>
        <Header />
        <IntroSection />
      </MainBackground>
      <ClientSection />
      <ClientsLogo />
      <SecondBackground>
        <MainlyFunctions />
      </SecondBackground>
      <Testimonials />
      <Compliance
        stamp={Stamp}
        title="Conformidade com DL28/2019"
        content="O Bizdocs está em total conformidade com o DL 28/2019, tanto em
              contabilidade manual como automatizada."
        buttonContent="Experimente grátis"
      />
      <DesktopFooter />
    </>
  );
};

export default Home;
