import React from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
const AdminTexts = () => {
  return (
    <>
      <Box>
        <TextField
          style={{ width: 180, margin: 8 }}
          variant="outlined"
          placeholder="강의코드"
        />
        <TextField
          style={{ width: 180, margin: 8 }}
          variant="outlined"
          placeholder="강의명"
        />
        <TextField
          style={{ width: 180, margin: 8 }}
          variant="outlined"
          placeholder="교수명"
        />
      </Box>
    </>
  );
};

const Box = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

export default AdminTexts;
