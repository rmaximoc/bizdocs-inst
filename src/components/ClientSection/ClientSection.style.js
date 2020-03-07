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
    color: #abc6de;
  }

  p {
    font-size: 16px;
    color: #585858;
  }

  span {
    font-size: 42px;
    color: #69b643;
  }
`;

export const PresentationContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 130px 0 123px 0;
`;

export const ImageContent = styled.div`
  display: flex;
`;

export const News = styled.p`
  background-color: #69b643;
  padding: 12px 19px;
  max-width: 117px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;
