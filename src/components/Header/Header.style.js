import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 130px;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const DropButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-weight: 600;
    margin: 0 18px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
