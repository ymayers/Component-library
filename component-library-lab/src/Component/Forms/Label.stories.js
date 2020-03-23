import React from "react";
import { storiesOf } from "@storybook/react";
import Label from "./Label.js";

storiesOf("Label", module)
  .add("Label small", () => <Label label="Email" type="label small" />)
  .add("Label medium", () => <Label label="Email" type="label medium" />)
  .add("Label large", () => <Label label="Email" type="label large" />);
