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
import CustomButton from "../common/CustomButton";
import axios from "axios";
const AdModal = ({ liSeq }) => {
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
  const [alignment, setAlignment] = useState<number | null>(1);
  console.log(alignment);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number | null,
  ) => {
    setAlignment(newAlignment);
  };

  const [all, setAll] = useState();

  // 저장버튼
  const handleSubmit = async () => {
    const body = {
      liEvaluationType: value,
    };

    await axios.post(
      `http://192.168.0.183:8520/api/stf/lectures/${liSeq}`,
      body,
    );

    if (window.confirm("저장하시겠습니까?")) {
      alert("저장하였습니다.");
    } else {
      alert("취소하였습니다");
    }
  };

  type InnputState = {
    attendance: number;
    midterm: number;
    report: number;
    final: number;
  };
  const initVal: InnputState = {
    attendance: 0,
    midterm: 0,
    report: 0,
    final: 0,
  };
  const [value, setValue] = useState(1);
  const [val, setVal] = React.useState(initVal);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setVal({ ...val });
    const total: number = val.attendance + val.midterm + val.report + val.final;
    setAll(total);
  };
  return (
    <div>
      <Button onClick={handleOpen}>비율수정</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            비율수정(항목들어갈예정)
          </Typography>

          {/* 모달 폼 */}
          <ModalForm onSubmit={handleSubmit}>
            <ToggleButtonBox>
              {/* <InputBt type="button" value="상대" />
              <InputBt type="button" value="절대" /> */}
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
                  onClick={setValue(1)}
                >
                  <span>상대</span>
                </ToggleButton>
                <ToggleButton
                  value={2}
                  aria-label="centered"
                  color="primary"
                  onClick={setValue(2)}
                >
                  <span>절대</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </ToggleButtonBox>
            <FlexBox>
              <div>
                <InputLayout>
                  <span>출석</span>
                  <TextField
                    type="number"
                    variant="standard"
                    onChange={handleChange}
                  />
                </InputLayout>
                <InputLayout>
                  <span>중간</span>
                  <TextField
                    type="number"
                    variant="standard"
                    onChange={handleChange}
                  />
                </InputLayout>
              </div>
              <div>
                <InputLayout>
                  <span>과제</span>
                  <TextField
                    type="number"
                    variant="standard"
                    onChange={handleChange}
                  />
                </InputLayout>
                <InputLayout>
                  <span>기말</span>
                  <TextField
                    type="number"
                    variant="standard"
                    onChange={handleChange}
                  />
                </InputLayout>
              </div>
            </FlexBox>
            <CustomButton color="primary" variant="contained" type="submit">
              저장
            </CustomButton>
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
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

const InputLayout = styled.div`
  margin: 10px;
  left: 30px;
`;

export default AdModal;
