import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import Contact from '../../components/Contact/Contact';
import TextContent from '../../components/shared/TextContent/TextContent';
import TableContent from '../../components/TableContent/TableContent';

const PlanDetails = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <TextContent
        title="Mobi grátis"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        color="#585858"
      />
      <TableContent />
      <Contact />
      <Compliance />
      <DesktopFooter />
    </>
  );
};

export default PlanDetails;
