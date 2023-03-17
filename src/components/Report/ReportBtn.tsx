import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const ReportBtn = ({ open, setOpen }) => {
  return (
    <Btn onClick={() => setOpen(open => !open)} variant="contained">
      성적조회
    </Btn>
  );
};

const Btn = styled(Button)`
  width: 90px;
`;
export default ReportBtn;
