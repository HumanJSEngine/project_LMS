import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

interface Column {
  id: "name" | "attend" | "mid" | "final" | "report1" | "report2" | "last";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => number;
}

const columns: readonly Column[] = [
  { id: "name", label: "학생/출결", minWidth: 170, align: "center" },
  {
    id: "attend",
    label: "출결정보",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "mid",
    label: "중간",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "final",
    label: "기말",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "report1",
    label: "과제1",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "report2",
    label: "과제2",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "last",
    label: "최종성적",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  attend: number;
  mid: number;
  final: number;
  report1: number;
  report2: number;
  last: string;
}

function createData(
  name: string,
  attend: number,
  mid: number,
  final: number,
  report1: number,
  report2: number,
  last: string,
): Data {
  return { name, attend, mid, final, report1, report2, last };
}

const rows = [
  createData("학생1", 100, 100, 100, 10, 10, "A+"),
  createData("학생2", 90, 100, 90, 8, 8, "B+"),
  createData("학생3", 80, 90, 80, 7, 7, "C+"),
  createData("학생4", 70, 85, 80, 6, 6, "A"),
  createData("학생5", 60, 85, 70, 5, 5, "B"),
  createData("학생6", 50, 85, 70, 4, 4, "C"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <h2>성적조회만</h2>
      <TableContainer sx={{ maxHeight: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
