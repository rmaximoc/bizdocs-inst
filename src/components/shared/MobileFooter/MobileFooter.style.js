import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: #1b2555;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    width: 90%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 45px auto 53px;
`;

export const Copyright = styled.p`
  font-size: 10px;
  margin-bottom: 46px;
`;

export const Links = styled(Link)`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  flex-direction: column;
  text-decoration: none;
  margin: 20px 0;
`;
