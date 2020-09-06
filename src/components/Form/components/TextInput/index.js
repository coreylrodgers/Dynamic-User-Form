import React from "react";
import { FormInputField, FormInput } from "../../styles";

const TextField = ({ properties, handleInputChange, value, index }) => {
  const { required, title, type, name } = properties;

  return (
    <FormInput index={index} large={true}>
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
    </FormInput>
  );
};

export default TextField;
