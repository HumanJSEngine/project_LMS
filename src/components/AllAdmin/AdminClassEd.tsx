import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import AdModal from "./AdModal";

const AdminClassEd = () => {
  const createData = (
    name: string,
    classcode: number,
    professor: string,
    attendance: number,
    report: number,
    midterm: number,
    final: number,
    rating: string,
  ) => {
    return {
      name,
      classcode,
      professor,
      attendance,
      report,
      midterm,
      final,
      rating,
    };
  };
  const rows = [
    createData("React의 이해", 230000, "정화섭", 24, 4.0, 10, 100, "절대"),
    createData("컴퓨터 기초 공학", 230001, "배민준", 37, 4.3, 100, 100, "상대"),
    createData("JavaScript 기초", 230002, "윤동규", 24, 6.0, 100, 100, "상대"),
    createData("HTML 기초", 230003, "이효정", 67, 4.3, 100, 100, "절대"),
    createData("CSS 기초", 230004, "조준영", 49, 3.9, 100, 100, "절대"),
  ];
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>강의이름</TableCell>
              <TableCell align="center">수업코드</TableCell>
              <TableCell align="center">교수이름</TableCell>
              <TableCell align="center">출석반영비율</TableCell>
              <TableCell align="center">과제반영비율</TableCell>
              <TableCell align="center">중간반영비율</TableCell>
              <TableCell align="center">기말반영비율</TableCell>
              <TableCell align="center">반영</TableCell>
              <TableCell align="center">수정</TableCell>
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
                <TableCell align="center">{row.classcode}</TableCell>
                <TableCell align="center">{row.professor}</TableCell>
                <TableCell align="center">{row.attendance}</TableCell>
                <TableCell align="center">{row.report}</TableCell>
                <TableCell align="center">{row.midterm}</TableCell>
                <TableCell align="center">{row.final}</TableCell>
                <TableCell align="center">{row.rating}</TableCell>
                <TableCell align="center">
                  <AdModal />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
`;

export default AdminClassEd;
