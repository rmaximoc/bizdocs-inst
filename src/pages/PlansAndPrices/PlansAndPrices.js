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
import SwitchButton from '../../components/shared/SwitchButton/SwitchButton';

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
      <SwitchButton />
      <Paragraph
        color="#585858"
        content="Suspendisse non neque nisi. Ut sit amet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet niamet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet nibh. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse non neque nisi. Ut sit amet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet niamet nibh blandit sollicitudin. Aliquam imperdiet interdu sit amet nibh. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <PlansSquares />
      <ComparativeTable />
      <Contact margin="140px 0 174px" />
      <Compliance
        buttonContent="Experimente grátis"
        title="Caixa-Forte Documental"
        content="A encriptação blindada de última geração e os níveis de acesso totalmente parametrizáveis, fazem com que os seus documentos estejam exclusivamente disponíveis para quem deles necessita. Se acrescentarmos que os servidores onde se encontra armazenada a informação estão equipados com sistemas de segurança biométricos e debaixo de vigilância 24 horas por dia, depressa concluirá que todos os seus documentos estão em boas mãos."
        margin="0 auto 48px"
      />
      <DesktopFooter />
    </>
  );
};

export default PlansAndPrices;