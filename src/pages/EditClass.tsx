import React from "react";
import AdminClassEd from "../components/AllAdmin/AdminClassEd";
// 이모션
import styled from "@emotion/styled";
const EditClass = () => {
  return (
    <>
      <Container>
        <AdminClassEd />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default EditClass;
