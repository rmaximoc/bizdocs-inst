import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import TextContent from '../../components/shared/TextContent/TextContent';
import Paragraph from '../../components/shared/Paragraph/Paragraph';
import GreenButton from '../../components/shared/GreenButton/GreenButton';

const Security = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <TextContent
        color="#585858"
        title="Segurança"
        paragraph="A informação e os dados – tanto pessoais como empresariais – são cada vez mais considerados um património inestimável. Todos sabemos, porém, que esse património é cada vez mais cobiçado e vulnerável nos dias que correm. Por isso é tão importante para nós garantir a total segurança dos dados, informações e documentos que mantemos no sistema Bizdocs."
      />
      <img src="" alt="" />
      <Paragraph
        color="#585858"
        content="O Portal Bizdocs funciona em Cloud. Como tal, só utilizamos encriptação de última geração – todos os documentos enviados para o Bizdocs e recebidos em qualquer dos seus devices são encriptados com cifra de 256-bit, a mesma que é usada na maioria dos sistemas de homebanking. E já que falamos em Cloud, vale a pena falar dos servidores que a suportam: para que ninguém que não esteja autorizado possa aceder à sua informação, eles estão protegidos por sistemas biométricos e vigilância 24/7/365. O acesso aos dados que mantém no Bizdocs é rigorosamente controlado por vários layers de segurança. Apenas o utilizador registado no Bizdocs pode decidir quem acede a que documentos, quando e onde. Os diversos mecanismos e funcionalidades que incorporámos no sistema após a promulgação do RGPD garantem também que a sua empresa estará sempre em conformidade com a última legislação europeia. Uma das características intrínsecas ao Bizdocs é o facto de ser um sistema vivo e evolutivo, em melhoria e enriquecimento constantes. Vivemos muito atentos às tendências e desenvolvimentos globais em termos de segurança e legislação quanto à detenção e processamento de dados. Para que possa viver e gerir a sua empresa em absoluta tranquilidade."
      />
      <GreenButton />
      <Compliance />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Security;
