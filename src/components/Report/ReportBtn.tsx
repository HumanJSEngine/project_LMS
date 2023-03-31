import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

interface RBtnsProps {
  swap: boolean;
  setSwap: React.Dispatch<React.SetStateAction<boolean>>;
}
const ReportBtn = ({ swap, setSwap }: RBtnsProps) => {
  return (
    <Btn onClick={() => setSwap(swap => !swap)} variant="contained">
      {swap ? "입력" : "저장"}
    </Btn>
  );
};

const Btn = styled(Button)`
  width: 90px;
`;
export default ReportBtn;
