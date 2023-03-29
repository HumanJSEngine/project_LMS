import styled from "@emotion/styled";
import { type PathData, routerData } from "../../../routes";
import { font } from "../../../styles/fonts";
import colors from "../../../styles/palette";
import { type IUser } from "../../../types/User";
import MainNav from "./MainNav";
import SettingNav from "./SettingNav";

interface HeaderProps {
  userInfo: IUser;
}

const Header = ({ userInfo }: HeaderProps) => {
  const NavList: PathData[] = routerData.reduce<PathData[]>((prev, router) => {
    if (router.authType === userInfo.type && router.menuDepth === "main") {
      return [
        ...prev,
        {
          name: router.name,
          path: router.path,
        },
      ];
    }
    return prev;
  }, []);
  return (
    <Box>
      <ProfileBox>
        <div className="profile-image">
          <img src="" alt="" />
        </div>
        <div className="profile-info">
          <p>
            {userInfo.type === "professor"
              ? "교수"
              : userInfo.type === "staff"
              ? "교직원"
              : "학생"}
          </p>
          <p>
            {userInfo.name} ({userInfo.id})
          </p>
        </div>
      </ProfileBox>
      <MainNav navList={NavList} />
      <SettingNav />
    </Box>
  );
};

const Box = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 240px;
  height: 100%;
  background: ${colors.primary};
  padding: 20px 0;
  color: ${colors.white};
  font: ${font.style15Medium};
  z-index: 1;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: auto;
  padding: 20px 20px;
  & .profile-image {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      background: ${colors.gray500};
    }
  }
  & .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }
`;

export default Header;
