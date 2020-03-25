import React from 'react';
import { string } from 'prop-types';
import {
  Container,
  MarginBox,
  DesktopHeader,
  Value,
  Title,
  DesktopBox,
  MobileBox,
  ButtonBox,
  MobileHeader
} from './TableContent.style';
import { characteristics, functionalities } from './tableData';
import PlanTableLine from '../shared/PlanTableLine/PlanTableLine';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import Accordion from '../Accordion/Accordion';

const TableContent = ({ planValue, margin, bgColor }) => {
  return (
    <Container margin={margin}>
      <MarginBox>
        <DesktopHeader bgColor={bgColor}>
          <Title>Principais Características</Title>
          <div>
            <Value>{planValue}</Value>
            <ButtonBox>
              <OpacityButton
                minWidth="254px"
                width="100%"
                content="Experimente grátis"
              />
            </ButtonBox>
          </div>
        </DesktopHeader>
        <MobileHeader bgColor={bgColor}>
          <Value>
            {planValue}
            <span>/mês</span>
          </Value>
          <Title>Principais Características</Title>
        </MobileHeader>
        {characteristics.map(item => (
          <PlanTableLine
            first={item.first}
            second={item.second}
            bgColor={item.bgColor}
          />
        ))}
        <Title>Funcionalidades</Title>
        <DesktopBox>
          {functionalities.map(item => (
            <PlanTableLine
              first={item.first}
              second={item.second}
              bgColor={item.bgColor}
              textAlign="left"
            />
          ))}
        </DesktopBox>
        <MobileBox>
          {functionalities.map(item => (
            <Accordion
              title={item.first}
              paragraph={item.second}
              bgColor={item.bgColor}
            />
          ))}
        </MobileBox>
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
