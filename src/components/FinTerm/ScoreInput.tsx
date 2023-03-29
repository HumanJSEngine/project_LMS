import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import InputBtn from "./InputBtn";
import { setFintermResult } from "../../api/FinTermResultApi";

interface ScoreInputProps {
  mbSeq: number;
  score: number;
}
export const ScoreInput = ({ mbSeq, score }: ScoreInputProps) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(score);
  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };


  const onSubmit = e => {
    e.preventDefault();
    console.log(e);
    const result = setFintermResult(1, mbSeq, inputValue);
    result.then(value => alert(value.message));
  };

  return (
    <InputContainer onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        name="score"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: "60px" }}
      />
      <InputBtn />
    </InputContainer>
  );
};

const InputContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px 0px;
`;
