import React from "react";

// 이모션
import styled from "@emotion/styled";
import SelectGrade from "./AdMakeClass/SelectGrade";
import AdminContent from "./AdMakeClass/AdminContent";
import AdminGrade from "./AdMakeClass/AdminGrade";
import EditButton from "../common/EditButton";
import AdminTexts from "./AdMakeClass/AdminTexts";
import AdminToggle from "./AdMakeClass/AdminToggle";

const AdminMakeClass = () => {
  const handleBt = () => {
    if (window.confirm("저장 하시겠습니까?")) {
      alert("저장완료");
    } else {
      alert("취소완료");
    }
  };
  return (
    <>
      <Container>
        <h3>강의개설 [강의정보]</h3>
        <SelectGrade />
        <AdminTexts />
        <AdminToggle />
        <AdminContent />
        <AdminGrade />
        <EditButton
          color="primary"
          variant="contained"
          type="button"
          style={{ marginTop: 100 }}
          onClick={handleBt}
        >
          저장
        </EditButton>
      </Container>
    </>
  );
};
const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 650px;
`;

export default AdminMakeClass;
