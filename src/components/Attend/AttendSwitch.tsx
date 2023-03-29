import React, { useState } from "react";
import styled from "@emotion/styled";
import AttendButtons from "./AttendButtons";
import AttendAllBtn from "./AttendAllBtn";

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
  console.log(attendLists);
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
                  <AttendAllBtn amasSeq={list.amasSeq} date={list.date} />
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
                >
                  {list.name}
                </TableCell>
                {attendLists[idx].list.map(list => {
                  return (
                    <TableCell align="center" key={list.amasSeq}>
                      <AttendButtons
                        amasSeq={list.amasSeq}
                        date={list.date}
                        status={list.status}
                      />
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AttendSwitch;
