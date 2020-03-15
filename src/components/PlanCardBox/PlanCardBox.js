import React from 'react';
import PlanCard from '../PlanCard/PlanCard';
import { Container, MarginBox } from './PlanCardBox.style';
import cardsContent from './cardsContent';

const PlanCardBox = () => {
  return (
    <Container>
      <MarginBox>
        {cardsContent.map(card => (
          <PlanCard
            cardColor={card.cardColor}
            headerTitle={card.headerTitle}
            valueText={card.valueText}
            tableValue={card.tableContent.value}
            tableTitle={card.tableContent.title}
            buttonText={card.buttonText}
          />
        ))}
      </MarginBox>
    </Container>
  );
};

export default PlanCardBox;
