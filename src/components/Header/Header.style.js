import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 130px;

  background-color: #1b2555;
`;

export const DropButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinksContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 0 18px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
