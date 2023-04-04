import * as React from "react";
import { type FListsProps } from "../../types/LastResult";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function StickyHeadTable({ FLists }: { FLists: FListsProps[] }) {
  console.log("성적 조회", FLists);
  return (
    <>
      <h1>성적 조회</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>학생/성적</TableCell>
              {FLists[0].scoreList.map(item => (
                <TableCell key={item.seq} align="center">
                  {item.explanation}
                </TableCell>
              ))}
              <TableCell>최종성적</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FLists.map((item, idx) => (
              <TableRow
                key={item.studentCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.studentName}
                </TableCell>
                {FLists[idx].scoreList.map(item => (
                  <TableCell align="center" key={item.seq}>
                    {item.score} / {item.maxScore}
                  </TableCell>
                ))}
                <TableCell component="th" scope="row">
                  {item.grade}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
