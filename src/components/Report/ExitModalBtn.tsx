import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

interface BtnProps {
  handleClose: () => void;
  children: React.ReactNode;
}
const ExitModalBtn = ({ handleClose, children }: BtnProps) => {
  return (
    <Btn variant="contained" onClick={handleClose}>
      {children}
    </Btn>
  );
};

const Btn = styled(Button)`
  width: 90px;
  height: inherit;
  margin-left: 10px;
`;
export default ExitModalBtn;
