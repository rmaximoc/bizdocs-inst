import React from 'react';
import { element, string } from 'prop-types';
import { Container, MarginBox, Image, Text } from './ImageBottomText.style';

const ImageBottomText = ({ bgImage, text }) => {
  return (
    <Container>
      <MarginBox>
        <Image bgImage={bgImage}>
          <Text>{text}</Text>
        </Image>
      </MarginBox>
    </Container>
  );
};

ImageBottomText.propTypes = {
  bgImage: element.isRequired,
  text: string.isRequired
};

export default ImageBottomText;
