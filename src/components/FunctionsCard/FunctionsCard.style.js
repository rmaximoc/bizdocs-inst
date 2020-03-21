import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 10px 20px #b4b4b429;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 450px;
  width: 80%;
  justify-content: center;
  padding: 45px;
  background-color: #ffffff;
  text-align: center;

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
