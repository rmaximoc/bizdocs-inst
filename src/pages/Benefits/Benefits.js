import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import Compliance from '../../components/shared/Compliance/Compliance';
import TextContent from '../../components/shared/TextContent/TextContent';
import TextCheck from '../../components/shared/TextCheck/TextCheck';
import Accordion from '../../components/Accordion/Accordion';
import Title from '../../components/shared/Title/Title';
import checkContent from './checkContent';
import accordionContent from './accordionContent';
import { MarginBox } from '../../components/Header/Header.style';

const Benefits = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <TextContent
        color="#585858"
        title="Principais Benefícios e funcionalidades"
        paragraph="Um sistema cuja principal função é eliminar papel e gerir de forma dinâmica toda a documentação empresarial, tem que ser activo e integrado com sistemas de gestão e contabilidade existentes. Por isso o Bizdocs está suportado em RPA (Robotic Process Automation), em Inteligência Artificial e Machine Learning, com OCR (Optical Character Recognition) de última geração."
      />
      <Title margin="107px auto 47px" content="Portal Seguro e Ilimitado" />
      {checkContent.map(item => (
        <TextCheck key={item.content} content={item.content} />
      ))}
      <MarginBox>
        {accordionContent.map(acc => (
          <Accordion
            title={acc.title}
            paragraph={acc.paragraph}
            bgColor={acc.bgColor}
          />
        ))}
      </MarginBox>
      <Compliance
        margin="134px auto 68px"
        title="Integração Automatizada"
        content="O Bizdocs é compatível com os principais sistemas de contabilidade e gestão, permitindo uma integração imediata e sem disrupção. Os processos habituais entre si e a sua contabilidade podem ser automatizados, permitindo que, por exemplo, faturas sejam classificadas e lançadas sem intervenção humana – e com menos erros e atrasos."
        buttonContent="Experimente grátis"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Benefits;
