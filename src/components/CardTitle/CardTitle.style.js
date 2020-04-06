import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.p`
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 18px;
  font-weight: 700;
  color: #69b643;

  /** SAFARI ONLY */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      margin-top: 20px;
    }
  }
  /** SAFARI ONLY */
`;
