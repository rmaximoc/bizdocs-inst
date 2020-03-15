import React from 'react';
import { Container, MarginBox, Header, Box } from './ComparativeTable.style';
import ComparationTableLine from '../shared/ComparationTableLine/ComparationTableLine';
import { characteristics, functionalities, adon } from './comparativeContent';

const ComparativeTable = () => {
  return (
    <Container>
      <MarginBox>
        <Header>Principais Características</Header>
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
        <Header>Funcionalidades</Header>
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
        <Header>Bizdocs Automation add-on</Header>
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
      </MarginBox>
    </Container>
  );
};

export default ComparativeTable;
