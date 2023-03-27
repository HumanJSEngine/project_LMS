import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import MidtermSwitch from "../components/Midterm/MidtermSwitch";

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
  const [swap, setSwap] = useState(false);

  return (
    <>
      {swap ? <h1>중간성적</h1> : <h1>중간성적수정</h1>}
      {swap ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">학생/점수</TableCell>
                <TableCell align="left">점수</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <MidtermSwitch />
      )}
      <button type="submit" onClick={() => setSwap(prev => !prev)}>
        {swap ? "수정" : "저장"}
      </button>
    </>
  );
}
