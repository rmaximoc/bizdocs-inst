import styled from 'styled-components';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 300px;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    max-width: unset;
  }
`;

export const Date = styled.p`
  text-align: left;
  color: #adadad;
  margin: 28px 0;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #1c3144;
`;

export const Image = styled.div`
  display: flex;

  img {
    object-fit: cover;
    max-width: 300px;
    max-height: 200px;

    @media screen and (max-width: 992px) {
      max-width: unset;
      max-height: unset;
      width: 100%;
    }
  }
`;
