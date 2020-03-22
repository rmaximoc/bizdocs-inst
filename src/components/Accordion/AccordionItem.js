import React from 'react';
import { string, bool } from 'prop-types';
import {
  AccordionLine,
  AccordionIcon,
  AccordionTitle,
  AccordionInner,
  AccordionContent,
  AccordionParagraph
} from './Accordion.style';

const AccordionItem = ({ title, paragraph, opened, bgColor, color }) => {
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

AccordionItem.propTypes = {
  title: string.isRequired,
  paragraph: string.isRequired,
  opened: bool.isRequired,
  bgColor: string.isRequired,
  color: string
};

AccordionItem.defaultProps = {
  color: '#585858'
};

export default AccordionItem;
