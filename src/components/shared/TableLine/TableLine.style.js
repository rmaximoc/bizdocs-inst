import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FirstLine = styled.div`
  display: flex;
  margin: 10px;
  justify-content: inherit;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 20px;
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: inherit;
  margin: 10px;
  border-bottom: 0.5px solid #e9e9e9;
  padding-bottom: 20px;
`;

export const ThirdLine = styled.div`
  display: flex;
  justify-content: inherit;
  margin: 10px;
`;

export const FirstTitle = styled.div`
  display: flex;
  justify-content: space-around;
  color: #adadad;
`;

export const FirstValue = styled.div`
  display: flex;
  justify-content: space-around;
  color: #585858;
  font-weight: 700;
`;
