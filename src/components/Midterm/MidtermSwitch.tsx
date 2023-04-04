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

const MidtermSwitch = ({ lists, liSeq }) => {

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
              <TableCell component="th" scope="row">
                {list.name}
              </TableCell>
              <TableCell align="right">
                <ScoreInput
                  score={list.score}
                  mbSeq={list.mbSeq}
                  liSeq={liSeq}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MidtermSwitch;
