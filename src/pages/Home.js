import React from 'react';
import GlobalStyle from '../global.styles';
import Header from '../components/Header/Header';
import IntroSection from '../components/IntroSection/IntroSection';
import ClientSection from '../components/ClientSection/ClientSection';
import { MainBackground, SecondBackground } from './Home.style';
import ClientsLogo from '../components/ClientsLogo/ClientsLogo';
import MainlyFunctions from '../components/MainlyFunctions/MainlyFunctions';
import Testimonials from '../components/Testimonials/Testimonials';
import Compliance from '../components/Compliance/Compliance';
import DesktopFooter from '../components/shared/DesktopFooter/DesktopFooter';

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
      <Compliance />
      <DesktopFooter />
    </>
  );
};

export default Home;
