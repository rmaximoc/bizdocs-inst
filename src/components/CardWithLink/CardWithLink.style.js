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
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  border-radius: 6px;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin: 50px 5px;
  min-width: 372px;
  min-height: 377px;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 20px 60px #b4b4b429;

  @media screen and (max-width: 992px) {
    min-width: unset;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-top: 20px;
  font-weight: 700;
  color: #69b643;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  margin-top: 20px;
  font-weight: 500;
  color: #585858;
  text-align: center;
`;

export const Link = styled.a`
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: #69b643;
`;
