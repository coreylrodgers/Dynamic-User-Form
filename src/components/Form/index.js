import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  FormWrapper,
  FormTitle,
  FormInputs,
  FormInputField,
  FormInput,
  FormCheckBox,
  FormSubtitle,
} from "./styles";

const Form = ({ schema }) => {
  const { title, description, properties } = schema;
  console.log(properties);
  const Items = () => {
    return properties.map((p, index) => {
      //string
      if (p.type === "string") {
        return (
          <FormInput key={index} large={true}>
            <FormInputField
              fullWidth="true"
              variant="outlined"
              size="medium"
              label={p.title}
              type={p.type}
            />
          </FormInput>
        );
      }
      //date
      if (p.type === "date") {
        return (
          <FormInput key={index}>
            <FormInputField
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={p.default}
              label={p.title}
              type={p.type}
              fullWidth="true"
            />
          </FormInput>
        );
      }
      //textarea
      if (p.type === "textArea") {
        return (
          <FormInput key={index}>
            <FormInputField
              multiline="true"
              rows={p.rows ? p.rows : 3}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={p.default}
              label={p.title}
              type={p.type}
              fullWidth="true"
            />
          </FormInput>
        );
      }
      //dropdown
      if (p.type === "dropdown") {
        const { options } = p;
        return (
          <FormInput dropdown>
            <InputLabel>{p.title}</InputLabel>
            <Select labelId={index} id={`id_${p.index}`}>
              {options.map((o) => {
                return <MenuItem value={o.value}>{o.label}</MenuItem>;
              })}
            </Select>
          </FormInput>
        );
      }

      //checkbox
      if (p.type === "checkbox") {
        return (
          <FormInput key={index}>
            <FormControlLabel control={<FormCheckBox />} label={p.title} />
          </FormInput>
        );
      }
      // other
      return (
        <FormInput key={index}>
          <FormInputField fullWidth="true" variant="outlined" label={p.title} />
        </FormInput>
      );
    });
  };

  return (
    <FormWrapper>
      <FormTitle>{title}</FormTitle>
      <FormSubtitle>{description}</FormSubtitle>
      <FormInputs>{Items()}</FormInputs>
    </FormWrapper>
  );
};

Form.propTypes = {};

export default Form;
