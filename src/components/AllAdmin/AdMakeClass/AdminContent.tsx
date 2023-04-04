import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AdminContent = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: 550 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="강의내용"
          multiline
          maxRows={4}
          placeholder="강의내용을 입력해 주세요."
        />
      </Box>
    </>
  );
};

export default AdminContent;
