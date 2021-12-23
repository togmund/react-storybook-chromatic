import React from "react";

import Link from "../components/Link";

export default {
  title: "Components/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {};
