import React from 'react';

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  heigh: '40px',
  borderRadius: "100px",
}));

export const Button = ({ label, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{label}</StyledButton>
);

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
  disabled: false,
};
