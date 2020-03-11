import React from 'react';
import GlobalStyles from '../global.styles';
import Header from '../components/Header/Header';
import TextContent from '../components/shared/TextContent/TextContent';
import DesktopFooter from '../components/shared/DesktopFooter/DesktopFooter';

const Empresas = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <TextContent
        color="#585858"
        title="Bizdocs Mobi - Empresas"
        paragraph="Seja qual for a dimensão da sua empresa, existe uma solução Bizdocs para si. É natural que queira experimentar, testando este sistema em funcionamento, utilizando a versão gratuita que lhe disponibilizamos de imediato. Mas estamos certos de que, assim que sentir o alívio de poder trabalhar sem montanhas de papel, vai querer ajustar a sua solução Bizdocs às necessidades específicas da sua empresa."
      />
      <DesktopFooter />
    </>
  );
};

export default Empresas;
