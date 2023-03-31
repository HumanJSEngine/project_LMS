import * as React from "react";
import { GetRnumList } from "../../utils/GetRnumList";
import axios from "axios";
import { Box, Button, Modal } from "@mui/material";

import ReportBtn from "./ReportBtn";
import ReportView from "./ReportView";
import ReportInput from "./ReportInput";
import { useQuery } from "@tanstack/react-query";
import ExitModalBtn from "./ExitModalBtn";
import styled from "@emotion/styled";

export default function BasicModal({ name }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [swap, setSwap] = React.useState(true);

  const getRScoreLists = async () => {
    return await axios
      .get("http://192.168.0.183:8520/api/sco/1/4")
      .then(res => res.data.list);
  };

  const {
    status,
    error,
    data: RScoreLists,
  } = useQuery({
    queryKey: ["RscoreLists"],
    queryFn: getRScoreLists,
  });
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  console.log("학생별 과제점수목록", RScoreLists);
  console.log("과제명", name);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    width: 900,
    height: "inherit",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        성적조회
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {swap ? (
            <ReportView RnumList={GetRnumList(RScoreLists, name)} />
          ) : (
            <ReportInput
              RnumList={GetRnumList(RScoreLists, name)}
              name={name}
            />
          )}
          <BtnBox>
            <ReportBtn swap={swap} setSwap={setSwap} />
            <ExitModalBtn handleClose={handleClose}>창닫기</ExitModalBtn>
          </BtnBox>
        </Box>
      </Modal>
    </>
  );
}

const BtnBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 20px;
`;
