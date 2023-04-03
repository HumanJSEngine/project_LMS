import React from "react";
import { BoxLayout } from "../AdModal";
import EditButton from "../../common/EditButton";
import { TextField } from "@mui/material";
const AdminGrade = () => {
  return (
    <>
      <div>
        <h3>만점 설정</h3>
      </div>

      <BoxLayout>
        <TextField
          style={{ width: 180 }}
          type="number"
          variant="standard"
          name="middle"
          placeholder="출석"
        />
        <EditButton color="primary" variant="contained" type="button">
          저장
        </EditButton>
        <TextField
          style={{ width: 180 }}
          type="number"
          variant="standard"
          name="middle"
          placeholder="중간"
        />
        <EditButton color="primary" variant="contained" type="button">
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
        <EditButton color="primary" variant="contained" type="button">
          저장
        </EditButton>
        <TextField
          style={{ width: 180 }}
          type="number"
          variant="standard"
          name="middle"
          placeholder="과제"
        />
        <EditButton color="primary" variant="contained" type="button">
          저장
        </EditButton>
      </BoxLayout>
    </>
  );
};

export default AdminGrade;
