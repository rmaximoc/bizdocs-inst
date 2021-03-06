import React from 'react';
import GlobalStyles from '../../global.styles';
import { BreadBox } from '../Bizdocs/Bizdocs.style';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import TextContent from '../../components/shared/TextContent/TextContent';
import ArticleParagraph from '../../components/shared/ArticleParagraph/ArticleParagraph';
import GreenButton from '../../components/shared/GreenButton/GreenButton';
import { MarginBox, DesktopButton, MobileButton } from './Security.style';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Coding from '../../assets/images/coding-pc.png';
import { ReactComponent as Stamp } from '../../assets/images/click-white.svg';

const Security = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <BreadBox>
        <BreadCrumbs content="Home Page >" link=" Bizdocs" />
      </BreadBox>
      <MarginBox>
        <TextContent
          margin="20px auto 35px"
          color="#585858"
          title="Segurança"
          paragraph="A informação e os dados – tanto pessoais como empresariais – são cada vez mais considerados um património inestimável. Todos sabemos, porém, que esse património é cada vez mais cobiçado e vulnerável nos dias que correm. Por isso é tão importante para nós garantir a total segurança dos dados, informações e documentos que mantemos no sistema Bizdocs."
        />
      </MarginBox>
      <MarginBox>
        <img src={Coding} alt="coding" />
      </MarginBox>
      <MarginBox>
        <ArticleParagraph
          color="#585858"
          content1="O Portal Bizdocs funciona em Cloud. Como tal, só utilizamos encriptação de última geração – todos os documentos enviados para o Bizdocs e recebidos em qualquer dos seus devices são encriptados com cifra de 256-bit, a mesma que é usada na maioria dos sistemas de homebanking. E já que falamos em Cloud, vale a pena falar dos servidores que a suportam: para que ninguém que não esteja autorizado possa aceder à sua informação, eles estão protegidos por sistemas biométricos e vigilância 24/7/365."
          content2="O acesso aos dados que mantém no Bizdocs é rigorosamente controlado por vários layers de segurança. Apenas o utilizador registado no Bizdocs pode decidir quem acede a que documentos, quando e onde. Os diversos mecanismos e funcionalidades que incorporámos no sistema após a promulgação do RGPD garantem também que a sua empresa estará sempre em conformidade com a última legislação europeia."
          content3="Uma das características intrínsecas ao Bizdocs é o facto de ser um sistema vivo e evolutivo, em melhoria e enriquecimento constantes. Vivemos muito atentos às tendências e desenvolvimentos globais em termos de segurança e legislação quanto à detenção e processamento de dados. Para que possa viver e gerir a sua empresa em absoluta tranquilidade."
        />
      </MarginBox>
      <DesktopButton>
        <GreenButton
          shadow="0px 10px 20px #00000029"
          content="Ver todos os benefícios e funcionalidades"
          width="100%"
          maxWidth="372px"
          margin="30px auto 94px"
          padding="25px 23px"
        />
      </DesktopButton>
      <MarginBox>
        <MobileButton>
          <GreenButton
            content="Ver todos os benefícios e funcionalidades"
            width="100%"
            maxWidth="100%"
            margin="0px auto 40px"
          />
        </MobileButton>
      </MarginBox>
      <Compliance
        stamp={<Stamp />}
        margin="0 auto 73px"
        buttonContent="Experimente grátis"
        title="Reconhecimento, Classificação, Arquivo, Envio ou Partilha de Documentos"
        content="A última tecnologia de OCR, combinada com Inteligência Artificial e Machine Learning, permitem que um simples talão de Caixa possa ser reconhecido como fatura, com os totais e o IVA devidamente identificados, para ser enviado ou arquivado com o respectivo número."
        stampTextWidth="65%"
        marginBottom="111px"
        mediaMargin="140px"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Security;
