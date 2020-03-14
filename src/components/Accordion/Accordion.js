import React from 'react';
import { Container, MarginBox, Box, AccordionList } from './Accordion.style';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  return (
    <Container>
      <MarginBox>
        <Box>
          <AccordionList>
            <li>
              <AccordionItem />
            </li>
          </AccordionList>
        </Box>
      </MarginBox>
    </Container>
  );
};

export default Accordion;

// const data = [
//   {
//     title: 'Pricing plans',
//     paragraph
//   },
//   {
//     title: 'How to apply',
//     paragraph
//   },
//   {
//     title: 'Purchasing process',
//     paragraph
//   },
//   {
//     title: 'Usage guides',
//     paragraph
//   }
// ]

// class AccordionItem extends React.Component {
//   state = {
//     opened: false
//   }

//   render () {
//     const {
//       props: {
//         paragraph,
//         title
//       },
//       state: {
//         opened
//       }
//     } = this

//   }
// }
