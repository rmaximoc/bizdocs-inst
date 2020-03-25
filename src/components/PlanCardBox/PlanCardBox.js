import React from 'react';
// import CarouselSlider from '../CarouselSlider/CarouselSlider';
import PlanCard from '../PlanCard/PlanCard';
import {
  Container,
  MarginBox,
  Box,
  Title,
  SecondBox
  // MobileBox
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
        {/* <MobileBox>
          <CarouselSlider
            firstCard={
              <PlanCard
                cardColor={cards[0].cardColor}
                headerTitle={cards[0].headerTitle}
                valueText={cards[0].valueText}
                tableContent={cards[0].tableContent}
                buttonText={cards[0].buttonText}
              />
            }
            secondCard={
              <PlanCard
                cardColor={cards[1].cardColor}
                headerTitle={cards[1].headerTitle}
                valueText={cards[1].valueText}
                tableContent={cards[1].tableContent}
                buttonText={cards[1].buttonText}
              />
            }
            thirdCard={
              <PlanCard
                cardColor={cards[2].cardColor}
                headerTitle={cards[2].headerTitle}
                valueText={cards[2].valueText}
                tableContent={cards[2].tableContent}
                buttonText={cards[2].buttonText}
              />
            }
          />
        </MobileBox> */}
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
