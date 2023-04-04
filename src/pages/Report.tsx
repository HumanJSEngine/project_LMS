import React from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import ReportModal from "../components/Report/ReportModal";
import { useQuery } from "@tanstack/react-query";
import getClassParams from "../hooks/getClassParams";

export default function BasicTable() {
  const params = getClassParams().classid;
  const getReportLists = async () => {
    return await axios
      .get(`http://192.168.0.183:8520/api/assignment/${params}`)
      .then(res => res.data.list);
  };

  const {
    status,
    error,
    data: ReportLists,
  } = useQuery({
    queryKey: ["ReportLists"],
    queryFn: getReportLists,
  });
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  console.log("리스트 조회", ReportLists);
  return (
    <>
      <h1>과제</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size="medium" align="left">
                회차/날짜
              </TableCell>
              <TableCell size="medium" align="center">
                날짜
              </TableCell>
              <TableCell size="medium" align="right">
                성적조회
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ReportLists.map(list => (
              <TableRow
                key={list.aseq}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {list.aname}
                </TableCell>
                <TableCell align="center">{list.adate}</TableCell>
                <TableCell align="right">
                  <ReportModal name={list.aname} score={list.adate} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
