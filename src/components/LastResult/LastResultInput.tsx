import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface ScoreListProps {
  explanation: string;
  lecture: string;
  maxScore: number;
  name: string;
  score: number;
  seq: number;
  student: string;
  totalMaxScore: number;
}

interface FListsProps {
  grade: string;
  rank: number;
  scoreList: ScoreListProps[];
  studentCode: string;
  studentName: string;
  totalMaxScore: number;
  totalScore: number;
}

export default function StickyHeadTable({ FLists }: { FLists: FListsProps[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>학생/성적</TableCell>
            {FLists[0].scoreList.map(item => (
              <TableCell key={item.seq} align="center">
                {item.name}
              </TableCell>
            ))}
            <TableCell>최종</TableCell>
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
                  {item.score} / {item.totalMaxScore}
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
  );
}
