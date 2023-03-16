import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { font } from "../styles/fonts";
import colors from "../styles/palette";

function createData(studentNumber: number, name: string, major: string) {
  return { name, studentNumber, major };
}

const rows = [
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
  createData(2021156721, "정대만", "스포츠체육학과"),
];

const Student = () => {
  return (
    <Box>
      <h2>수강생 관리</h2>
      <TableContainer
        style={{ width: "100%", minWidth: 520 }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">학번</TableCell>
              <TableCell align="left">학생명</TableCell>
              <TableCell align="left">학과</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.studentNumber}>
                <TableCell align="left">{row.studentNumber}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.major}</TableCell>
                <TableCell align="right" width={52}>
                  <MoveToManage>
                    관리
                    <IoIosArrowForward />
                  </MoveToManage>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  h2 {
    font: ${font.style20Regular};
    margin-bottom: 20px;
  }
`;

const MoveToManage = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 48px;
  color: ${colors.primary};
  background: ${colors.white};
  border: none;
`;

export default Student;
