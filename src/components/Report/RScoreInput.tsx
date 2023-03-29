import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import RScoreInputBtn from "./RScoreInputBtn";
import { setReportResult } from "../../api/ReportResultApi";
import { ConvertRNum } from "../../utils/ConvertRNum";

interface ScoreInputProps {
  mbSeq: number;
  score: number;
  name: string;
}
export const ScoreInput = ({ mbSeq, score, name }: ScoreInputProps) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(score);
  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (inputValue > 10) {
      alert("과제 점수 최대값은 10점입니다");
      setInputValue("");
      return;
    }
    const result = setReportResult(1, ConvertRNum(name), mbSeq, inputValue);
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
        style={{ width: "62px" }}
      />
      <RScoreInputBtn inputValue={inputValue} />
    </InputContainer>
  );
};

const InputContainer = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
  align-items: flex-end;
`;

export default ScoreInput;
