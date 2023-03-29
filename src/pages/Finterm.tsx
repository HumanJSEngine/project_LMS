import * as React from "react";
import FinTermView from "../components/FinTerm/FinTermView";
import FinTermInput from "../components/FinTerm/FinTermInput";
import styled from "@emotion/styled";
import axios from "axios";
import SwapBtn from "../components/FinTerm/SwapBtn";
import { useQuery } from "@tanstack/react-query";

const Finterm = () => {
  const [switchView, setSwitchView] = React.useState(false);
  const getFintermLists = async () => {
    return await axios
      .get("http://192.168.0.183:8520/api/sco/1/3")
      .then(res => res.data.list[0].list);
  };

  const {
    status,
    error,
    data: FintermLists,
  } = useQuery({
    queryKey: ["FintermLists"],
    queryFn: getFintermLists,
  });
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  console.log(FintermLists);

  return (
    <>
      <Container>
        {switchView ? (
          <FinTermView lists={FintermLists} />
        ) : (
          <FinTermInput lists={FintermLists} />
        )}
        <SwapBtn switchView={switchView} setSwitchView={setSwitchView} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
export default Finterm;
