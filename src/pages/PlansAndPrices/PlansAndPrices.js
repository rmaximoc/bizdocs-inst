import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import Contact from '../../components/Contact/Contact';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import TextContent from '../../components/shared/TextContent/TextContent';
import Paragraph from '../../components/shared/Paragraph/Paragraph';
import ComparativeTable from '../../components/ComparativeTable/ComparativeTable';
import SwitchButton from '../../components/shared/SwitchButton/SwitchButton';
import { ReactComponent as Vault } from '../../assets/images/vault.svg';
import { MarginBox } from '../../components/Header/Header.style';
import { DesktopBox, MobileBox, Box } from './PlansAndPrices.styles';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { BreadBox } from '../Bizdocs/Bizdocs.style';

const PlansAndPrices = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <BreadBox>
        <BreadCrumbs content="Home Page >" link=" Planos e Preços" />
      </BreadBox>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <DesktopBox>
          <MarginBox>
            <TextContent
              margin="20px auto 35px"
              color="#585858"
              title="Planos e Preços"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </MarginBox>
        </DesktopBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <MobileBox>
          <Box>
            <TextContent
              margin="20px auto 35px"
              color="#585858"
              title="Planos e Preços"
            />
          </Box>
        </MobileBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <SwitchButton />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <DesktopBox>
          <MarginBox>
            <Paragraph
              color="#585858"
              content="Suspendisse non neque nisi. Ut sit amet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet niamet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet nibh. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse non neque nisi. Ut sit amet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet niamet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet nibh. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </MarginBox>
        </DesktopBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <MobileBox>
          <Box>
            <TextContent
              margin="20px auto 5px"
              color="#585858"
              title="Comparação entre planos"
            />
          </Box>
        </MobileBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <ComparativeTable />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <Contact margin="140px 0 174px" />
      </ScrollAnimation>
      <Compliance
        stamp={<Vault />}
        buttonContent="Experimente grátis"
        title="Caixa-Forte Documental"
        content="A encriptação blindada de última geração e os níveis de acesso totalmente parametrizáveis, fazem com que os seus documentos estejam exclusivamente disponíveis para quem deles necessita. Se acrescentarmos que os servidores onde se encontra armazenada a informação estão equipados com sistemas de segurança biométricos e debaixo de vigilância 24 horas por dia, depressa concluirá que todos os seus documentos estão em boas mãos."
        margin="0 auto 48px"
        marginBottom="173px"
        stampTextWidth="64%"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default PlansAndPrices;
