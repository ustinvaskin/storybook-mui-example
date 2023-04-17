import React from 'react';

import Radio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

type RadioButtonBaseProps = Pick<
  MuiRadioProps,
  'color' | 'checked' | 'disabled' | 'icon'
>;

type RadioButtonProps = RadioButtonBaseProps & {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  checked?: boolean;
};

const StyledRadioButton = styled(Radio)(({ theme }) => ({}));

export const CustomRadioButton = ({ label, onChange, ...rest }: RadioButtonProps) => {
  const { checked = false, ...otherProps } = rest;
  return (
    <StyledRadioButton
      {...otherProps}
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': label }}
    />
  );
};

CustomRadioButton.defaultProps = {
  color: 'primary',
  disabled: false,
  size:'medium',
};

export default CustomRadioButton;
