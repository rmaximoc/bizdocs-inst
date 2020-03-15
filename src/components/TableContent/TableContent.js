import React from 'react';
import { string } from 'prop-types';
import {
  Container,
  MarginBox,
  Header,
  Value,
  Title
} from './TableContent.style';
import { characteristics, functionalities } from './tableData';
import PlanTableLine from '../shared/PlanTableLine/PlanTableLine';
import OpacityButton from '../shared/OpacityButton/OpacityButton';

const TableContent = ({ planValue, margin, bgColor }) => {
  return (
    <Container margin={margin}>
      <MarginBox>
        <Header bgColor={bgColor}>
          <Title>Principais Características</Title>
          <div>
            <Value>{planValue}</Value>
            <OpacityButton content="Experimente grátis" />
          </div>
        </Header>
        {characteristics.map(item => (
          <PlanTableLine
            first={item.first}
            second={item.second}
            bgColor={item.bgColor}
          />
        ))}
        <Header bgColor={bgColor}>
          <Title>Funcionalidades</Title>
        </Header>
        {functionalities.map(item => (
          <PlanTableLine
            first={item.first}
            second={item.second}
            bgColor={item.bgColor}
            textAlign="left"
          />
        ))}
      </MarginBox>
    </Container>
  );
};

TableContent.propTypes = {
  planValue: string.isRequired,
  margin: string,
  bgColor: string.isRequired
};

TableContent.defaultProps = {
  margin: ''
};

export default TableContent;
