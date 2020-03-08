import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 1;
`;

export const MarginBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px 240px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 436px;
  max-width: 310px;
  box-shadow: 0px 10px 20px #86868638;
  background-color: #ffffff;
  padding: 25px;

  &:nth-child(2) {
    min-height: 502px;
  }
`;

export const TextContent = styled.p`
  color: #585858;
  text-align: center;
  margin-bottom: 19px;
  font-size: 16px;
`;

export const NameText = styled.p`
  color: #585858;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
`;
