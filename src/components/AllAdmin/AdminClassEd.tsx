import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import AdModal from "./AdModal";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AdminClassEd = () => {
  const getList = async () => {
    return await axios
      .get("http://192.168.0.183:8520/api/stf/lectures")
      .then(res => res.data.list);
  };
  const {
    status,
    error,
    data: list,
  } = useQuery({
    queryKey: ["list"],
    queryFn: getList,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  //  console.log("목록", list);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>강의이름</TableCell>
              <TableCell align="center">수업코드</TableCell>
              <TableCell align="center">출석</TableCell>
              <TableCell align="center">중간시험</TableCell>
              <TableCell align="center">기말시험</TableCell>
              <TableCell align="center">과제</TableCell>
              <TableCell align="center">반영</TableCell>
              <TableCell align="center">수정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map(item => (
              <TableRow
                key={item.liSeq}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="center">{item.code}</TableCell>
                <TableCell align="center">
                  {item.list.length > 0 && item.list[0].scoreMax}
                </TableCell>
                <TableCell align="center">
                  {item.list.length > 0 && item.list[1].scoreMax}
                </TableCell>
                <TableCell align="center">
                  {item.list.length > 0 && item.list[2].scoreMax}
                </TableCell>
                <TableCell align="center">
                  {item.list.length > 0 && item.list[3].scoreMax}
                </TableCell>
                <TableCell align="center">{item.evaluation}</TableCell>
                <TableCell align="center">
                  <AdModal
                    liSeq={item.liSeq}
                    name={item.name}
                    evaluation={item.evaluation}
                  />
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
