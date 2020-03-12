import React from 'react';
import { string } from 'prop-types';
import {
  Container,
  MarginBox,
  Header,
  Value,
  Title
} from './TableContent.style';
import PlanTableLine from '../shared/PlanTableLine/PlanTableLine';
import OpacityButton from '../shared/OpacityButton/OpacityButton';

const TableContent = ({ planValue }) => {
  return (
    <Container>
      <MarginBox>
        <Header>
          <Title>Principais Características</Title>
          <div>
            <Value>{planValue}</Value>
            <OpacityButton content="Experimente grátis" />
          </div>
        </Header>
        <PlanTableLine first="oi" second="aosij" bgColor="#FCFCFC" />
        <Header>
          <Title>Principais Características</Title>
        </Header>
        <PlanTableLine first="oi" second="aosij" bgColor="#FCFCFC" />
      </MarginBox>
    </Container>
  );
};

TableContent.propTypes = {
  planValue: string.isRequired
};

export default TableContent;
