import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import Compliance from '../../components/shared/Compliance/Compliance';
import TextContent from '../../components/shared/TextContent/TextContent';
import TextCheck from '../../components/shared/TextCheck/TextCheck';
import Accordion from '../../components/Accordion/Accordion';

const Benefits = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <TextContent
        title="Principais Benefícios e funcionalidades"
        paragraph="Um sistema cuja principal função é eliminar papel e gerir de forma dinâmica toda a documentação empresarial, tem que ser activo e integrado com sistemas de gestão e contabilidade existentes. Por isso o Bizdocs está suportado em RPA (Robotic Process Automation), em Inteligência Artificial e Machine Learning, com OCR (Optical Character Recognition) de última geração."
      />
      <Accordion />
      <TextCheck />
      <Compliance />
      <DesktopFooter />
    </>
  );
};

export default Benefits;
