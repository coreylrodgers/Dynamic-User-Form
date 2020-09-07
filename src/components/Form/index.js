import React, { useState } from "react";
import {
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import {
  FormWrapper,
  FormTitle,
  FormInputs,
  FormInput,
  FormCheckBox,
  FormSubtitle,
} from "./styles";

import TextField from "../../components/Form/components/TextInput/index";
import DateInput from "../../components/Form/components/DateInput/index";
import TextArea from "../../components/Form/components/TextArea/index";

import useSignUpForm from "./components/useSignUpForm/index";
import { signUp } from "../../libs/FormOptions";

const Form = ({ schema }) => {
  const { title, description, properties } = schema;

  const formattedSignUp = () => {
    alert(`User Created!

           Name: ${inputs.fullName}
           Date Of Birth: ${inputs.dateOfBirth}
           Gender: ${inputs.gender}
           Mobile Number: ${inputs.mobileNumber}
           Home Number: ${inputs.homeNumber}
           guardianFullName: ${inputs.guardianFullName}
           guardianContact: ${inputs.guardianContactNumber}
        `);
  };

  const JSONResponse = () => {
    alert(JSON.stringify(inputs));
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    formattedSignUp,
    JSONResponse
  );

  const Items = () => {
    return properties.map((p, index) => {
      //string
      if (p.type === "string") {
        return (
          <TextField
            properties={p}
            handleInputChange={handleInputChange}
            value={inputs[p.name]}
            index={index}
          />
        );
      }
      //date
      if (p.type === "date") {
        console.log(p.default);
        return (
          <DateInput
            properties={p}
            handleInputChange={handleInputChange}
            value={inputs[p.name]}
            index={index}
          />
        );
      }
      //textarea
      if (p.type === "textArea") {
        return (
          <TextArea
            rows={p.rows}
            properties={p}
            handleInputChange={handleInputChange}
            value={inputs[p.name]}
            defaultValue={p.default}
            index={index}
          />
        );
      }
      //dropdown
      if (p.type === "dropdown") {
        const { options } = p;
        return (
          <FormInput dropdown key={index}>
            <InputLabel>{p.title}</InputLabel>
            <Select
              name={p.name}
              value={inputs ? inputs[p.name] : ""}
              fullWidth
              id={`id_${p.index}`}
              onChange={handleInputChange}
              displayEmpty
            >
              {options.map((o) => {
                return (
                  <MenuItem key={index} value={o.value}>
                    {o.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormInput>
        );
      }

      //checkbox
      if (p.type === "checkbox") {
        return (
          <FormInput key={index}>
            <FormControlLabel
              control={
                <FormCheckBox
                  onChange={handleInputChange}
                  name={p.name}
                  value={inputs[p.name]}
                />
              }
              label={p.title}
            />
          </FormInput>
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <FormTitle>{title}</FormTitle>
        <FormInputs>
          <FormSubtitle>{description}</FormSubtitle>
          {Items()}
          <button type="submit">Submit the form</button>
        </FormInputs>
      </FormWrapper>
    </form>
  );
};

Form.propTypes = {};

export default Form;
