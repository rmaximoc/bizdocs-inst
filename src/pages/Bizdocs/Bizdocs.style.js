import styled from 'styled-components';

export const CardBox = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 372px;
  margin: 0px auto 20px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
