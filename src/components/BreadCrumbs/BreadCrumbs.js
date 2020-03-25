import React from 'react';
import { string } from 'prop-types';
import { Container, MarginBox, BreadBox } from './BreadCrumbs.style';

const BreadCrumbs = ({ content, link }) => {
  return (
    <Container>
      <MarginBox>
        <BreadBox>
          {content}
          <span>{`⠀${link}`}</span>
        </BreadBox>
      </MarginBox>
    </Container>
  );
};

BreadCrumbs.propTypes = {
  content: string.isRequired,
  link: string.isRequired
};

export default BreadCrumbs;
