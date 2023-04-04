import React from "react";
import { BoxLayout } from "../AdModal";
import EditButton from "../../common/EditButton";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
const AdminGrade = () => {
  return (
    <>
      <h3>만점 설정</h3>
      <Container>
        <BoxLayout>
          <TextField
            style={{ width: 180 }}
            type="number"
            variant="standard"
            name="middle"
            placeholder="출석"
          />
          <EditButton
            color="primary"
            variant="contained"
            type="button"
            style={{ marginRight: 0, marginTop: 5 }}
          >
            저장
          </EditButton>
          <TextField
            style={{ width: 180 }}
            type="number"
            variant="standard"
            name="middle"
            placeholder="중간"
          />
          <EditButton
            color="primary"
            variant="contained"
            type="button"
            style={{ marginRight: 0, marginTop: 5 }}
          >
            저장
          </EditButton>
        </BoxLayout>

        <BoxLayout>
          <TextField
            style={{ width: 180 }}
            type="number"
            variant="standard"
            name="middle"
            placeholder="기말"
          />
          <EditButton
            color="primary"
            variant="contained"
            type="button"
            style={{ marginRight: 0, marginTop: 5 }}
          >
            저장
          </EditButton>
          <TextField
            style={{ width: 180 }}
            type="number"
            variant="standard"
            name="middle"
            placeholder="과제"
          />
          <EditButton
            color="primary"
            variant="contained"
            type="button"
            style={{ marginRight: 0, marginTop: 5 }}
          >
            저장
          </EditButton>
        </BoxLayout>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  items-align: center;
  gap: 20px;
`;
export default AdminGrade;
