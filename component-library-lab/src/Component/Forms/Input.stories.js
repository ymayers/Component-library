import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.js";

storiesOf("Input", module)
  .add("EmailSmall", () => (
    <Input label="Email" placeholder="Email" type="email small" />
  ))
  .add("EmailMedium", () => (
    <Input label="Email" placeholder="Email" type="email medium" />
  ))
  .add("EmailLarge", () => (
    <Input label="Email" placeholder="Email" type="email large" />
  ));
