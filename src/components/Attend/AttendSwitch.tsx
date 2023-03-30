import React, { useState } from "react";

import AttendButtons from "./AttendButtons";
import AttendAllBtn from "./AttendAllBtn";
import { InputmbSeq } from "../../utils/InputmbSeq";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const AttendSwitch = ({ attendLists }) => {
  console.log('전체출결일 확인', attendLists);

  const newArr = InputmbSeq(attendLists);
  
  return (
    <>
      <h1>성적수정</h1>
      <TableContainer component={Paper}>
        <Table size="medium" sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>전체 출결</TableCell>
              {attendLists[0].list.map(list => (
                <TableCell key={list.amasSeq} component="th" scope="row">
                  <AttendAllBtn amasSeq={list.amasSeq}/>
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell style={{ whiteSpace: "nowrap" }}>학생/차시</TableCell>
              {attendLists[0].list.map(list => (
                <TableCell key={list.amasSeq} align="center">
                  {list.date}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {attendLists.map((list, idx) => (
              <TableRow
                key={list.mbSeq}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ whiteSpace: "nowrap" }}
                  key={list.mbSeq}
                >
                  {list.name}
                </TableCell>
                {newArr[idx].map(list => (
                  <TableCell align="center" key={list.amasSeq}>
                    <AttendButtons
                      mbSeq={list.mbSeq}
                      amasSeq={list.amasSeq}
                      status={list.status}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AttendSwitch;
