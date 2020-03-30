import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BurgerMenuContainer = styled.div`
  display: none;
  position: relative;
  justify-content: flex-end;
  top: 0;
  right: 0;
  z-index: 99;
  align-items: center;
  color: white;

  @media screen and (max-width: 1024px) {
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

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const MenuItemContainer = styled.div`
  opacity: ${props => (props.open ? '0' : '1')};
  animation: 1s appear forwards;
  text-align: center;
  padding: 1rem 0;
  margin: 0 5%;
  animation-delay: ${({ delay }) => delay};
`;

export const MenuItemContent = styled(Link)`
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.hover ? 'gray' : '#fafafa')};
  transition: color 0.2s ease-in-out;
  animation: 0.5s slideIn forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const MenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: ${props => (props.open ? '100%' : '0')};
  width: 100vw;
  flex-direction: column;
  background-color: #1b2555;
  color: #fafafa;
  transition: height 0.3s ease;
  z-index: 2;
  margin-top: 70px;
  margin-right: -5vw;
  transition: all 0.2s ease;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const MenuList = styled.div`
  padding-top: 3rem;
  background-color: #1b2555;
  transition: all 0.2s ease;
`;

export const MenuButtonContainer = styled.div`
  display: none;
  height: 32px;
  width: 32px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  z-index: 100;

  @media screen and (max-width: 1024px) {
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

export const PostMenu = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-color: #1b2555;
`;

export const DropDownMobile = styled.div`
  display: flex;
  justify-content: center;
  margin: 33px auto 27px;
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
