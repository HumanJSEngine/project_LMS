import * as React from "react";
import styled from "@emotion/styled";
import { ScoreInput } from "../Midterm/ScoreInput";
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
  Modal,
} from "@mui/material";
import ReportBtn from "./ReportBtn";

function createData(name: string, score: number) {
  return { name, score };
}

const rows = [
  createData("학생1", 80),
  createData("학생2", 90),
  createData("학생3", 75),
  createData("학생4", 70),
  createData("학생5", 60),
];

const style = {
  position: "absolute" as "absolute",
  top: "55%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: '100%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [swap, setSwap] = React.useState(true);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        성적조회
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {swap ? (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 500 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>차수/날짜</TableCell>
                    <TableCell align="right">날짜</TableCell>
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
                      <TableCell align="right">{row.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 500 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>차수/날짜</TableCell>
                    <TableCell align="right">날짜</TableCell>
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
                      <TableCell align="right">
                        <ScoreInput score={row.score} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <ReportBtn swap={swap} setSwap={setSwap} />
        </Box>
      </Modal>
    </>
  );
}
