// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("학생1", 159, 6.0, 24, 4.0),
//   createData("학생2", 159, 6.0, 24, 4.0),
//   createData("학생3", 159, 6.0, 24, 4.0),
//   createData("학생4", 159, 6.0, 24, 4.0),
//   createData("학생5", 159, 6.0, 24, 4.0),
// ];

const AttendTable = () => {
  return (
    <table>
      <caption>출결 관리</caption>
      <tr>
        <th scope="col">학생/출석</th>
        <th scope="col">1차시</th>
        <th scope="col">2차시</th>
      </tr>
      <tr>
        <td>학생1</td>
        <td><input type='checkbox'/></td>
      </tr>
    </table>
    // <Tbbox>
    //   <TableContainer component={Paper}>
    //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>학생/출석</TableCell>
    //           <TableCell align="right">1차시</TableCell>
    //           <TableCell align="right">2차시</TableCell>
    //           <TableCell align="right">3차시</TableCell>
    //           <TableCell align="right">4차시</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows.map(row => (
    //           <TableRow
    //             key={row.name}
    //             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //           >
    //             <TableCell component="th" scope="row">
    //               {row.name}
    //             </TableCell>
    //             <TableCell align="right">
    //               <input type="checkbox" checked />
    //             </TableCell>
    //             <TableCell align="right">
    //               <input type="checkbox" checked />
    //             </TableCell>
    //             <TableCell align="right">
    //               <input type="checkbox" checked />
    //             </TableCell>
    //             <TableCell align="right">
    //               <input type="checkbox" checked />
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Tbbox>
  );
};

const Tbbox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AttendTable;
