import styled from 'styled-components';

export const BurgerMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.9;
  align-items: center;
  background-color: black;
  width: 100%;
  color: white;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const BurgerMenuContent = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  filter: ${props => (props.menuOpen ? 'blur(2px)' : null)};
  transition: filter 0.5s ease;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const MenuItemContainer = styled.div`
  opacity: 0;
  animation: 1s appear forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const MenuItemContent = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0;
  margin: 0 5%;
  cursor: pointer;
  color: ${props => (props.hover ? 'gray' : '#fafafa')};
  transition: color 0.2s ease-in-out;
  animation: 0.5s slideIn forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const MenuItemLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: gray;
  margin: 0 auto;
  animation: 0.5s shrink forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const MenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => (props.open ? '100%' : '0')};
  width: 100vw;
  flex-direction: column;
  background-color: black;
  opacity: 0.95;
  color: #fafafa;
  transition: height 0.3s ease;
  z-index: 2;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const MenuList = styled.div`
  padding-top: 3rem;
`;

export const MenuButtonContainer = styled.div`
  display: none;
  height: 32px;
  width: 32px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 4px;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const MenuButtonLineTop = styled.div`
  height: 2px;
  width: 20px;
  background-color: ${({ color }) => color};
  transition: all 0.2s ease;
  transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
  transform-origin: top left;
  margin-bottom: 5px;
`;

export const MenuButtonLineMiddle = styled.div`
  height: 2px;
  width: 20px;
  background-color: ${({ color }) => color};
  transition: all 0.2s ease;
  opacity: ${props => (props.open ? '0' : '1')};
  transform: ${props => (props.open ? 'translateX(-16px)' : 'none')};
`;

export const MenuButtonLineBottom = styled.div`
  height: 2px;
  width: 20px;
  background-color: ${({ color }) => color};
  transition: all 0.2s ease;
  transform: ${props =>
    props.open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
  transform-origin: top left;
  margin-top: 5px;
`;

// @keyframes appear {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }

// @keyframes slideIn {
//   0% {
//     transform: translateX(-2%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// }

// @keyframes shrink {
//   0% {
//     width: 95%;
//   }
//   100% {
//     width: 90%;
//   }
// }
