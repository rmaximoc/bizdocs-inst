import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 10px 20px #86868629;
  width: 343px;
  height: 545px;
`;

export const Header = styled.div`
  display: flex;
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
