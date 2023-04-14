import React from 'react';

import Stack from '@mui/material/Stack';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import CustomSwitch from '../components/switch.component';

export default {
  title: "Example/Switch",
  component: CustomSwitch,
} as ComponentMeta<typeof CustomSwitch>;

const Template: ComponentStory<typeof CustomSwitch> = (args) => (
  <CustomSwitch {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  color: "secondary",
};

export const Variants: ComponentStory<typeof CustomSwitch> = () => (
  <Stack spacing={2}>
    <div>
      <CustomSwitch />
    </div>
    <div>
      <CustomSwitch checked />
    </div>
    <div>
      <CustomSwitch disabled />
    </div>
  </Stack>
);

export const Colors: ComponentStory<typeof CustomSwitch> = () => (
  <>
    <Stack spacing={2}>
      <div>
        <CustomSwitch checked label="Primary" />
      </div>
      <div>
        <CustomSwitch checked color="secondary" label="Secondary" />
      </div>
      <div>
        <CustomSwitch checked color="success" label="Success" />
      </div>
      <div>
        <CustomSwitch checked color="error" label="Error" />
      </div>
    </Stack>
  </>
);

export const Sizes: ComponentStory<typeof CustomSwitch> = () => (
  <Stack spacing={2}>
    <div>
      <CustomSwitch size="small" checked label="Small" />
    </div>
    <div>
      <CustomSwitch size="medium" checked label="Medium" />
    </div>
    <div>
      <CustomSwitch size="large" checked label="Large" />
    </div>
  </Stack>
);
