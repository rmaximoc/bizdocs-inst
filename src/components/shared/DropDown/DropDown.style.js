import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
`;

export const Triangle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: auto 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid #ffffff;
`;

export const Content = styled.div`
  display: none;
  width: 140px;
  max-width: 140px;
  margin-left: -28px;
  justify-content: center;
  padding: 17px 10px 10px;
  background-color: #ffffff;
  flex-direction: column;
  position: absolute;
  top: 43px;
  border-radius: 5px;

  button {
    border: 0;
    border-bottom: 1px solid #585858;
    margin-bottom: 15px;
    text-align: left;
    color: #585858;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    padding: 5px;

    :hover {
      background-color: #69b643;
      border-radius: 3px;
      color: #ffffff;
    }
  }
`;
