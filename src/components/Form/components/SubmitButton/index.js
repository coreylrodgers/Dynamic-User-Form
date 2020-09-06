import React from "react";
import { Button as Btn } from "@material-ui/core";

const Button = ({ text, clicked }) => {
  return <Btn onClick={clicked}>{text}</Btn>;
};

export default Button;
