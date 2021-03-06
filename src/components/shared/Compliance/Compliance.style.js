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
  padding: 28px;
  justify-content: space-around;
  box-shadow: 0px 10px 20px #0000003b;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 0 22px 53px;
  }
`;

export const StampText = styled.div`
  display: flex;
  align-items: center;
  width: ${({ stampTextWidth }) => stampTextWidth};

  @media screen and (max-width: 992px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const TextContent = styled.p`
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 992px) {
    margin-bottom: 24px;
  }
`;

export const StampBox = styled.div`
  display: flex;
  height: 100%;
  padding: 33px 20px;
  margin-bottom: ${({ marginBottom }) => marginBottom};

  @media screen and (max-width: 1360px) {
    margin-bottom: ${({ mediaMargin }) => mediaMargin};
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 5px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 664px;
  margin-right: 40px;
  line-height: 170%;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 992px) {
    max-width: unset;
    margin-right: 0;
  }
`;

export const ButtonBoxMobile = styled.div`
  display: none;
  width: 100%;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const ButtonBoxDesktop = styled.div`
  display: flex;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
