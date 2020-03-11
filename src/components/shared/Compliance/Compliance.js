import React from 'react';
import { element, string } from 'prop-types';
import {
  Container,
  MarginBox,
  ComplianceContent,
  TextContent,
  Title,
  Texts
} from './Compliance.style';
import GreenButton from '../GreenButton/GreenButton';

const Compliance = ({ stamp, title, content, buttonContent }) => {
  return (
    <Container>
      <MarginBox>
        <ComplianceContent>
          {/* {stamp} */}
          <Texts>
            <Title>{title}</Title>
            <TextContent>{content}</TextContent>
          </Texts>
          <GreenButton content={buttonContent} maxWidth="280px" />
        </ComplianceContent>
      </MarginBox>
    </Container>
  );
};

Compliance.propTypes = {
  stamp: element.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  buttonContent: string.isRequired
};

export default Compliance;
