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


const MidtermView = ({lists}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">학생/점수</TableCell>
            <TableCell align="right">점수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map(list => (
            <TableRow key={list.name}>
              <TableCell component="th" scope="row" align="left">
                {list.name}
              </TableCell>
              <TableCell align="right">{list.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MidtermView;
