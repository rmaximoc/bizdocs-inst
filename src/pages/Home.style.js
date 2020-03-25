import styled from 'styled-components';
import mainBackground from '../assets/images/main-background.png';
import secondBackground from '../assets/images/second-background.png';

export const MainBackground = styled.div`
  background-image: url(${mainBackground});
  background-size: cover;

  @media screen and (max-width: 992px) {
    background-color: #1b2555;
    background-image: unset;
  }
`;

export const SecondBackground = styled.div`
  background-image: url(${secondBackground});
  background-size: cover;

  @media screen and (max-width: 992px) {
    margin-top: -213px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -175px;
  }
`;
