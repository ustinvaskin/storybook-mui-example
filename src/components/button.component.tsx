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


type ButtonProps = ButtonBaseProps & {
  label: string;
}

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  minHeigh: "40px",
  borderRadius: "100px",
  fontSize:'14px',
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },

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
