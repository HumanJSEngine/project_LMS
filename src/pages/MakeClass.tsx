import React from "react";
// 이모션
import styled from "@emotion/styled";
import AdminMakeClass from "../components/AllAdmin/AdminMakeClass";
const MakeClass = () => {
  return (
    <>
      <Container>
        <AdminMakeClass />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default MakeClass;
