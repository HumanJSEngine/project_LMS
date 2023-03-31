import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ScoreInput } from "./ScoreInput";

const FinTermInput = ({ lists }) => {
  return (
    <>
      <h1>기말 성적 수정</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">학생 / 점수</TableCell>
              <TableCell align="right">점수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map(list => (
              <TableRow
                key={list.sstuSeq}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {list.name}
                </TableCell>
                <TableCell align="right">
                  <ScoreInput mbSeq={list.mbSeq} score={list.score} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FinTermInput;
