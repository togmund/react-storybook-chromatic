import React from "react";

import OtherPage from "../OtherPage";

export default {
  title: "Pages/Other Page",
  component: OtherPage,
};

const Template = (args) => <OtherPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
