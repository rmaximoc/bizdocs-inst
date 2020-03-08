import React from 'react';
import {
  Container,
  MarginBox,
  ComplianceContent,
  TextContent,
  Title,
  Texts
} from './Compliance.style';
import GreenButton from '../shared/GreenButton/GreenButton';
import { ReactComponent as Stamp } from '../../assets/images/green-stamp.svg';

const Compliance = () => {
  return (
    <Container>
      <MarginBox>
        <ComplianceContent>
          <Stamp />
          <Texts>
            <Title>Conformidade com DL28/2019</Title>
            <TextContent>
              O Bizdocs está em total conformidade com o DL 28/2019, tanto em
              contabilidade manual como automatizada.
            </TextContent>
          </Texts>
          <GreenButton content="Experimente grátis" maxWidth="280px" />
        </ComplianceContent>
      </MarginBox>
    </Container>
  );
};

export default Compliance;
