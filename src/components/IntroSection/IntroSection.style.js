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

  @media${({ theme: { devices } }) => devices.smallMobile} {
    flex-direction: column;
  }
`;

export const ButtonBoxDesktop = styled.div`
  display: flex;

  @media${({ theme: { devices } }) => devices.smallMobile} {
    display: none;
  }
`;

export const ButtonBoxMobile = styled.div`
  display: none;
  width: 100%;

@media${({ theme: { devices } }) => devices.smallMobile} {
  display: flex;
}
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 41px;
  max-width: 550px;

  @media${({ theme: { devices } }) => devices.smallMobile} {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 24px;

    @media${({ theme: { devices } }) => devices.smallMobile} {
      font-size: 24px;
    }
  }

  p {
    font-size: 16px;

    @media${({ theme: { devices } }) => devices.smallMobile} {
      display: none;
    }
  }
`;

export const PresentationContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 130px auto 123px 0;
  width: 50%;

  @media${({ theme: { devices } }) => devices.smallMobile} {
    width: 100%;
    margin: 50px 0 0;
    text-align: center;
  }
`;

export const VideoContent = styled.div`
  display: flex;
  border: 1px solid red;
  width: 564px;
  height: 320px;

  @media${({ theme: { devices } }) => devices.smallMobile} {
    width: 100%;
  }
`;

const bounce = keyframes`
  0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out
    }

    25% {
      -webkit-transform: translate(0px, 6px);
      transform: translate(0px, 6px);
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out
    }

    50% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out
    }

    75% {
      -webkit-transform: translate(0px, 6px);
      transform: translate(0px, 6px);
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out
    }

    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0)
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
