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
        <DesktopHeader bgColor="#69b643">
          <Title>Principais Características</Title>
          <div>
            <Value>0€/Mês</Value>
            <ButtonBox>
              <OpacityButton
                minWidth="254px"
                width="100%"
                content="Experimente grátis"
              />
            </ButtonBox>
          </div>
        </DesktopHeader>
        <MobileHeader bgColor="#69b643">
          <Value>
            0€
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
        <DesktopHeader bgColor="#69b643">
          <Title>Funcionalidades</Title>
        </DesktopHeader>
        <MobileHeader bgColor="#69b643">
          <Title>Funcionalidades</Title>
        </MobileHeader>
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
