import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import RScoreInput from "./RScoreInput";

interface ReportInputProps {
  RnumList: string[];
  name: string;
}

const ReportInput = ({ RnumList, name }: ReportInputProps) => {
  return (
    <>
      <h2>성적입력</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">학생</TableCell>
              <TableCell align="right">점수 / 입력</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {RnumList.map(list => (
              <TableRow
                key={list.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {list.name}
                </TableCell>
                <TableCell align="center">
                  <RScoreInput
                    score={list.score}
                    mbSeq={list.mbSeq}
                    name={name}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ReportInput;
