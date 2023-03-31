import React, { useState } from "react";
import axios from "axios";
import MidtermSwitch from "../components/Midterm/MidtermSwitch";
import MidtermView from "../components/Midterm/MidtermView";
import { useQuery } from "@tanstack/react-query";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import getClassParams from "../hooks/getClassParams";

export default function CustomPaginationActionsTable() {
  const [swap, setSwap] = useState(true);
  const params = getClassParams().classid;

  console.log("classid", params);

  const getMidtermLists = async () => {
    return await axios
      .get('http://192.168.0.183:8520/api/sco/1/2')
      .then(res => res.data.list[0].list);
  };

  const {
    status,
    error,
    data: MidtermLists,
  } = useQuery({
    queryKey: ["MidtermLists"],
    queryFn: getMidtermLists,
  });
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  console.log("중간성적", MidtermLists);
  return (
    <Container>
      {swap ? <h1>중간 성적 조회</h1> : <h1>중간 성적 수정</h1>}
      {swap ? (
        <MidtermView lists={MidtermLists} />
      ) : (
        <MidtermSwitch lists={MidtermLists} />
      )}
      <SwapButton variant="contained" onClick={() => setSwap(prev => !prev)}>
        {swap ? "성적 입력" : "성적 조회"}
      </SwapButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const SwapButton = styled(Button)`
  width: 100px;
  height: 50px;
  margin-top: 10px;
`;
