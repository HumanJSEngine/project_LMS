import React from "react";
import styled from "@emotion/styled";
import ConfirmBtn from "./ConfirmBtn";
import { setLastResult } from "../../api/lastResultApi";
import { switchGrade } from "../../utils/switchGrade";

interface Option {
  key: string;
  value: number;
}

interface ScoreListType {
  explanation: string;
  lecture: string;
  maxScore: number;
  name: string;
  score: number;
  seq: number;
  student: string;
  totalMaxScore: number;
}

interface LastSelectBoxProps {
  scoreList: ScoreListType[];
  grade: string;
  studentCode: string;
}

const optionData: Option[] = [
  { key: "A+", value: 1 },
  { key: "A0", value: 2 },
  { key: "A-", value: 3 },
  { key: "B+", value: 4 },
  { key: "B0", value: 5 },
  { key: "B-", value: 6 },
  { key: "C+", value: 7 },
  { key: "C0", value: 8 },
  { key: "C-", value: 9 },
  { key: "D+", value: 10 },
  { key: "D0", value: 11 },
  { key: "D-", value: 12 },
  { key: "F", value: 13 },
  { key: "미평가", value: 0 },
];

const LastSelectBox = ({
  scoreList,
  grade,
  studentCode,
}: LastSelectBoxProps) => {
  const [choiceValue, setChoiceValue] = React.useState("");

  const handleChange = e => {
    console.log(e.target.value);
    setChoiceValue(e.target.value);
  };

  const lectureNum = scoreList[0].lecture;
  console.log("강의번호", lectureNum);
  console.log("학번", studentCode);
  console.log("선택등급", choiceValue);

  const onSubmit = event => {
    event.preventDefault();
    console.log(choiceValue);
    const result = setLastResult(lectureNum, studentCode, choiceValue);

    console.log(result.then(value => alert(value.message)));
  };

  return (
    <form onSubmit={onSubmit}>
      <Select
        name="choice"
        onChange={handleChange}
        key={grade}
        defaultValue={switchGrade(grade)}
      >
        {optionData.map(option => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Select>
      <ConfirmBtn />
    </form>
  );
};

const Select = styled.select`
  display: block;
  width: 63px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 5px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
  margin-bottom: 10px;
`;

export default LastSelectBox;
