import React from 'react';
import PlanCard from '../PlanCard/PlanCard';
import { Container, MarginBox, Box, Title } from './PlanCardBox.style';
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
        <Box>
          {second.map(card => (
            <PlanCard
              cardColor={card.cardColor}
              headerTitle={card.headerTitle}
              valueText={card.valueText}
              tableContent={card.tableContent}
              buttonText={card.buttonText}
            />
          ))}
        </Box>
      </MarginBox>
    </Container>
  );
};

export default PlanCardBox;
