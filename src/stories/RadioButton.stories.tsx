import React from 'react';

import Stack from '@mui/material/Stack';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import CustomRadioButton from '../components/radioButton.componens';

export default {
  title: "Example/RadioButton",
  component: CustomRadioButton,
} as ComponentMeta<typeof CustomRadioButton>;

const Template: ComponentStory<typeof CustomRadioButton> = (args) => (
  <CustomRadioButton {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  color: "secondary",
};

export const Variants: ComponentStory<typeof CustomRadioButton> = () => (
  <Stack spacing={2}>
    <div>
      <CustomRadioButton />
    </div>
    <div>
      <CustomRadioButton checked />
    </div>
    <div>
      <CustomRadioButton disabled />
    </div>
  </Stack>
);

export const Colors: ComponentStory<typeof CustomRadioButton> = () => (
  <>
    <Stack spacing={2}>
      <div>
        <CustomRadioButton checked label="Primary" />
      </div>
      <div>
        <CustomRadioButton checked color="secondary" label="Secondary" />
      </div>
      <div>
        <CustomRadioButton checked color="success" label="Success" />
      </div>
      <div>
        <CustomRadioButton checked color="error" label="Error" />
      </div>
    </Stack>
  </>
);

export const Sizes: ComponentStory<typeof CustomRadioButton> = () => (
  <Stack spacing={2}>
    <div>
      <CustomRadioButton size="small" checked label="Small" />
    </div>
    <div>
      <CustomRadioButton size="medium" checked label="Medium" />
    </div>
    <div>
      <CustomRadioButton size="large" checked label="Large" />
    </div>
  </Stack>
);
