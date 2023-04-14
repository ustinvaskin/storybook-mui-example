import React from 'react';

import { styled } from '@mui/material/styles';
import Switch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

type SwitchBaseProps = Pick<
  MuiSwitchProps,
  'color' | 'checked' | 'disabled' | 'icon'
>;

type SwitchProps = SwitchBaseProps & {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  checked?: boolean;
};

const StyledSwitch = styled(Switch)(({ theme }) => ({}));

const CustomSwitch = ({ label, onChange, ...rest }: SwitchProps) => {
  const { checked = false, ...otherProps } = rest;
  return (
    <StyledSwitch
      {...otherProps}
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': label }}
    />
  );
};

CustomSwitch.defaultProps = {
  color: 'primary',
  disabled: false,
  size:'medium',
};

export default CustomSwitch;
