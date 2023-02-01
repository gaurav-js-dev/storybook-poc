import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default Story;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
