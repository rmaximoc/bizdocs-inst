import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Box, Header, Price, Value, Table } from './PlanCard.style';
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
  tableTitle,
  tableValue,
  buttonText
}) => {
  return (
    <Box>
      <Header cardColor={cardColor}>{headerTitle}</Header>
      <Price cardColor={cardColor}>
        A partir de
        <Value cardColor={cardColor}>{splitPrice(valueText)}</Value>
      </Price>
      <Table>
        {[tableTitle].map(content => {
          console.log(content);
          return <TableLine title={content} content={content} />;
        })}
      </Table>
      <GreenButton content={buttonText} />
      <OpacityButton />
    </Box>
  );
};

PlanCards.propTypes = {
  headerTitle: string.isRequired,
  valueText: string.isRequired,
  cardColor: string.isRequired,
  buttonText: string.isRequired,
  tableValue: PropTypes.arrayOf(string).isRequired,
  tableTitle: PropTypes.arrayOf(string).isRequired
};

export default PlanCards;
