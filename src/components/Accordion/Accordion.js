import React, { useState } from 'react';
import { string } from 'prop-types';
import { Container, MarginBox, Box, AccordionList } from './Accordion.style';
import AccordionItem from './AccordionItem';

const Accordion = ({ bgColor, title, paragraph, color, width }) => {
  const [opened, setOpen] = useState(false);

  function handleClick() {
    setOpen(!opened);
  }
  return (
    <Container>
      <MarginBox>
        <Box>
          <AccordionList onClick={handleClick}>
            <li>
              <AccordionItem
                bgColor={bgColor}
                opened={opened}
                title={title}
                paragraph={paragraph}
                color={color}
                width={width}
              />
            </li>
          </AccordionList>
        </Box>
      </MarginBox>
    </Container>
  );
};

Accordion.propTypes = {
  bgColor: string.isRequired,
  title: string.isRequired,
  paragraph: string.isRequired,
  color: string,
  width: string
};

Accordion.defaultProps = {
  color: '#585858',
  width: ''
};

export default Accordion;
