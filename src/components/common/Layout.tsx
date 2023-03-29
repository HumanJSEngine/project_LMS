import styled from "@emotion/styled";
import Header from "./Header/Header";
import { useRecoilValue } from "recoil";
import { type IUser } from "../../types/User";
import { userAtom } from "../../store/user/atom";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const userInfo = useRecoilValue<IUser>(userAtom);
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
