import React, { useState } from "react";
// 이모션
import styled from "@emotion/styled";
// 모달
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// 토글버튼
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { TextField } from "@mui/material";
import EditButton from "../common/EditButton";

// axios
import axios from "axios";

interface AdModalProps {
  liSeq: number;
  name: string;
  evaluation: "상대평가" | "절대평가";
  attendance: number;
  middle: number;
  final: number;
  report: number;
}

const AdModal = ({
  liSeq,
  name,
  evaluation,
  attendance,
  middle,
  final,
  report,
}: AdModalProps) => {
  // 모달
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // 토글버튼
  const [alignment, setAlignment] = useState<number | null>(
    evaluation === "상대평가" ? 1 : 2,
  );
  const handleAlignment = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: number,
  ) => {
    setAlignment(newAlignment);
    e.preventDefault();
    const body = {
      liEvaluationType: newAlignment,
    };
    if (window.confirm("정말 수정하시겠습니까?")) {
      axios
        .post(`http://192.168.0.183:8520/api/stf/lectures/${liSeq}`, body)
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err);
        });
      alert("저장하였습니다.");
    } else {
      alert("취소하였습니다.");
    }
  };
  interface Value {
    attendance: number;
    middle: number;
    final: number;
    report: number;
  }

  const initVal: Value = {
    attendance: 0,
    middle: 0,
    final: 0,
    report: 0,
  };

  const [val, setVal] = useState(initVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  // 출석 저장기능
  const attendanceFn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const body = {
      maxScore: val.attendance,
    };
    if (window.confirm("정말 수정하시겠습니까?")) {
      axios
        .post(`http://192.168.0.183:8520/api/stf/lectures/${liSeq}/1`, body)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      alert("저장하였습니다.");
    } else {
      alert("취소하였습니다.");
    }
  };

  // 중간 저장기능
  const middleFn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const body = {
      maxScore: val.middle,
    };
    if (window.confirm("정말 수정하시겠습니까?")) {
      axios
        .post(`http://192.168.0.183:8520/api/stf/lectures/${liSeq}/2`, body)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      alert("저장하였습니다.");
    } else {
      alert("취소하였습니다.");
    }
  };
  // 기말 저장기능
  const finalFn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const body = {
      maxScore: val.final,
    };
    if (window.confirm("정말 수정하시겠습니까?")) {
      axios
        .post(`http://192.168.0.183:8520/api/stf/lectures/${liSeq}/3`, body)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      alert("저장하였습니다.");
    } else {
      alert("취소하였습니다.");
    }
  };

  // 과제 저장기능
  const reportFn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const body = {
      maxScore: val.report,
    };
    if (window.confirm("정말 수정하시겠습니까?")) {
      axios
        .post(`http://192.168.0.183:8520/api/stf/lectures/${liSeq}/4`, body)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      alert("저장하였습니다.");
    } else {
      alert("취소하였습니다.");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>만점수정</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>

          {/* 모달 폼 */}
          <ModalForm>
            <Spam>평가방식 수정</Spam>
            <ToggleButtonBox>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  value={1}
                  aria-label="left aligned"
                  color="primary"
                >
                  <span>상대</span>
                </ToggleButton>
                <ToggleButton value={2} aria-label="centered" color="primary">
                  <span>절대</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </ToggleButtonBox>
            <Spam>만점 수정</Spam>
            <FlexBox>
              <span>출석</span>
              <BoxLayout>
                <TextField
                  type="number"
                  variant="standard"
                  onChange={handleChange}
                  name="attendance"
                  defaultValue={attendance}
                />
                <EditButton
                  color="primary"
                  variant="contained"
                  type="button"
                  onClick={attendanceFn}
                >
                  저장
                </EditButton>
              </BoxLayout>
              <span>중간</span>
              <BoxLayout>
                <TextField
                  type="number"
                  variant="standard"
                  onChange={handleChange}
                  name="middle"
                  defaultValue={middle}
                />
                <EditButton
                  color="primary"
                  variant="contained"
                  type="button"
                  onClick={middleFn}
                >
                  저장
                </EditButton>
              </BoxLayout>

              <span>기말</span>
              <BoxLayout>
                <TextField
                  type="number"
                  variant="standard"
                  onChange={handleChange}
                  name="final"
                  defaultValue={final}
                />
                <EditButton
                  color="primary"
                  variant="contained"
                  type="button"
                  onClick={finalFn}
                >
                  저장
                </EditButton>
              </BoxLayout>
              <span>과제</span>
              <BoxLayout>
                <TextField
                  type="number"
                  variant="standard"
                  onChange={handleChange}
                  name="report"
                  defaultValue={report}
                />
                <EditButton
                  color="primary"
                  variant="contained"
                  type="button"
                  onClick={reportFn}
                >
                  저장
                </EditButton>
              </BoxLayout>
            </FlexBox>
          </ModalForm>
        </Box>
      </Modal>
    </div>
  );
};

const ModalForm = styled.form`
  margin-top: 20px;
`;

const ToggleButtonBox = styled.div`
  margin-bottom: 20px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 90%;
`;
export const BoxLayout = styled.div`
  display: flex;
  item-align: center;
  gap: 20px;
`;

const Spam = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export default AdModal;
