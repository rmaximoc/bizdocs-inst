import React from 'react';
import { string } from 'prop-types';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import Contact from '../../components/Contact/Contact';
import TextContent from '../../components/shared/TextContent/TextContent';
import TableContent from '../../components/TableContent/TableContent';
import { ReactComponent as Dl28 } from '../../assets/images/stamp-DL28-2019.svg';

const PlanDetails = ({ planValue, bgColor }) => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <TextContent
        title="Mobi grátis"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        color="#585858"
      />
      <TableContent
        bgColor={bgColor}
        planValue={planValue}
        margin="20px 0 0 0"
      />
      <Contact margin="71px 0 175px" />
      <Compliance
        stamp={<Dl28 />}
        margin="0 auto 78px"
        buttonContent="Experimente grátis"
        title="Conformidade com o RGPD e a ePrivacy"
        content="Permanentemente actualizado com a última legislação em vigor, a gestão documental do Bizdocs garante que a sua empresa estará sempre segura na conformidade. A segurança e inviolabilidade dos dados, outro requisite exigido pela nova regulamentação, estão também garantidos pelos sistemas e recursos que temos instalados"
      />
      <DesktopFooter />
    </>
  );
};

PlanDetails.propTypes = {
  planValue: string.isRequired,
  bgColor: string.isRequired
};

export default PlanDetails;
