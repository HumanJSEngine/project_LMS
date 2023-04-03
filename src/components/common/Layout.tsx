import styled from "@emotion/styled";
import Header from "./Header/Header";
import React, { useEffect } from "react";
import getUserLogin from "../../utils/getUserLogin";
import useRoute from "../../utils/useRoute";
import { type UserType } from "../../types/User";

interface LayoutProps {
  authType: UserType | undefined;
  children: React.ReactNode;
}

const Layout = ({ authType, children }: LayoutProps) => {
  const { route } = useRoute();
  const { isLoginned, userInfo } = getUserLogin();
  useEffect(() => {
    if (!isLoginned && userInfo?.type !== authType) {
      route("/");
    }
  }, [isLoginned]);
  return userInfo != null ? (
    <Page>
      <Header userInfo={userInfo} />
      <div className="content">{children}</div>
    </Page>
  ) : (
    <></>
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
