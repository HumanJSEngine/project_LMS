import React from "react";
import styled from "@emotion/styled";

const AttendLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default AttendLayout;
