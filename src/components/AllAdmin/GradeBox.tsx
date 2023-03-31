import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const GradeBox = () => {
  interface Value {
    grade: string;
    semester: string;
  }

  const initVal: Value = {
    grade: "1",
    semester: "1",
  };

  const [val, setVal] = useState(initVal);

  const handleChange = (event: SelectChangeEvent) => {
    const { value, name } = event.target;
    setVal({ ...val, [name]: value });
  };
  console.log(val);

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">학년</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={val.grade}
            label="grade"
            name="grade"
            onChange={handleChange}
          >
            <MenuItem value={1}>1 학년</MenuItem>
            <MenuItem value={2}>2 학년</MenuItem>
            <MenuItem value={3}>3 학년</MenuItem>
            <MenuItem value={4}>4 학년</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">학기</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={val.semester}
            label="semester"
            name="semester"
            onChange={handleChange}
          >
            <MenuItem value={1}>1 학기</MenuItem>
            <MenuItem value={2}>2 학기</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default GradeBox;
