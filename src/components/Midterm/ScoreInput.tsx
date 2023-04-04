import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import MidtermBtn from "./MidtermBtn";
import { setMidtermResult } from "../../api/MidtermResultApi";

interface ScoreInputProps {
  score: number;
  mbSeq: number;
  liSeq: number;
}

export const ScoreInput = ({ score, mbSeq, liSeq }: ScoreInputProps) => {
  console.log("수강번호", liSeq);

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(score);
  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const result = setMidtermResult(liSeq, mbSeq, inputValue);
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
  align-items: flex-end;
  gap: 10px 0px;

  input {
    border: 1px solid red;
    &:focus {
      outline: red;
    }
  }
`;

export default ScoreInput;
