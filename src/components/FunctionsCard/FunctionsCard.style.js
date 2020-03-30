import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 10px 20px #b4b4b429;
  margin: 20px 10px;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 6px;

  p {
    color: #585858;
  }

  @media screen and (max-width: 992px) {
    min-width: unset;
    width: 100%;
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #69b643;
  margin: 22px 0;
`;
