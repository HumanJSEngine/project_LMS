import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const SwapBtn = ({ switchView, setSwitchView }) => {
  return (
    <Btn variant="contained" onClick={() => setSwitchView(prev => !prev)}>
      {switchView ? <span>성적 수정</span> : <span>성적 조회</span>}
    </Btn>
  );
};

const Btn = styled(Button)`
  width: 100px;
  height: 50px;
  margin-top: 10px;
  white-space: nowrap;
`;

export default SwapBtn;
