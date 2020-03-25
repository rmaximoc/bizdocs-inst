import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 98px;
  min-width: 1220px;
`;

export const MarginBox = styled.div`
  display: flex;
  width: 88%;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  text-align: center;
  padding: 35px;
  height: 125px;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ color }) => color};
  width: 157px;
  border-radius: 6px 6px 0 0;
`;

export const Value = styled.h1`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
`;
