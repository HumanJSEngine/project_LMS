import React, { useState } from "react";
import styled from "@emotion/styled";
import AttendButtons from "./AttendButtons";
import AttendAllBtn from "./AttendAllBtn";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("학생1", 159, 6.0, 24, 4.0),
  createData("학생2", 237, 9.0, 37, 4.3),
  createData("학생3", 262, 16.0, 24, 6.0),
  createData("학생4", 305, 3.7, 67, 4.3),
];

const AttendSwitch = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>전체 출결</TableCell>
            {rows.map((row, idx) => (
              <TableCell key={row.name} component="th" scope="row">
                <AttendAllBtn idx={idx} />
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>학생/차시</TableCell>
            <TableCell align="center">1차시</TableCell>
            <TableCell align="center">2차시</TableCell>
            <TableCell align="center">3차시</TableCell>
            <TableCell align="center">4차시</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {rows.map(row => {
                return (
                  <TableCell align="center" key={row.name}>
                    <AttendButtons attend={"출석"} />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendSwitch;
