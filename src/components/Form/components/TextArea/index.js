import React from "react";
import { FormInputField, FormInput } from "../../styles";

const TextArea = ({ properties, handleInputChange, value, index }) => {
  const { required, title, type, name, rows, defaultValue} = properties;

  return (
    <FormInput key={index}>
      <FormInputField
        required={required}
        multiline="true"
        rows={rows ? rows : 3}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={defaultValue}
        label={title}
        type={type}
        fullWidth
        value={value}
        name={name}
        onChange={handleInputChange}
      />
    </FormInput>
  );
};

export default TextArea;
