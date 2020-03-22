import React from 'react';
import { element, string } from 'prop-types';
import {
  Container,
  MarginBox,
  ComplianceContent,
  StampBox,
  TextContent,
  Title,
  Texts,
  ButtonBoxDesktop,
  ButtonBoxMobile
} from './Compliance.style';
import GreenButton from '../GreenButton/GreenButton';

const Compliance = ({ stamp, title, content, buttonContent, margin }) => {
  return (
    <Container>
      <MarginBox margin={margin}>
        <ComplianceContent>
          <StampBox>{stamp}</StampBox>
          <Texts>
            <Title>{title}</Title>
            <TextContent>{content}</TextContent>
          </Texts>
          <ButtonBoxDesktop>
            <GreenButton content={buttonContent} maxWidth="280px" />
          </ButtonBoxDesktop>
          <ButtonBoxMobile>
            <GreenButton content={buttonContent} width="100%" />
          </ButtonBoxMobile>
        </ComplianceContent>
      </MarginBox>
    </Container>
  );
};

Compliance.propTypes = {
  stamp: element.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  buttonContent: string.isRequired,
  margin: string
};

Compliance.defaultProps = {
  margin: '0 auto 240px'
};

export default Compliance;
