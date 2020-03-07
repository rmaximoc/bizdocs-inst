import React from 'react';
import GlobalStyle from './global.styles';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import ClientSection from './components/ClientSection/ClientSection';
import { Background } from './App.style';
import ClientsLogo from './components/ClientsLogo/ClientsLogo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Header />
        <IntroSection />
      </Background>
      <ClientSection />
      <ClientsLogo />
    </>
  );
}

export default App;
