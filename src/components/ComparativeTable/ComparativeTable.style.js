import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const MarginBox = styled.div`
  width: 80%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
`;

export const Header = styled.div`
  align-items: center;
  padding: 38px 0px;
  display: flex;
  min-width: 1145px;
`;

export const Box = styled.div`
  display: flex;
  min-width: 1100px;
`;

export const Title = styled.div`
  display: flex;
  color: #adadad;
  font-size: 24px;
  margin-right: 60px;
  padding-left: 10px;
`;

export const TableWindow = styled.section`
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(117, 203, 75, 0.5);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: flex-end;
  align-items: center;
  width: 65%;
  margin: 0 0 0 403px;
`;

export const StampBox = styled.div`
  display: flex;
`;
