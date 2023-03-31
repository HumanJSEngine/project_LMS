import styled from "@emotion/styled";
import MainNavItem from "./MainNavItem";
import MainButtonItem from "./MainButtonItem";
import { type IUser } from "../../../types/User";
import { userAtom } from "../../../store/user/atom";
import useRoute from "../../../utils/useRoute";
import { useResetRecoilState } from "recoil";

const SettingNav = () => {
  const { route } = useRoute();
  const resetUserInfo = useResetRecoilState(userAtom);
  const logoutEvent = () => {
    resetUserInfo();
    route("/");
  };
  return (
    <Box>
      <MainNavItem to="/setting">설정</MainNavItem>
      <MainButtonItem clickEvent={logoutEvent}>로그아웃</MainButtonItem>
    </Box>
  );
};

const Box = styled.nav`
  padding: 12px 0px;
  width: 100%;
  & .setting-nav-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default SettingNav;
