import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b2555;
  min-height: 464px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MarginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 66px auto 97px;
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #ffffff;
    margin-top: 10px;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 14px;
  color: #abc6de;
  margin-bottom: 21px;
`;

export const Links = styled.a`
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
  font-size: 12px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  margin-top: 56px;
  font-size: 10px;
`;
