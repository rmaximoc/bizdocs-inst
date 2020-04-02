import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { string } from 'prop-types';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import MobileFooter from '../../components/shared/MobileFooter/MobileFooter';
import Contact from '../../components/Contact/Contact';
import TextContent from '../../components/shared/TextContent/TextContent';
import TableContent from '../../components/TableContent/TableContent';
import { ReactComponent as RGPD } from '../../assets/images/selo-RGPD.svg';
import { MarginBox } from '../../components/Header/Header.style';
import BreadCrumb from '../../components/BreadCrumbs/BreadCrumbs';
import { BreadBox } from '../Bizdocs/Bizdocs.style';

const PlanDetails = ({ planValue, bgColor }) => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <BreadBox>
        <BreadCrumb content="Home Page > Empresas > " link="Mobigrátis" />
      </BreadBox>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <MarginBox>
          <TextContent
            margin="30px auto 35px"
            title="Mobi grátis"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            color="#585858"
          />
        </MarginBox>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <TableContent
          bgColor={bgColor}
          planValue={planValue}
          margin="20px 0 0 0"
        />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1} delay={1}>
        <Contact margin="71px 0 175px" />
      </ScrollAnimation>
      <Compliance
        stamp={<RGPD width="100px" height="100px" />}
        margin="0 auto 78px"
        buttonContent="Experimente grátis"
        title="Conformidade com o RGPD e a ePrivacy"
        content="Permanentemente actualizado com a última legislação em vigor, a gestão documental do Bizdocs garante que a sua empresa estará sempre segura na conformidade. A segurança e inviolabilidade dos dados, outro requisite exigido pela nova regulamentação, estão também garantidos pelos sistemas e recursos que temos instalados"
        stampTextWidth="64%"
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

PlanDetails.propTypes = {
  planValue: string.isRequired,
  bgColor: string.isRequired
};

export default PlanDetails;
