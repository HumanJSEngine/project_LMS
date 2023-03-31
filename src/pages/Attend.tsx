import React, { useState, useEffect } from "react";
import AttendLayout from "../components/Attend/AttendLayout";
import AttendTable from "../components/Attend/AttendTable";
import AttendSwitch from "../components/Attend/AttendSwitch";
import AttendBtn from "../components/Attend/AttendBtn";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const Attend = () => {
  const [swap, setSwap] = useState(false);

  const getAttendLists = async () => {
    return await axios
      .get("http://192.168.0.183:8520/api/atd/1")
      .then(res => res.data.list);
  };

  const {
    status,
    error,
    data: attendLists,
  } = useQuery(
    {
      queryKey: ["posts"],
      queryFn: getAttendLists,
    },
    {
      refetchInterval: 1000,
    },
  );

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <AttendLayout>
        {swap ? (
          <AttendTable attendLists={attendLists} />
        ) : (
          <AttendSwitch attendLists={attendLists}/>
        )}

        <AttendBtn swap={swap} setSwap={setSwap}>
          <span>{swap ? "수정" : "확인"}</span>
        </AttendBtn>
      </AttendLayout>
    </>
  );
};

export default Attend;
