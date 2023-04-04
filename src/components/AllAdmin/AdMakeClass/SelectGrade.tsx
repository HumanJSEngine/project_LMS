import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import styled from "@emotion/styled";

const SelectGrade = () => {
  interface Value {
    grade: string;
    semester: string;
    class: string;
    credit: string;
  }

  const initVal: Value = {
    grade: "1",
    semester: "1",
    class: "101",
    credit: "4.5",
  };

  const [val, setVal] = useState(initVal);

  const handleChange = (event: SelectChangeEvent) => {
    const { value, name } = event.target;
    setVal({ ...val, [name]: value });
  };

  return (
    <>
      <Container>
        <FormControl sx={{ m: 1, width: 140 }}>
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
        <FormControl sx={{ m: 1, width: 140 }}>
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

        <FormControl sx={{ m: 1, width: 140 }}>
          <InputLabel id="demo-simple-select-helper-label">강의실</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={val.class}
            label="class"
            name="class"
            onChange={handleChange}
          >
            <MenuItem value={101}>101 강의실</MenuItem>
            <MenuItem value={102}>102 강의실</MenuItem>
            <MenuItem value={103}>103 강의실</MenuItem>
            <MenuItem value={201}>201 강의실</MenuItem>
            <MenuItem value={202}>202 강의실</MenuItem>
            <MenuItem value={203}>203 강의실</MenuItem>
            <MenuItem value={301}>301 강의실</MenuItem>
            <MenuItem value={302}>302 강의실</MenuItem>
            <MenuItem value={303}>303 강의실</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 140 }}>
          <InputLabel id="demo-simple-select-helper-label">학점</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={val.credit}
            label="credit"
            name="credit"
            onChange={handleChange}
          >
            <MenuItem value={4}>4 학점</MenuItem>
            <MenuItem value={4.3}>4.3 학점</MenuItem>
            <MenuItem value={4.5}>4.5 학점</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 650px;
  justify-content: space-between;
`;
export default SelectGrade;
