import styled from 'styled-components';

export const DesktopBox = styled.div`
  display: flex;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
