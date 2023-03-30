import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { attendAllSelector } from "../../recoil/Selectors";
import { useRecoilValue } from "recoil";
import { setAttendResult } from "../../api/AttendSetApi";

interface AttendButtonsType {
  mbSeq: string;
  amasSeq: string;
  status: number;
}

const AttendButtons = ({ mbSeq, amasSeq, status }: AttendButtonsType) => {
  const [change, setChange] = useState(false);

  // const attendAll = useRecoilValue(attendAllSelector);

  // const eachState = (attendAll, amasSeq) => {
  //   const ans = attendAll.find(item => item.amasSeq === amasSeq);
  //   return ans;
  // };

  // console.log(eachState(attendAll, amasSeq));

  useEffect(() => {
    if (status === "O") {
      setChange(true);
    } else {
      setChange(false);
    }
  }, []);

  const attend = () => {
    setChange(prev => !prev);
    const result = setAttendResult(1, mbSeq, amasSeq, 1);
    result.then(value => alert(value.message));
  };

  const absence = () => {
    setChange(prev => !prev);
    const result = setAttendResult(1, mbSeq, amasSeq, 0);
    result.then(value => alert(value.message));
  };

  return (
    <BtnWrapper>
      <AttendBtn variant={change ? "contained" : null} onClick={() => attend()}>
        출석
      </AttendBtn>
      <AttendBtn
        variant={!change ? "contained" : null}
        onClick={() => absence()}
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
  padding: 5px;
  font-size: 14px;
  white-space: nowrap;
  border-radius: 6px;
`;

export default AttendButtons;
