import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface AttendButtonsType {
  title1: string;
  title2: string;
}
const AttendButtons = ({ title1, title2 }: AttendButtonsType) => {
  const [change, setChange] = useState(false);

  // useEffect(() => {
  //   setChange(total);
  // }, [total]);

  return (
    <BtnWrapper>
      <AttendBtn colors={change} onClick={() => setChange(prev => !prev)}>
        {title1 ? "전체출석" : "출석"}
      </AttendBtn>
      <AttendBtn colors={!change} onClick={() => setChange(prev => !prev)}>
        {title2 ? "전체결석" : "결석"}
      </AttendBtn>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;

const AttendBtn = styled.button<{ colors: boolean }>`
  color: ${props => (props.colors ? "white" : "black")};
  padding: 5px;
  font-size: 14px;
  border: ${props => (props.colors ? "1px solid green" : "white")};
  background: ${props => (props.colors ? "#5ee45e" : "white")};
  white-space: nowrap;
  border-radius: 6px;
`;
export default AttendButtons;
