import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 1;
  max-height: 502px;
`;

export const MarginBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px 240px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${({ minHeight }) => minHeight};
  margin-top: ${({ marginTop }) => marginTop};
  max-width: 310px;
  box-shadow: 0px 10px 20px #86868638;
  background-color: #ffffff;
  padding: 20px;
  transition: transform 0.2s;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid #69b643;
    margin-bottom: 21px;
    object-fit: cover;
  }

  @media screen and (max-width: 992px) {
    max-width: unset;
  }

  :hover {
    transform: scale(1.17);
  }
`;

export const TextContent = styled.p`
  color: #585858;
  text-align: center;
  margin-bottom: 19px;
  font-size: 16px;
  font-weight: 500;
`;

export const NameText = styled.p`
  color: #585858;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
`;

export const OccupationText = styled.p`
  color: #585858;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
`;
