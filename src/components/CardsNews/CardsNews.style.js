import styled from 'styled-components';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 303px;
`;

export const Date = styled.p`
  text-align: left;
  color: #adadad;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #1c3144;
`;

export const Image = styled.div`
  display: flex;

  img {
    min-width: 303px;
  }
`;
