import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Box, Header, Price, Value, Table, Content } from './PlanCard.style';
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
  buttonText
}) => {
  return (
    <Box>
      <Header cardColor={cardColor}>{headerTitle}</Header>
      <Content>
        <Price cardColor={cardColor}>
          A partir de
          <Value cardColor={cardColor}>{splitPrice(valueText)}</Value>
        </Price>
        <Table>
          {tableContent.map(content => {
            console.log(content.value);
            return <TableLine title={content.title} content={content.value} />;
          })}
          {/* <TableLine title={tableTitle[0]} content={tableValue[0]} /> */}
        </Table>
        <GreenButton content={buttonText} />
        <OpacityButton color="#1C3144" width="100%" content="Comparar planos" />
      </Content>
    </Box>
  );
};

PlanCards.propTypes = {
  headerTitle: string.isRequired,
  valueText: string.isRequired,
  cardColor: string.isRequired,
  buttonText: string.isRequired,
  tableContent: PropTypes.arrayOf(string).isRequired
};

export default PlanCards;
