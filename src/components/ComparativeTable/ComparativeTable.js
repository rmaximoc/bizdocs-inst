import React from 'react';
import {
  Container,
  MarginBox,
  Header,
  Box,
  Title,
  TableWindow,
  ButtonBox
} from './ComparativeTable.style';
import PlansSquares from '../PlansSquares/PlansSquares';
import ComparationTableLine from '../shared/ComparationTableLine/ComparationTableLine';
import { characteristics, functionalities, adon } from './comparativeContent';
import AdaptiveButton from '../shared/AdaptiveButton/AdaptiveButton';

const ComparativeTable = () => {
  return (
    <Container>
      <MarginBox>
        <TableWindow>
          <PlansSquares />
          <Header>
            <Title titleButton>Principais Características</Title>
            <AdaptiveButton
              maxHeight="73px"
              width="10.4%"
              color="#69B643"
              content="Experimente Grátis"
            />
            <AdaptiveButton width="10.4%" color="#ADADAD" content="Aderir" />
            <AdaptiveButton width="10.4%" color="#B99769" content="Aderir" />
            <AdaptiveButton
              width="10.4%"
              color="#656565"
              content="Fale conosco"
            />
            <AdaptiveButton
              width="10.4%"
              color="#1C3144"
              content="Fale conosco"
            />
          </Header>
          {characteristics.map(item => (
            <Box>
              <ComparationTableLine
                bgColor={item.bgColor}
                main={item.main}
                first={item.first}
                second={item.second}
                third={item.third}
                fourth={item.fourth}
                fifth={item.fifth}
              />
            </Box>
          ))}
          <Header style={{ marginTop: '30px' }}>
            <Title>Funcionalidades</Title>
          </Header>
          {functionalities.map(item => (
            <Box>
              <ComparationTableLine
                bgColor={item.bgColor}
                main={item.main}
                first={item.first}
                second={item.second}
                third={item.third}
                fourth={item.fourth}
                fifth={item.fifth}
              />
            </Box>
          ))}
          <Header>
            <Title>Bizdocs Automation add-on</Title>
          </Header>
          {adon.map(item => (
            <Box>
              <ComparationTableLine
                bgColor={item.bgColor}
                main={item.main}
                first={item.first}
                second={item.second}
                third={item.third}
                fourth={item.fourth}
                fifth={item.fifth}
              />
            </Box>
          ))}
          <ButtonBox>
            <AdaptiveButton
              maxHeight="73px"
              width="10.4%"
              color="#69B643"
              content="Experimente Grátis"
            />
            <AdaptiveButton width="10.4%" color="#ADADAD" content="Aderir" />
            <AdaptiveButton width="10.4%" color="#B99769" content="Aderir" />
            <AdaptiveButton
              width="10.4%"
              color="#656565"
              content="Fale conosco"
            />
            <AdaptiveButton
              width="10.4%"
              color="#1C3144"
              content="Fale conosco"
            />
          </ButtonBox>
        </TableWindow>
      </MarginBox>
    </Container>
  );
};

export default ComparativeTable;
