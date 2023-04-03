import React from "react";

import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const MidtermBtn = () => {

  return (
    <Btn type="submit" variant="contained">
      성적입력
    </Btn>
  );
};

const Btn = styled(Button)`
  width: 60px;
  height: 30px;
  white-space: nowrap;
`;

export default MidtermBtn;
