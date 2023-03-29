import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { attendAllState } from "../../recoil/Atoms";
import { attendAllSelector } from "../../recoil/Selectors";

// interface AttendBtnType {
//   attendAll: boolean;
//   setAttendAll: React.Dispatch<React.SetStateAction<boolean>>;
// }

const AttendAllBtn = ({ amasSeq, date }) => {
  const [attendAll, setAttendAll] = useRecoilState(attendAllState);

  // const attendNum = (attendAll, amasSeq) => {
  //   const ans = attendAll.find(item => item.amasSeq === amasSeq);
  //   return ans;
  // };
  // const attendAllList = useRecoilValue(attendAllSelector);

  useEffect(() => {
    setAttendAll(prev => [
      ...prev,
      {
        amasSeq: amasSeq,
        attend: true,
      },
    ]);
  }, []);

  return (
    <BtnWrapper>
      <ABtn
        variant={attendAll ? "contained" : null}
        onClick={() => setAttendAll(prev => !prev)}
      >
        전체출석
      </ABtn>
      <ABtn
        variant={!attendAll ? "contained" : null}
        onClick={() => setAttendAll(prev => !prev)}
      >
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
