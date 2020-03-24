import React from 'react';
import { element, string } from 'prop-types';
import {
  Container,
  MarginBox,
  CardContent,
  Title,
  Paragraph,
  Link,
  StampBox
} from './CardWithLink.style';

const CardWithLink = ({ image, title, paragraph, linkText, href }) => {
  return (
    <Container>
      <MarginBox>
        <CardContent>
          <StampBox>{image}</StampBox>
          <Title>{title}</Title>
          <Paragraph>{paragraph}</Paragraph>
          <Link href={href}>{linkText}</Link>
        </CardContent>
      </MarginBox>
    </Container>
  );
};

CardWithLink.propTypes = {
  image: element.isRequired,
  title: string.isRequired,
  paragraph: string.isRequired,
  linkText: string.isRequired,
  href: string.isRequired
};

export default CardWithLink;
