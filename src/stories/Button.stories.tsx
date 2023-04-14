import React from 'react';

import Stack from '@mui/material/Stack';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Button } from '../components/button.component';

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  label: "Click me!",
};

export const Variants: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="text" label="Text Button" />
    <Button variant="contained" label="Contained Button" />
    <Button variant="outlined" label="Outlined Button" />
    <Button variant="text" disabled={true} label="Text Button" />
    <Button variant="contained" disabled={true} label="Contained Button" />
    <Button variant="outlined" disabled={true} label="Outlined Button" />
  </Stack>
);

export const Colors: ComponentStory<typeof Button> = () => (
  <>
    <Stack spacing={2} maxWidth={300}>
      <Button variant="contained" label="Primary" />
      <Button variant="contained" color="secondary" label="Secondary" />
      <Button variant="contained" color="success" label="Success" />
      <Button variant="contained" color="error" label="Error" />
      <Button variant="outlined" label="Primary" />
      <Button variant="outlined" color="secondary" label="Secondary" />
      <Button variant="outlined" color="success" label="Success" />
      <Button variant="outlined" color="error" label="Error" />
      <Button variant="contained" disabled label="Primary" />
      <Button variant="contained" disabled color="secondary" label="Secondary" />
      <Button variant="contained" disabled color="success" label="Success" />
      <Button variant="contained" disabled color="error" label="Error" />
      <Button variant="outlined"  disabled label="Primary" />
      <Button variant="outlined"  disabled color="secondary" label="Secondary" />
      <Button variant="outlined"  disabled color="success" label="Success" />
      <Button variant="outlined"  disabled color="error" label="Error" />
    </Stack>
  </>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" size="small" label="Small" />
    <Button variant="contained" size="medium" label="Medium" />
    <Button variant="contained" size="large" label="Large" />
  </Stack>
);
