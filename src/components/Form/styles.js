import styled from "styled-components";
import { TextField, Checkbox, TextareaAutosize } from "@material-ui/core";

const FormWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
`;

const FormTitle = styled.h1`
  text-align: center;
`;

const FormSubtitle = styled.h2`
  text-align: center;
  color: grey;
`;

const FormInputs = styled.div`
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  flex-direction: column;
  padding: 2rem;

  & > * {
    margin: 10px;
    width: 25ch;
  }
`;

const FormBody = styled.div``;

const FormInput = styled.div`
  padding: 0.25rem;
  min-width: ${(props) => (props.dropdown ? "120px" : "0px")};
`;

const FormInputField = styled(TextField)``;

const FormCheckBox = styled(Checkbox)``;

const FormTextArea = styled(TextareaAutosize)``;

export {
  FormWrapper,
  FormTitle,
  FormInputs,
  FormInput,
  FormBody,
  FormInputField,
  FormCheckBox,
  FormSubtitle,
  FormTextArea,
};
