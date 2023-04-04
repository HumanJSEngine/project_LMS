import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { setAttendAllResult } from "../../api/AttendAllSetApi";

interface AttendBtnProps {
  amasSeq: number;
  liSeq: number;
}

const AttendAllBtn = ({ amasSeq, liSeq }: AttendBtnProps) => {
  const [attendAll, setAttendAll] = useState("");

  const attend = () => {
    setAttendAll(attendAll => true);
    const result = setAttendAllResult(liSeq, amasSeq, 1);
    result.then(value => alert(value.message)).catch(error => alert(error));
  };

  const absence = () => {
    setAttendAll(attendAll => false);
    const result = setAttendAllResult(liSeq, amasSeq, 0);
    result.then(value => alert(value.message)).catch(error => alert(error));
  };

  return (
    <BtnWrapper>
      <ABtn variant={attendAll ? "contained" : null} onClick={() => attend()}>
        전체출석
      </ABtn>
      <ABtn variant={!attendAll ? "contained" : null} onClick={() => absence()}>
        전체결석
      </ABtn>
    </BtnWrapper>
  );
};

const ABtn = styled(Button)`
  height: 60px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;

export default AttendAllBtn;
