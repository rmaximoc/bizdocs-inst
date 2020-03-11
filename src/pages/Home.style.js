import styled from 'styled-components';
import mainBackground from '../assets/images/main-background.png';
import secondBackground from '../assets/images/second-background.png';

export const MainBackground = styled.div`
  background-image: url(${mainBackground});
  background-size: cover;
`;

export const SecondBackground = styled.div`
  background-image: url(${secondBackground});
  background-size: cover;
`;
