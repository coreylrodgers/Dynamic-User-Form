import React from "react";

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
  FormInputField,
  FormInput,
  FormCheckBox,
  FormSubtitle,
} from "./styles";

import useSignUpForm from "./components/useSignUpForm/index";

const Form = ({ schema }) => {
  const { title, description, properties } = schema;

  const signup = () => {
    alert(`User Created!

           Name: ${inputs.fullName}
           Date Of Birth: ${inputs.dateOfBirth}
           Gender: ${inputs.gender}
           Mobile Number: ${inputs.mobileNumber}
           Home Number: ${inputs.homeNumber}
           guardianConsent: ${inputs.guardianConsent}
           guardianFullName: ${inputs.guardianFullName}
           guardianContact: ${inputs.guardianContactNumber}
           guardianGender: ${inputs.guardianGender}`);
  }
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
  console.log(inputs);

  const Items = () => {
    return properties.map((p, index) => {
      //string
      if (p.type === "string") {
        return (
          <FormInput key={index} large={true}>
            <FormInputField
              required={p.required}
              fullWidth
              variant="outlined"
              size="medium"
              label={p.title}
              type={p.type}
              value={inputs[p.name]}
              name={p.name}
              onChange={handleInputChange}
            />
          </FormInput>
        );
      }
      //date
      if (p.type === "date") {
        return (
          <FormInput key={index}>
            <FormInputField
              required={p.required}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={p.default}
              label={p.title}
              type={p.type}
              fullWidth
              name={p.name}
              value={inputs[p.name]}
              onChange={handleInputChange}
            />
          </FormInput>
        );
      }
      //textarea
      if (p.type === "textArea") {
        return (
          <FormInput key={index}>
            <FormInputField
              required={p.required}
              multiline="true"
              rows={p.rows ? p.rows : 3}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={p.default}
              label={p.title}
              type={p.type}
              fullWidth
              value={inputs[p.name]}
              name={p.name}
              onChange={handleInputChange}
            />
          </FormInput>
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
        <FormSubtitle>{description}</FormSubtitle>
        <FormInputs>
          {Items()}
          <button type="submit">Submit the form</button>
        </FormInputs>
      </FormWrapper>
    </form>
  );
};

Form.propTypes = {};

export default Form;
