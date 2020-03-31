import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 20px #9b9b9b3c;
`;

export const ContactBox = styled.div`
  margin: 56px auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #1b2555;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    margin: 0px;
  }

  input {
    min-width: 468px;
    margin: 0px 5px;
    padding: 20px;
    font-size: 14px;
    color: #585858;
    border-radius: 6px;
    border: 1px solid #adadad;

    @media screen and (max-width: 992px) {
      min-width: unset;
      margin: 10px 5px;
      min-width: unset;
      width: 100%;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;
