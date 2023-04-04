import React, { useState } from "react";
import AttendLayout from "../components/Attend/AttendLayout";
import LastResultView from "../components/LastResult/LastResultView";
import LastResultInput from "../components/LastResult/LastResultInput";
import LastResultBtn from "../components/LastResult/LastResultBtn";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import getClassParams from "../hooks/getClassParams";

const LastResult = () => {
  const [swap, setSwap] = useState<boolean>(true);

  const classid = getClassParams().classid;

  const className = classid => {
    let answer;
    switch (classid) {
      case "1":
        answer = "BAC001-01";
        break;
      case "2":
        answer = "FRO001-01";
        break;
    }
    return answer;
  };

  console.log("강의명", className(classid));

  const getFinalLists = async () => {
    return await axios
      .get(`http://192.168.0.183:8520/api/final/${className(classid)}`)
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

  return (
    <AttendLayout>
      {swap ? (
        <LastResultView FLists={FLists} />
      ) : (
        <LastResultInput FLists={FLists}/>
      )}
      <LastResultBtn swap={swap} setSwap={setSwap} />
    </AttendLayout>
  );
};

export default LastResult;
