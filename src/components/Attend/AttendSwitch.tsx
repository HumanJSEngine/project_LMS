import React, { useState } from "react";
import styled from "@emotion/styled";
import AttendButtons from "./AttendButtons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("학생1", 159, 6.0, 24, 4.0),
  createData("학생2", 237, 9.0, 37, 4.3),
  createData("학생3", 262, 16.0, 24, 6.0),
  createData("학생4", 305, 3.7, 67, 4.3),
];

const AttendSwitch = () => {
  // const [total, setTotal] = useState(false);

  // const attendAll = () => {
  //   setTotal(true);
  // };

  // const attendNone = () => {
  //   setTotal(false);
  // };

  return (
    // <Tbbox>
    //   <caption>출결 입력 수정</caption>
    //   <thead>
    //     <tr>
    //       <th scope="col">전체 출석/결석</th>
    //       <th scope="col">
    //         <button onClick={attendAll}>전체 출석</button>
    //         <button onClick={attendNone}>전체 결석</button>
    //       </th>
    //       <th scope="col">
    //         <button>전체 출석</button>
    //         <button>전체 결석</button>
    //       </th>
    //       <th scope="col">
    //         <button>전체 출석</button>
    //         <button>전체 결석</button>
    //       </th>
    //     </tr>
    //     <tr>
    //       <th scope="row">학생/출석</th>
    //       <th scope="col">1차시</th>
    //       <th scope="col">2차시</th>
    //       <th scope="col">3차시</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <Trbox>
    //       <th scope="row">학생1</th>
    //       <td>
    //         <AttendButtons total={total} />
    //       </td>
    //       <td>
    //         <AttendButtons />
    //       </td>
    //       <td>
    //         <AttendButtons />
    //       </td>
    //     </Trbox>
    //     <Trbox>
    //       <th scope="row">학생2</th>
    //       <td>
    //         <AttendButtons total={total} />
    //       </td>
    //       <td>
    //         <AttendButtons />
    //       </td>
    //       <td>
    //         <AttendButtons />
    //       </td>
    //     </Trbox>
    //     <Trbox>
    //       <th scope="row">학생3</th>
    //       <td>
    //         <AttendButtons total={total} />
    //       </td>
    //       <td>
    //         <AttendButtons />
    //       </td>
    //       <td>
    //         <AttendButtons />
    //       </td>
    //     </Trbox>
    //   </tbody>
    // </Tbbox>
    <TableContainer component={Paper}>
      <Table size="medium" sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>전체 출결</TableCell>
            <TableCell>
              <AttendButtons title1={"전체 출석"} title2={"전체 결석"} />
            </TableCell>
            <TableCell>
              <AttendButtons title1={"전체 출석"} title2={"전체 결석"} />
            </TableCell>
            <TableCell>
              <AttendButtons title1={"전체 출석"} title2={"전체 결석"} />
            </TableCell>
            <TableCell>
              <AttendButtons title1={"전체 출석"} title2={"전체 결석"} />
            </TableCell>
          </TableRow>
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
                <AttendButtons />
              </TableCell>
              <TableCell align="center">
                <AttendButtons />
              </TableCell>
              <TableCell align="center">
                <AttendButtons />
              </TableCell>
              <TableCell align="center">
                <AttendButtons />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Tbbox = styled.table`
  thead > tr > th {
    width: 120px;
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
    padding: 10px;
    border: 2px solid black;
    text-align: center;
  }
`;

export default AttendSwitch;
