import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const ReportBtn = ({ swap, setSwap }) => {
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
