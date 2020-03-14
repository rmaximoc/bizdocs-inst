import React, { useState } from 'react';
import { string } from 'prop-types';
import {
  ItemLine,
  Line,
  Title,
  Icon,
  Inner,
  Content,
  Paragraph
} from './Accordion.style';

const AccordionItem = ({ title, paragraph }) => {
  const [opened, setState] = useState({
    opened: false
  });

  const handleClick = () =>
    setState(previousState => ({ ...previousState, opened: !opened }));

  return (
    <ItemLine onClick={handleClick}>
      <Line>
        <Title>{title}</Title>
        <Icon />
      </Line>
      <Inner>
        <Content>
          <Paragraph>{paragraph}</Paragraph>
        </Content>
      </Inner>
    </ItemLine>
  );
};

AccordionItem.propTypes = {
  title: string.isRequired,
  paragraph: string.isRequired
};

export default AccordionItem;
