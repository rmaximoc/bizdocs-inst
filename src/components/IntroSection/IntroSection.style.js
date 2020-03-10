import styled, { keyframes } from 'styled-components';
import { ReactComponent as Triangles } from '../../assets/images/triangles.svg';

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

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 41px;
  max-width: 550px;

  h1 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
  }
`;

export const PresentationContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 130px auto 123px 0;
  width: 50%;
`;

export const VideoContent = styled.div`
  display: flex;
  border: 1px solid red;
  width: 564px;
  height: 320px;
`;

const bounce = keyframes`
    from,
    20%,
    53%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -30px, 0);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -4px, 0);
      transform: translate3d(0, -4px, 0);
    }
  }
`;

export const Triangle = styled(Triangles)`
  margin-bottom: 40px;
  width: 20px;
  height: 40px;
  justify-content: center;
  animation: ${bounce} 2s linear infinite;
`;
