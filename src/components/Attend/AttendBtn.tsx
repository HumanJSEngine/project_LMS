import React, { type SetStateAction, type Dispatch } from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

interface AttendBtnProps {
  swap: boolean;
  setSwap: Dispatch<SetStateAction<boolean>>;
}
const AttendBtn = ({ swap, setSwap }: AttendBtnProps) => {
  return (
    <AttendButton variant="contained" onClick={() => setSwap(!swap)}>
      {swap ? "출결 수정" : "출결 조회"}
    </AttendButton>
  );
};

const AttendButton = styled(Button)`
  width: 100px;
  height: 50px;
  margin-top: 10px;
`;

export default AttendBtn;
