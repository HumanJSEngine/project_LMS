import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ScoreInput } from "./ScoreInput";

function createData(name: string, score: number) {
  return { name, score };
}

const rows = [
  createData("학생1", 305),
  createData("학생2", 452),
  createData("학생3", 262),
  createData("학생4", 305),
  createData("학생5", 452),
  createData("학생6", 262),
  createData("학생7", 305),
  createData("학생8", 452),
  createData("학생9", 262),
  createData("학생10", 305),
  createData("학생11", 452),
  createData("학생12", 262),
];

export default function CustomPaginationActionsTable() {
  const onSubmit = e => {
    e.preventDefault();
    console.log({ score: inputRef.current.value });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="left">학생/점수</TableCell>
            <TableCell align="left">점수</TableCell>
          </TableRow>
        </TableHead>
        <form onSubmit={onSubmit}>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  size="medium"
                  align="left"
                >
                  {row.name}
                </TableCell>
                <TableCell component="th" size="medium" align="left">
                  <ScoreInput score={row.score} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <button type="submit">성적입력</button>
        </form>
      </Table>
    </TableContainer>
  );
}
