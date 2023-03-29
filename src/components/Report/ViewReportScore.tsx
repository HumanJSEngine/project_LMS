import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ViewReportScoreBtn from "./ViewReportScoreBtn";

function createData(name: string, score: number) {
  return { name, score };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];

interface Props {
  open: boolean;
  setOpen: () => void;
}
const ViewReportScore = ({ open, setOpen }: Props) => {
  const [viewScore, setViewScore] = useState(false);
  return (
    <>
      {open ? (
        <Box>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 550 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">학생/점수</TableCell>
                  <TableCell align="left">점수 조회</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {row.score}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ViewReportScoreBtn />
        </Box>
      ) : null}
    </>
  );
};

const Box = styled.div`
  position: fixed;
  top: 20%;
  left: 40%;
  width: 800px;
  height: 1000px;
`;

export default ViewReportScore;
