import React, { useState } from "react";
import AttendLayout from "../components/Attend/AttendLayout";
import LastResultView from "../components/LastResult/LastResultView";
import LastResultInput from "../components/LastResult/LastResultInput";
import LastResultBtn from "../components/LastResult/LastResultBtn";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const LastResult = () => {
  const [swap, setSwap] = useState(false);

  const getFinalLists = async () => {
    return await axios
      .get("http://192.168.0.183:8520/api/final/BAC001-01")
      .then(res => res.data);
  };

  const {
    status,
    error,
    data: FLists,
  } = useQuery({
    queryKey: ["FinalLists"],
    queryFn: getFinalLists,
  });
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  console.log('리스트 조회', FLists);

  return (
    <AttendLayout>
      {swap ? <h1>성적 조회</h1> : <h1>성적 수정</h1>}
      {swap ? (
        <LastResultView FLists={FLists} />
      ) : (
        <LastResultInput FLists={FLists} />
      )}
      <LastResultBtn swap={swap} setSwap={setSwap} />
    </AttendLayout>
  );
};

export default LastResult;
