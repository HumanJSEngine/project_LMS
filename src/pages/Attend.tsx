import React, { useState } from "react";
import AttendLayout from "../components/Attend/AttendLayout";
import AttendTable from "../components/Attend/AttendTable";
import AttendSwitch from "../components/Attend/AttendSwitch";
import AttendBtn from "../components/Attend/AttendBtn";

const Attend = () => {
  const [swap, setSwap] = useState(false);
  return (
    <>
      <AttendLayout>
        <h1>출결-조회</h1>
        {swap ? <AttendTable /> : <AttendSwitch />}

        <AttendBtn swap= {swap} setSwap={setSwap}>
          <span>{swap ? "수정" : "확인"}</span>
        </AttendBtn>
      </AttendLayout>
    </>
  );
};

export default Attend;
