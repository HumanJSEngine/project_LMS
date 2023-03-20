import React, { useState } from "react";
import styled from "@emotion/styled/types/base";
import AttendLayout from "../components/Attend/AttendLayout";
import LastResultView from "../components/LastResult/LastResultView";
import LastResultInput from "../components/LastResult/LastResultInput";
const LastResult = () => {
  const [swap, setSwap] = useState(false);

  return (
    <AttendLayout>
      {swap ? <LastResultView /> : <LastResultInput />}
      <button onClick={() => setSwap(prev => !prev)}>입력</button>
    </AttendLayout>
  );
};

export default LastResult;
