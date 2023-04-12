import React from 'react';

import Checkbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

type CheckboxBaseProps = Pick<
  MuiCheckboxProps,
  'color' | 'checkedIcon' | 'disabled' | 'icon'
>;

type CheckboxProps = CheckboxBaseProps & {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  checked?: boolean;
};

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({}));

const CustomCheckbox = ({ label, onChange, ...rest }: CheckboxProps) => {
  const { checked = false, ...otherProps } = rest;
  return (
    <StyledCheckbox
      {...otherProps}
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': label }}
    />
  );
};

CustomCheckbox.defaultProps = {
  color: 'primary',
  disabled: false,
  size:'medium',
};

export default CustomCheckbox;
