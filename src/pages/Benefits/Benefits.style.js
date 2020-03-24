import styled from 'styled-components';

export const AccordionMargin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 992px) {
    width: 80%;
    margin: 0 auto;
  }
`;
