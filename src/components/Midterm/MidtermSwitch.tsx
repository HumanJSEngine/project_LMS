import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ScoreInput } from './ScoreInput';


const MidtermSwitch = ({lists}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">학생/점수</TableCell>
            <TableCell align="left">점수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map(list => (
            <TableRow key={list.name}>
              <TableCell component="th" scope="row">
                {list.name}
              </TableCell>
              <TableCell align="left">
                <ScoreInput score={list.score} mbSeq={list.mbSeq}/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MidtermSwitch