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
import LastSelectBox from "./LastSelectBox";
import { type FListsProps } from "../../types/LastResult";
import getClassParams from "../../hooks/getClassParams";

export default function StickyHeadTable({ FLists }: { FLists: FListsProps[] }) {
  const classid = getClassParams().classid;
  console.log(classid);
  const className = classid => {
    let answer;
    switch (classid) {
      case "1":
        answer = "BAC001-01";
        break;
      case "2":
        answer = "FRO001-01";
        break;
    }
    return answer;
  };
  return (
    <>
      <h1>성적 수정</h1>
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
                  <LastSelectBox
                    scoreList={item.scoreList}
                    grade={item.grade}
                    studentCode={item.studentCode}
                    lectureCode={className(classid)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
