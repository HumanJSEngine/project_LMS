import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

interface AttendButtonsType {
  attend: string;
}
const AttendButtons = ({ attend }: AttendButtonsType) => {
  const [change, setChange] = useState(false);

  // useEffect(() => {
  //   setChange(total);
  // }, [total]);

  return (
    <BtnWrapper>
      <AttendBtn
        variant={
          (change ? "contained" : null)
        }
        onClick={() => setChange(prev => !prev)}
      >
        {attend ? "출석" : "출석"}
      </AttendBtn>
      <AttendBtn
        variant={!change ? "contained" : null}
        onClick={() => setChange(prev => !prev)}
      >
        {attend ? "결석" : "결석"}
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

const AttendBtn = styled(Button)`
  /* color: ${props => (props.colors ? "white" : "black")}; */
  padding: 5px;
  font-size: 14px;
  /* border: ${props => (props.colors ? "1px solid green" : "white")};
  background: ${props => (props.colors ? "#5ee45e" : "white")}; */
  white-space: nowrap;
  border-radius: 6px;
`;

export default AttendButtons;
