import React from 'react';
import PropTypes, { string, element } from 'prop-types';
import {
  Box,
  Header,
  Price,
  Value,
  Table,
  Content,
  StampBox
} from './PlanCard.style';
import TableLine from '../shared/TableLine/TableLine';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';

function splitPrice(text) {
  if (text.match('€')) {
    const tempText = text.split(' ');
    return (
      <>
        {tempText[0]}
        <span>{tempText[1]}</span>
      </>
    );
  }
  return <h3>{text}</h3>;
}

const PlanCards = ({
  cardColor,
  headerTitle,
  valueText,
  tableContent,
  buttonText,
  stamp
}) => {
  return (
    <Box>
      <Header cardColor={cardColor}>{headerTitle}</Header>
      <StampBox>{stamp}</StampBox>
      <Content>
        <Price cardColor={cardColor}>
          A partir de
          <Value cardColor={cardColor}>{splitPrice(valueText)}</Value>
        </Price>
        <Table>
          {tableContent.map(content => {
            return <TableLine title={content} content={content} />;
          })}
        </Table>
        <GreenButton color={cardColor} width="100%" content={buttonText} />
        <OpacityButton
          maxWidth="100%"
          color="#1C3144"
          width="100%"
          content="Comparar planos"
        />
      </Content>
    </Box>
  );
};

PlanCards.propTypes = {
  headerTitle: string.isRequired,
  valueText: string.isRequired,
  cardColor: string.isRequired,
  buttonText: string.isRequired,
  tableContent: PropTypes.arrayOf(string).isRequired,
  stamp: element
};

PlanCards.defaultProps = {
  stamp: ''
};

export default PlanCards;
