import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ImRadioUnchecked, ImCross } from "react-icons/im";


export default function BasicTable({attendLists}) {


  return (
    <>
    <h1>성적조회</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ whiteSpace: "nowrap" }} align="center">
                학생/차시
              </TableCell>
              {attendLists[0].list.map(item => (
                <TableCell align="left" key={item.amasSeq}>
                  {item.date}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {attendLists.map((item, idx) => (
              <TableRow
                key={item.mbSeq}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                {attendLists[idx].list.map(item => (
                  <TableCell align="center" key={item.amasSeq}>
                    {item.status === "O" ? <ImRadioUnchecked /> : <ImCross />}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
