import React from 'react';

import Stack from '@mui/material/Stack';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import CustomCheckbox from '../components/checkbox.component';

export default {
  title: "Example/Checkbox",
  component: CustomCheckbox,
} as ComponentMeta<typeof CustomCheckbox>;

const Template: ComponentStory<typeof CustomCheckbox> = (args) => (
  <CustomCheckbox {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  color: "secondary",
};

export const Variants: ComponentStory<typeof CustomCheckbox> = () => (
  <Stack spacing={2}>
    <div>
      <CustomCheckbox />
    </div>
    <div>
      <CustomCheckbox checked />
    </div>
    <div>
      <CustomCheckbox disabled />
    </div>
  </Stack>
);

export const Colors: ComponentStory<typeof CustomCheckbox> = () => (
  <>
    <Stack spacing={2}>
      <div>
        <CustomCheckbox checked label="Primary" />
      </div>
      <div>
        <CustomCheckbox checked color="secondary" label="Secondary" />
      </div>
      <div>
        <CustomCheckbox checked color="success" label="Success" />
      </div>
      <div>
        <CustomCheckbox checked color="error" label="Error" />
      </div>
    </Stack>
  </>
);

export const Sizes: ComponentStory<typeof CustomCheckbox> = () => (
  <Stack spacing={2}>
    <div>
      <CustomCheckbox size="small" checked label="Small" />
    </div>
    <div>
      <CustomCheckbox size="medium" checked label="Medium" />
    </div>
    <div>
      <CustomCheckbox size="large" checked label="Large" />
    </div>
  </Stack>
);
