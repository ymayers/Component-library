import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
// import Cart from "./Pictures/cart_2.png";

storiesOf("Button", module)
  .add("Primary1", () => <Button label="Primary" type="style " />)
  .add("Primary2", () => <Button label="Primary" type="styleframe " />)
  .add("Primary3", () => <Button label="Primary" type="fade " />)
  .add("Primary4", () => <Button label="Primary" type="style large" />)
  .add("Primary5", () => <Button label="Primary" type="styleframe large" />)
  .add("Primary6", () => <Button label="Primary" type="fade large" />)
  .add("Danger1", () => <Button label="Danger" type="dangerstyle " />)
  .add("Danger2", () => <Button label="Danger" type="dangerfade " />)
  .add("Danger3", () => <Button label="Danger" type="dangerframe " />)
  .add("Danger4", () => <Button label="Danger" type="dangerstyle large" />)
  .add("Danger5", () => <Button label="Danger" type="dangerframe large" />)
  .add("Danger6", () => <Button label="Danger" type="dangerfade large" />)
  .add("Success1", () => <Button label="Success" type="success" />)
  .add("Success2", () => <Button label="Success" type="successfade" />)
  .add("Success3", () => <Button label="Success" type="successframe" />)
  .add("Success4", () => <Button label="Success" type="success large" />)
  .add("Success5", () => <Button label="Success" type="successfade large" />)
  .add("Success6", () => <Button label="Success" type="successframe large" />)
  .add("Warning1", () => <Button label="Warning" type="warning" />)
  .add("Warning2", () => <Button label="Warning" type="warningfade" />)
  .add("Warning3", () => <Button label="Warning" type="warningframe" />)
  .add("Warning4", () => <Button label="Warning" type="warning large" />)
  .add("Warning5", () => <Button label="Warning" type="warningfade large" />)
  .add("Warning6", () => <Button label="Warning" type="warningframe large" />)
  .add("Default1", () => <Button label="Default" type="default" />)
  .add("Default2", () => <Button label="Default" type="defaultfade" />)
  .add("Default3", () => <Button label="Default" type="defaultframe" />)
  .add("Default4", () => <Button label="Default" type="default large" />)
  .add("Default5", () => <Button label="Default" type="defaultfade large" />)
  .add("Default6", () => <Button label="Default" type="defaultframe large" />);
// .add("Cart1", () => (
//   <Button icon={Cart} label="Add To Cart" type="cart1 ">
//     icon
//   </Button>
// ));
