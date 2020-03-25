import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const MarginBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
`;

export const AccordionList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 0 0.8rem 0.1rem rgba(darken(#3978ef, 20%), 0.06),
    0 20px 30px -10px rgba(darken(#3978ef, 20%), 0.2);

  li {
    background-color: ${({ liColor }) => liColor};

    p {
      color: ${({ fontColor }) => fontColor};
    }
  }
`;

export const AccordionItem = styled.div`
  display: flex;
`;

export const AccordionLine = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
`;

export const AccordionTitle = styled.h3`
  display: flex;
  font-size: 16px;
  margin: 0;
  font-weight: 700;
  color: ${({ color }) => color};

  @media screen and (max-width: 992px) {
    font-size: 12px;
    max-width: 90%;
  }
`;

export const AccordionIcon = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.opened ? 'rotate(180deg)' : 'rotate(0)')};
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
`;

export const AccordionInner = styled.div`
  max-height: ${props => (props.opened ? '100rem' : '0')};
  overflow: hidden;
  text-transform: ${props =>
    props.opened
      ? 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'
      : 'cubic-bezier(0.95, 0.05, 0.795, 0.035)'};
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;
`;

export const AccordionContent = styled.div`
  opacity: ${props => (props.opened ? '1' : '0')};
  transform: ${props => (props.opened ? 'translateY(0)' : 'translateY(-1rem)')};
  transition-timing-function: ${props =>
    props.opened ? 'linear, ease' : 'ease-in-out'};
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  transition-delay: 0.5s;
  padding: 0 1.2rem 1.2rem;
`;

export const AccordionParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #333;
  font-weight: 300;
  line-height: 1.3;
`;
