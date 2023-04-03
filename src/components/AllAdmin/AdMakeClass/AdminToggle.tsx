import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "@emotion/styled";
const AdminToggle = () => {
  interface Value {
    day: string;
    start: string;
    end: string;
  }
  const initVal: Value = {
    day: "0",
    start: "0",
    end: "0",
  };
  const [val, setVal] = useState(initVal);

  const handleSelect = (event: SelectChangeEvent) => {
    const { value, name } = event.target;
    setVal({ ...val, [name]: value });
  };

  const [alignment, setAlignment] = useState(1);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Box>
        <FormControl sx={{ m: 1, width: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">요일</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            // value={val.credit}
            label="day"
            name="day"
            onChange={handleSelect}
            value={val.day}
          >
            <MenuItem value={0}>월요일</MenuItem>
            <MenuItem value={1}>화요일</MenuItem>
            <MenuItem value={2}>수요일</MenuItem>
            <MenuItem value={3}>목요일</MenuItem>
            <MenuItem value={4}>금요일</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">시작</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            label="start"
            name="start"
            onChange={handleSelect}
            value={val.start}
          >
            <MenuItem value={0}>1교시</MenuItem>
            <MenuItem value={1}>2교시</MenuItem>
            <MenuItem value={2}>3교시</MenuItem>
            <MenuItem value={3}>4교시</MenuItem>
            <MenuItem value={4}>5교시</MenuItem>
            <MenuItem value={4}>6교시</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">끝</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            label="end"
            name="end"
            onChange={handleSelect}
            value={val.end}
          >
            <MenuItem value={0}>1교시</MenuItem>
            <MenuItem value={1}>2교시</MenuItem>
            <MenuItem value={2}>3교시</MenuItem>
            <MenuItem value={3}>4교시</MenuItem>
            <MenuItem value={4}>5교시</MenuItem>
            <MenuItem value={4}>6교시</MenuItem>
          </Select>
        </FormControl>

        <ToggleButtonGroup
          style={{ width: 160, height: 56 }}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value={1}>상대평가</ToggleButton>
          <ToggleButton value={2}>절대평가</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
`;

export default AdminToggle;
