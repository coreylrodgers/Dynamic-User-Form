import React, { useState } from "react";

const useSignUpForm = (callback1, callback2) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      callback1();
      callback2();
    }
  };
  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useSignUpForm;
