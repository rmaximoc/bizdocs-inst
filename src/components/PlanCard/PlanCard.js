import React from 'react';
import { string } from 'prop-types';
import { Container, Header, Price, Value, Table } from './PlanCard.style';
import TableLine from '../shared/TableLine/TableLine';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';

const PlanCards = ({
  cardColor,
  headerTitle,
  valueText,
  tableContent,
  buttonText
}) => {
  return (
    <Container>
      <Header cardColor={cardColor}>{headerTitle}</Header>
      <Price cardColor={cardColor}>
        A partir de
        <Value>{valueText}</Value>
      </Price>
      <Table>
        {/* {tableContent.map(content => (
          <TableLine content={content} />
        ))} */}
        {console.log(tableContent)}
      </Table>
      <GreenButton content={buttonText} />
      <OpacityButton />
    </Container>
  );
};

PlanCards.propTypes = {
  headerTitle: string.isRequired,
  valueText: string.isRequired,
  cardColor: string.isRequired,
  buttonText: string.isRequired
};

export default PlanCards;
