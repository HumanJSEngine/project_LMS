import React from "react";
import styled from "@emotion/styled";

interface AttendLayoutProps {
  children: React.ReactNode;
}
const AttendLayout = ({ children }: AttendLayoutProps) => {
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
