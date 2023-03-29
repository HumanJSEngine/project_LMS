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
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


export default function BasicTable() {
  const getPosts = async () => {
    return await axios
      .get("http://192.168.0.183:8520/api/atd/1")
      .then(res => res.data.list);
  };
  const {
    status,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  console.log("출석목록", posts[0].list);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{'whiteSpace':'nowrap'}} align="center">학생/차시</TableCell>
            {posts[0].list.map(item => (
              <TableCell align="left" key={item.amasSeq}>
                {item.date}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, idx) => (
            <TableRow
              key={post.mbSeq}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {post.name}
              </TableCell>
              {posts[idx].list.map(item => (
                <TableCell align="center" key={item.amasSeq}>
                  {item.status === "O" ? <ImRadioUnchecked /> : <ImCross />}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
