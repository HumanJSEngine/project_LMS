import styled from "@emotion/styled";
import { useState } from "react";
import { type UserType } from "../../routes";
import Header from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [userType] = useState<UserType>("professor");
  return (
    <Page>
      <Header userType={userType} />
      <div className="content">{children}</div>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  & .content {
    width: calc(100% - 240px);
    padding: 20px;
    overflow-y: auto;
  }
`;

export default Layout;
