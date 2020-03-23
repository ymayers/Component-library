import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import "./Checkbox.css";

storiesOf("Checkbox", module)
  .add("Checkbox 1", () => (
    <Checkbox type="checkbox1" checkStyle="checkmark" boxColor="container" />
  ))
  .add("Checkbox 2", () => (
    <Checkbox type="checkbox2" checkStyle="checkmark" boxColor="container" />
  ))
  .add("Checkbox 3", () => (
    <Checkbox
      type="checkbox3"
      checkStyle="checkmark"
      boxColor="container"
      label="Don't show this popup again"
    />
  ));
