import React, { useState } from "react";
import axios from "axios";
import MidtermSwitch from "../components/Midterm/MidtermSwitch";
import MidtermView from "../components/Midterm/MidtermView";
import { useQuery } from "@tanstack/react-query";

export default function CustomPaginationActionsTable() {
  const [swap, setSwap] = useState(false);
  const getMidtermLists = async () => {
    return await axios
      .get("http://192.168.0.183:8520/api/sco/1/2")
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
    <>
      {swap ? <h1>중간성적</h1> : <h1>중간성적수정</h1>}
      {swap ? (
        <MidtermView lists={MidtermLists} />
      ) : (
        <MidtermSwitch lists={MidtermLists} />
      )}
      <button type="submit" onClick={() => setSwap(prev => !prev)}>
        {swap ? "수정" : "저장"}
      </button>
    </>
  );
}
