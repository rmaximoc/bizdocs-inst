import styled from 'styled-components';

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
