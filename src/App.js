import React from 'react';
import GlobalStyle from './global.styles';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import ClientSection from './components/ClientSection/ClientSection';
import { MainBackground, SecondBackground } from './App.style';
import ClientsLogo from './components/ClientsLogo/ClientsLogo';
import MainlyFunctions from './components/MainlyFunctions/MainlyFunctions';

function App() {
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
    </>
  );
}

export default App;
