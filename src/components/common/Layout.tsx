import styled from "@emotion/styled";
import Header from "./Header/Header";
import React from "react";
import getUserLogin from "../../utils/getUserLogin";
import useRoute from "../../utils/useRoute";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { route } = useRoute();
  const { isLoginned, userInfo } = getUserLogin();
  if (userInfo == null || !isLoginned) {
    route("/");
    return <></>;
  }
  return (
    <Page>
      <Header userInfo={userInfo} />
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
    overflow-y: auto;
  }
`;

export default Layout;
