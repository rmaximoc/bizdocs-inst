import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};

  @media screen and (max-width: 1376px) {
    min-width: 1220px;
  }
`;

export const MainColumn = styled.div`
  color: #585858;
  width: 33.3%;
  padding: 26px;
`;

export const FirstColumn = styled.div`
  color: #585858;
  text-align: center;
  width: 13.3%;
  padding: 26px;
`;

export const SecondColumn = styled.div`
  color: #585858;
  text-align: center;
  width: 13.3%;
  padding: 26px;
`;

export const ThirdColumn = styled.div`
  color: #585858;
  text-align: center;
  width: 13.3%;
  padding: 26px;
`;

export const FourthColumn = styled.div`
  color: #585858;
  text-align: center;
  width: 13.3%;
  padding: 26px;
`;

export const FifthColumn = styled.div`
  color: #585858;
  text-align: center;
  width: 13.3%;
  padding: 26px;
`;
