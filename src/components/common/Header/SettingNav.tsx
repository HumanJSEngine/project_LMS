import styled from "@emotion/styled";
import MainNavItem from "./MainNavItem";

const SettingNav = () => {
  return (
    <Box>
      <MainNavItem to="/setting">설정</MainNavItem>
      <MainNavItem to="/logout">로그아웃</MainNavItem>
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
