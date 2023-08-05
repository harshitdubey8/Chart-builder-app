import React, { useState } from "react";
import { styled } from "styled-components";
import ChartButton from "../ui/ChartButton";

const ChartForm = (props) => {
  const [formData, setFormData] = useState({
    data: "",
    label: " ",
  });

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formSubmitHandler = (event) => {
    props.chartDataHandler(event, formData);
    setFormData({
      data: "",
      label: "",
    });
  };

  return (
    <InputFormWrapper>
      <FormContainer onSubmit={formSubmitHandler}>
        <LabelText>X Axis</LabelText>
        <FormInput
          type="text"
          value={formData.label}
          name="label"
          onChange={formDataHandler}
          required
        />
        <LabelText>Y Axis`</LabelText>
        <FormInput
          type="number"
          value={formData.data}
          name="data"
          onChange={formDataHandler}
          required
        />
        <ChartButton type="submit" title="submit" />
      </FormContainer>
    </InputFormWrapper>
  );
};

const InputFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  width: 200px;
  padding: 10px;
  height: 40px;
  border: none;
  margin: 10px 10px 10px 10px;
  outline-width: 0;
  font-size: 20px;
  border-radius: 3px;
  background-color: #f6f6f6;
`;

const LabelText = styled.h2`
  color: black;
  font-size: large;
`;

export default ChartForm;
