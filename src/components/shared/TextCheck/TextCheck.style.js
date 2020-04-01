import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarginBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  margin: 10px 0;

  div {
    color: #585858;
    font-size: 14px;

    @media screen and (max-width: 992px) {
      font-size: 12px;
    }
  }
`;

export const BoxCheck = styled.div`
  display: flex;
  margin-right: 50px;
  margin-bottom: 6px;
`;

export const Hyper = styled(Link).attrs({ to: '#' })`
  color: #1b2555;
  font-weight: bold;
`;
