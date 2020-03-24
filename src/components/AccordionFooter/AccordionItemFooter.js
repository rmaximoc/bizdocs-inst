import React from 'react';
import { string, bool } from 'prop-types';
import {
  AccordionLine,
  AccordionIcon,
  AccordionTitle,
  AccordionInner,
  AccordionContent,
  AccordionParagraph
} from './AccordionFooter.style';

const AccordionItemFooter = ({ title, paragraph, opened, bgColor, color }) => {
  return (
    <>
      <AccordionLine bgColor={bgColor}>
        <AccordionTitle color={color}>
          {title}
          <AccordionIcon opened={opened} />
        </AccordionTitle>
      </AccordionLine>
      <AccordionInner opened={opened}>
        <AccordionContent opened={opened}>
          <AccordionParagraph>{paragraph}</AccordionParagraph>
        </AccordionContent>
      </AccordionInner>
    </>
  );
};

AccordionItemFooter.propTypes = {
  title: string.isRequired,
  paragraph: string.isRequired,
  opened: bool.isRequired,
  bgColor: string.isRequired,
  color: string
};

AccordionItemFooter.defaultProps = {
  color: '#585858'
};

export default AccordionItemFooter;
