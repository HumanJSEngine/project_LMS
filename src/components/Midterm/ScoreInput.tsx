import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import MidtermBtn from "./MidtermBtn";
import { setMidtermResult } from "../../api/MidtermResultApi";

interface ScoreInputProps {
  score: number;
  mbSeq: number;
}

export const ScoreInput = ({ mbSeq, score }: ScoreInputProps) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(score);
  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };

  console.log("input 값 확인", inputValue);
  console.log("mbSeq", mbSeq);

  const onSubmit = e => {
    e.preventDefault();
    const result = setMidtermResult(1, mbSeq, inputValue);
    result.then(value => alert(value.message));
  };

  return (
    <Container onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        name="score"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: "60px" }}
      />
      <MidtermBtn />
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;

  input {
    border: 1px solid red;
    &:focus {
      outline: red;
    }
  }
`;

export default ScoreInput;
