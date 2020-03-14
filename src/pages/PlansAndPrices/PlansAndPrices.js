import React from 'react';
import GlobalStyles from '../../global.styles';
import Header from '../../components/Header/Header';
import Compliance from '../../components/shared/Compliance/Compliance';
import Contact from '../../components/Contact/Contact';
import DesktopFooter from '../../components/shared/DesktopFooter/DesktopFooter';
import TextContent from '../../components/shared/TextContent/TextContent';
import Paragraph from '../../components/shared/Paragraph/Paragraph';
import PlansSquares from '../../components/PlansSquares/PlansSquares';
import ComparativeTable from '../../components/ComparativeTable/ComparativeTable';

const PlansAndPrices = () => {
  return (
    <>
      <GlobalStyles />
      <Header bgColor="#1B2555" />
      <TextContent
        color="#585858"
        title="Planos e Preços"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Paragraph
        color="#585858"
        content="Suspendisse non neque nisi. Ut sit amet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet niamet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet nibh. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse non neque nisi. Ut sit amet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet niamet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet nibh. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <PlansSquares />
      <ComparativeTable />
      <Contact />
      <Compliance />
      <DesktopFooter />
    </>
  );
};

export default PlansAndPrices;
