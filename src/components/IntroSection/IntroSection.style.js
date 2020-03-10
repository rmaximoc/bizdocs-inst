import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const MarginBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 41px;
  max-width: 550px;

  h1 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
  }
`;

export const PresentationContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 130px auto 123px;
  width: 50%;
`;

export const VideoContent = styled.div`
  display: flex;
  border: 1px solid red;
  width: 564px;
  height: 320px;
`;
