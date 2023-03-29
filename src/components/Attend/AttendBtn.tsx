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
      성적수정
    </AttendButton>
  );
};

const AttendButton = styled(Button)`
  height: 80px;
`;

export default AttendBtn;
