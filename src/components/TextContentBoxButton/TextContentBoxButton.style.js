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
  width: 80%;
  margin: 0 auto;

  img {
    margin-top: 40px;
    max-height: 62px;
    max-width: 217px;
    filter: grayscale(100%);

    :hover {
      filter: unset;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto 90px;

  @media screen and (max-width: 992px) {
    margin: 60px 0 90px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
