import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const MarginBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 41px;

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
  margin: 130px 0 123px 0;
`;

export const VideoContent = styled.div`
  display: flex;
`;
