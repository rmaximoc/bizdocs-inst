import React from 'react';
import { string } from 'prop-types';
import Switch from 'react-ios-switch';
import { Box, Title } from './SwitchButton.style';

const SwitchButton = ({ color }) => {
  return (
    <Box>
      <Title color={color}>G.Contabilidade</Title>
      <Switch />
      <Title color={color}>Empresas</Title>
    </Box>
  );
};

SwitchButton.propTypes = {
  color: string
};

SwitchButton.defaultProps = {
  color: '#ADADAD'
};

export default SwitchButton;
