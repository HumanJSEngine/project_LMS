import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const ConfirmBtn = () => {
  // console.log('버튼에 입력값 전달', studentCode)
  return (
    <Btn type="submit" variant="contained">
      성적 입력
    </Btn>
  );
};

const Btn = styled(Button)`
  width: 60px;
  height: 30px;
  white-space: nowrap;
`;

export default ConfirmBtn;
