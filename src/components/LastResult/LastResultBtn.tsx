import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

interface BtnProps {
  swap: boolean;
  setSwap: () => void;
}
const LastResultBtn = ({ swap, setSwap }: BtnProps) => {
  return (
    <Btn
      size="medium"
      variant="contained"
      onClick={() => setSwap(prev => !prev)}
    >
      {swap ? "성적입력" : "성적확인"}
    </Btn>
  );
};

const Btn = styled(Button)`
  width: 100px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
`;
export default LastResultBtn;
