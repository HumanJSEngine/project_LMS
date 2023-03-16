import React from "react";
import styled from "@emotion/styled";

const AttendLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`;

export default AttendLayout;
