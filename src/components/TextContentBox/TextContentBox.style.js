import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 130px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
