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

const ReportView = ({ RnumList }) => {
  console.log(RnumList);
  return (
    <>
      <h2> 성적조회 </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">학생</TableCell>
              <TableCell align="right">점수</TableCell>
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
                <TableCell align="right">{list.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ReportView;
