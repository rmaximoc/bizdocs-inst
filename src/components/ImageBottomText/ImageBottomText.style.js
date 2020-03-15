import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarginBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  padding: 36px;
  flex-direction: column-reverse;
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column-reverse;
  font-size: 32px;
  width: 948px;
  height: 524px;
  font-weight: bold;
`;
