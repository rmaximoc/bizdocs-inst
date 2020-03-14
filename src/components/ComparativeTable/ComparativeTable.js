import React from 'react';
import { Container, MarginBox, Header, Box } from './ComparativeTable.style';
import ComparationTableLine from '../shared/ComparationTableLine/ComparationTableLine';

const ComparativeTable = () => {
  return (
    <Container>
      <MarginBox>
        <Header>teste</Header>
        <Box>
          <ComparationTableLine
            bgColor="red"
            main="MAIN"
            first="teste"
            second="teste2"
            third="teste3"
            fourth="teste4"
            fifth="teste5"
          />
        </Box>
      </MarginBox>
    </Container>
  );
};

export default ComparativeTable;
