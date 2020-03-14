import React from 'react';
import { Container, MarginBox, Box, Value, Text } from './PlansSquares.style';
import plansContent from './plansContent';

const PlansSquares = () => {
  return (
    <Container>
      <MarginBox>
        {plansContent.map(plan => (
          <>
            <Box color={plan.color}>
              <Value>{plan.planPrice}</Value>
              <Text>{plan.plan}</Text>
            </Box>
          </>
        ))}
      </MarginBox>
    </Container>
  );
};

export default PlansSquares;
