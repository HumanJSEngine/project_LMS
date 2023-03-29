import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { attendAllSelector } from "../../recoil/Selectors";
import { useRecoilValue } from "recoil";

interface AttendButtonsType {
  status: string;
}
const AttendButtons = ({ amasSeq, date, status }: AttendButtonsType) => {
  const [change, setChange] = useState(false);

  const attendAll = useRecoilValue(attendAllSelector);

  const eachState = (attendAll, amasSeq) => {
    const ans = attendAll.find(item => item.amasSeq === amasSeq);
    return ans;
  };

  // console.log(eachState(attendAll, amasSeq));

  useEffect(() => {
    if (status === "O") {
      setChange(true);
    } else {
      setChange(false);
    }
  }, []);

  return (
    <BtnWrapper>
      <AttendBtn
        variant={change ? "contained" : null}
        onClick={() => setChange(prev => !prev)}
      >
        출석
      </AttendBtn>
      <AttendBtn
        variant={!change ? "contained" : null}
        onClick={() => setChange(prev => !prev)}
      >
        결석
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
