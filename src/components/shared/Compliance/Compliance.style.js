import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin: ${({ margin }) => margin};
`;

export const ComplianceContent = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b2555;
  min-height: 248px;
  justify-content: center;
  box-shadow: 0px 10px 20px #0000003b;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 22px;
  }
`;

export const TextContent = styled.p`
  font-size: 16px;

  @media screen and (max-width: 992px) {
    margin-bottom: 24px;
  }
`;

export const StampBox = styled.div`
  display: flex;
  height: 100%;
  padding: 33px 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 474px;
  margin-right: 128px;

  @media screen and (max-width: 992px) {
    max-width: unset;
    margin-right: 0;
  }
`;
