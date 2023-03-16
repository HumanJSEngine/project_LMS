import styled from "@emotion/styled";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

const AttendTable = () => {
  return (
    <Tbbox>
      <caption>출결 관리</caption>
      <thead>
        <tr>
          <th scope="col">학생/출석</th>
          <th scope="col">1차시</th>
          <th scope="col">2차시</th>
          <th scope="col">3차시</th>
          <th scope="col">4차시</th>
        </tr>
      </thead>
      <tbody>
        <Trbox>
          <th scope="row">학생1</th>
          <td>
            <span>
              <BsCheckCircle />
            </span>
          </td>
          <td>
            <span>
              <BsXCircle />
            </span>
          </td>
          <td>
            <span>
              <BsCheckCircle />
            </span>
          </td>
          <td>
            <span>
              <BsXCircle />
            </span>
          </td>
        </Trbox>
        <Trbox>
          <th scope="row">학생2</th>
          <td>
            <span>
              <BsCheckCircle />
            </span>
          </td>
          <td>
            <span>
              <BsXCircle />
            </span>
          </td>
          <td>
            <span>
              <BsCheckCircle />
            </span>
          </td>
          <td>
            <span>
              <BsXCircle />
            </span>
          </td>
        </Trbox>
        <Trbox>
          <th scope="row">학생3</th>
          <td>
            <span>
              <BsCheckCircle />
            </span>
          </td>
          <td>
            <span>
              <BsXCircle />
            </span>
          </td>
          <td>
            <span>
              <BsCheckCircle />
            </span>
          </td>
          <td>
            <span>
              <BsXCircle />
            </span>
          </td>
        </Trbox>
      </tbody>
    </Tbbox>
  );
};



const Tbbox = styled.table`
  thead > tr > th {
    width: 100px;
    border: 2px solid black;
  }
  tbody > tr > th {
    border: 1px solid black;
    text-align: center;
    height:40px;
  }
`;

const Trbox = styled.tr`
  td {
    border: 1px solid black;
    text-align: center;
    svg {
      font-size: 30px;
      font-weight: 700;
    }
  }
`;
export default AttendTable;
