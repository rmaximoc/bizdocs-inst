import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px #86868629;
  width: 343px;
  height: 545px;
  margin: 0 10px;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 0 auto 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  font-weight: 700;
  justify-content: center;
  padding: 15px;
  border-radius: 6px 6px 0px 0px;
  background-color: ${({ cardColor }) => cardColor};
`;

export const Price = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #adadad;
  font-size: 14px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
`;

export const Value = styled.h1`
  color: ${({ cardColor }) => cardColor};
  font-size: 56px;

  span {
    color: ${({ cardColor }) => cardColor};
  }

  h3 {
    font-size: 35px;
    color: ${({ cardColor }) => cardColor};
  }
`;
