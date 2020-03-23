import React from 'react';
import PlanCard from '../PlanCard/PlanCard';
import {
  Container,
  MarginBox,
  Box,
  Title,
  SecondBox
} from './PlanCardBox.style';
import { cards, second } from './cardsContent';

const PlanCardBox = () => {
  return (
    <Container>
      <MarginBox>
        <Box>
          {cards.map(card => (
            <PlanCard
              cardColor={card.cardColor}
              headerTitle={card.headerTitle}
              valueText={card.valueText}
              tableContent={card.tableContent}
              buttonText={card.buttonText}
            />
          ))}
        </Box>
        <Title>Outros planos</Title>
        <SecondBox>
          {second.map(card => (
            <PlanCard
              cardColor={card.cardColor}
              headerTitle={card.headerTitle}
              valueText={card.valueText}
              tableContent={card.tableContent}
              buttonText={card.buttonText}
            />
          ))}
        </SecondBox>
      </MarginBox>
    </Container>
  );
};

export default PlanCardBox;
