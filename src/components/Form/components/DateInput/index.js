import React from "react";
import moment from "moment";

import { FormInputField, FormInput } from "../../styles";

const DateInput = ({ properties, handleInputChange, value, index }) => {
  
  //calculate is over minimum age set in formOptions
    const isOverAge = (minimumAge, date) => {
    const years = moment().diff(moment(date), "years");
    if (years >= minimumAge) {
      return false;
    }
    return true;
  };

  const {
    required,
    title,
    type,
    name,
    default: defaultValue,
    validationText,
    validation,
    minimumAge
  } = properties;

  const checkAge = () => {
    return (
      <FormInputField
        error={isOverAge(minimumAge, value)}
        helperText={validationText}
        required={required}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={defaultValue}
        label={title}
        type={type}
        fullWidth
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    );
  };

  const NormalInput = () => {
    return (
      <FormInputField
        error={""}
        required={required}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={defaultValue}
        label={title}
        type={type}
        fullWidth
        name={name}
        value={value ? value : defaultValue}
        onChange={handleInputChange}
      />
    );
  };
  return (
    <FormInput key={index}>
      {validation && validation.checkAge ? checkAge() : NormalInput()}
    </FormInput>
  );
};

export default DateInput;
