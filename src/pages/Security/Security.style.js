import styled from 'styled-components';

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin: 0 auto;

  img {
    margin: 30px auto;
    min-width: 920px;
    max-height: 350px;
    object-fit: cover;
    object-position: bottom;

    @media screen and (max-width: 992px) {
      width: 100%;
      min-width: unset;
    }
  }
`;

export const DesktopButton = styled.div`
  display: flex;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MobileButton = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;
