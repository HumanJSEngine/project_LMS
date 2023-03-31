import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { attendAllState } from "../../recoil/Atoms";
import { attendAllSelector } from "../../recoil/Selectors";
import { setAttendAllResult } from "../../api/AttendAllSetApi";
import { useMutation } from "@tanstack/react-query";

// interface AttendBtnType {
//   attendAll: boolean;
//   setAttendAll: React.Dispatch<React.SetStateAction<boolean>>;
// }

const AttendAllBtn = ({ amasSeq }) => {
  const [attendAll, setAttendAll] = useState('');

  // const attendNum = (attendAll, amasSeq) => {
  //   const ans = attendAll.find(item => item.amasSeq === amasSeq);
  //   return ans;
  // };
  // const attendAllList = useRecoilValue(attendAllSelector);

  // useEffect(() => {
  //   setAttendAll(prev => [
  //     ...prev,
  //     {
  //       amasSeq: amasSeq,
  //       attend: true,
  //     },
  //   ]);
  // }, []);

  const attend = () => {
    setAttendAll(attendAll => true);
    const result = setAttendAllResult(1, amasSeq, 1);
    result.then(value => alert(value.message));
  };

  const absence = () => {
    setAttendAll(attendAll => false);
    const result = setAttendAllResult(1, amasSeq, 0);
    result.then(value => alert(value.message));
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
