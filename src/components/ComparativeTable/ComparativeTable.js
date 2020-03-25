import React from 'react';
import {
  Container,
  MarginBox,
  Header,
  Box,
  Title,
  TableWindow
} from './ComparativeTable.style';
import PlansSquares from '../PlansSquares/PlansSquares';
import ComparationTableLine from '../shared/ComparationTableLine/ComparationTableLine';
import { characteristics, functionalities, adon } from './comparativeContent';
import OpacityButton from '../shared/OpacityButton/OpacityButton';

const ComparativeTable = () => {
  return (
    <Container>
      <MarginBox>
        <TableWindow>
          <PlansSquares />
          <Header>
            <Title>Principais Características</Title>
            <OpacityButton
              maxHeight="73px"
              width="137px"
              color="#69B643"
              content="Experimente Grátis"
            />
            <OpacityButton width="145px" color="#ADADAD" content="Aderir" />
            <OpacityButton width="145px" color="#B99769" content="Aderir" />
            <OpacityButton
              width="145px"
              color="#656565"
              content="Fale conosco"
            />
            <OpacityButton
              width="145px"
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
          <Header>
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
        </TableWindow>
      </MarginBox>
    </Container>
  );
};

export default ComparativeTable;
