import React, { useState } from "react";
import styled from "@emotion/styled";
import AttendButtons from "./AttendButtons";

const AttendSwitch = () => {
  const [total, setTotal] = useState(false);

  const attendAll = () => {
    setTotal(true);
  };

  const attendNone = () => {
    setTotal(false);
  };
  console.log(total);
  return (
    <Tbbox>
      <caption>출결 입력 수정</caption>
      <thead>
        <tr>
          <th scope="col">전체 출석/결석</th>
          <th scope="col">
            <button onClick={attendAll}>전체 출석</button>
            <button onClick={attendNone}>전체 결석</button>
          </th>
          <th scope="col">
            <button>전체 출석</button>
            <button>전체 결석</button>
          </th>
          <th scope="col">
            <button>전체 출석</button>
            <button>전체 결석</button>
          </th>
        </tr>
        <tr>
          <th scope="row">학생/출석</th>
          <th scope="col">1차시</th>
          <th scope="col">2차시</th>
          <th scope="col">3차시</th>
        </tr>
      </thead>
      <tbody>
        <Trbox>
          <th scope="row">학생1</th>
          <td>
            <AttendButtons total={total} />
          </td>
          <td>
            <AttendButtons />
          </td>
          <td>
            <AttendButtons />
          </td>
        </Trbox>
        <Trbox>
          <th scope="row">학생2</th>
          <td>
            <AttendButtons total={total} />
          </td>
          <td>
            <AttendButtons />
          </td>
          <td>
            <AttendButtons />
          </td>
        </Trbox>
        <Trbox>
          <th scope="row">학생3</th>
          <td>
            <AttendButtons total={total} />
          </td>
          <td>
            <AttendButtons />
          </td>
          <td>
            <AttendButtons />
          </td>
        </Trbox>
      </tbody>
    </Tbbox>
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
