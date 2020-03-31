import React, { useState } from 'react';
import { string } from 'prop-types';
import Switch from 'react-ios-switch';
import { Box, Title1, Title2 } from './SwitchButton.style';

const SwitchButton = ({ color }) => {
  const [check, setChecked] = useState(false);

  return (
    <Box>
      <Title1 checked={check} color={color}>
        G.Contabilidade
      </Title1>
      <Switch checked={check} onChange={setChecked} />
      <Title2 checked={check} color={color}>
        Empresas
      </Title2>
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
