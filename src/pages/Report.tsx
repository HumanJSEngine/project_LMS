import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
  Modal,
} from "@mui/material";

import ReportBtn from "../components/Report/ReportBtn";
import ViewReportScore from "../components/Report/ViewReportScore";
import ReportModal from "../components/Report/ReportModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 20,
  p: 3,
};

function createData(name: string, date: string) {
  return { name, date };
}

const rows = [
  createData("1회차", "2023/1/1"),
  createData("2회차", "2023/2/1"),
  createData("3회차", "2023/3/1"),
  createData("4회차", "2023/4/1"),
  createData("5회차", "2023/5/1"),
];

export default function BasicTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>회차/날짜</TableCell>
              <TableCell size="medium" align="center">
                날짜
              </TableCell>
              <TableCell size="medium" align="right">
                성적조회
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="right">
                  <ReportModal/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
