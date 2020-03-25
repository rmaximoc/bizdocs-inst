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
import { ReactComponent as Plus } from '../../assets/images/plus.svg';
import { ReactComponent as Substract } from '../../assets/images/substract.svg';

const AccordionItem = ({ title, paragraph, opened, bgColor, color }) => {
  return (
    <>
      <AccordionLine bgColor={bgColor}>
        <AccordionTitle color={color}>{title}</AccordionTitle>
        <AccordionIcon opened={opened}>
          {!opened ? <Plus fill="#858585" /> : <Substract fill="#858585" />}
        </AccordionIcon>
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
