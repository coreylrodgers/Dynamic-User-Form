import React from "react";
import { FormInputField, FormInput } from "../../styles";
import { FormControl } from "@material-ui/core";

const TextField = ({ properties, handleInputChange, value, index }) => {
  const {
    required,
    title,
    type,
    name,
    validation,
    validationText,
    default: defaultValue,
  } = properties;

  //calculate if value is a valid full name
  const isValidFullName = (name) => {
    // return re.test(name);
  };

  const CheckFullName = () => {
    return (
      <FormControl>
        <FormInputField
          error={isValidFullName(value)}
          helperText={validationText}
          required={required}
          defaultValue={defaultValue}
          fullWidth
          variant="outlined"
          size="medium"
          label={title}
          type={type}
          value={value}
          name={name}
          onChange={handleInputChange}
        />
      </FormControl>
    );
  };

  const NormalInput = () => {
    return (
      <FormInputField
        required={required}
        fullWidth
        variant="outlined"
        size="medium"
        label={title}
        type={type}
        value={value}
        name={name}
        onChange={handleInputChange}
      />
    );
  };

  return (
    <FormInput index={index} large={true}>
      {validation && validation.checkAge ? CheckFullName() : NormalInput()}
    </FormInput>
  );
};

export default TextField;
