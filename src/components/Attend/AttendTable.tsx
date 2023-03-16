import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { ImRadioUnchecked, ImCross } from "react-icons/im";

function createData(name: string, attend: boolean, attend2: boolean) {
  return { name, attend };
}

const rows = [
  createData("학생1", true, true),
  createData("학생2", true, true),
  createData("학생3", false, true),
  createData("학생4", true, true),
  createData("학생5", false, true),
  createData("학생6", false, true),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>학생/차시</TableCell>
            <TableCell align="center">1차시</TableCell>
            <TableCell align="center">2차시</TableCell>
            <TableCell align="center">3차시</TableCell>
            <TableCell align="center">4차시</TableCell>
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
              <TableCell align="center">
                {row.attend ? <ImRadioUnchecked /> : <ImCross />}
              </TableCell>
              <TableCell align="center">
                {row.attend ? <ImRadioUnchecked /> : <ImCross />}
              </TableCell>
              <TableCell align="center">
                {row.attend ? <ImRadioUnchecked /> : <ImCross />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Tbbox = styled.table`
  thead > tr > th {
    width: 100px;
    border: 2px solid black;
  }
  tbody > tr > th {
    border: 1px solid black;
    text-align: center;
    height: 40px;
  }
`;

const Trbox = styled.tr`
  td {
    border: 1px solid black;
    text-align: center;
    svg {
      font-size: 30px;
      font-weight: 700;
    }
  }
`;
