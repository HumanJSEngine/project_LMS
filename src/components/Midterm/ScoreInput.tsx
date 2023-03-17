import React, { useState, useRef } from "react";

interface ScoreInputProps {
  score: number;
}
export const ScoreInput = ({ score }: ScoreInputProps) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(score);
  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };
  console.log(inputRef);

  return (
    <input
      type="text"
      ref={inputRef}
      name="score"
      value={inputValue}
      onChange={handleInputChange}
      style={{ width: "30px" }}
    />
  );
};
