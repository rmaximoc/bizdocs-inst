import React from 'react';
import GlobalStyle from './global.styles';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import { Background } from './App.style';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Header />
        <IntroSection />
      </Background>
    </>
  );
}

export default App;
