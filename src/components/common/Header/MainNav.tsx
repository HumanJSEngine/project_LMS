import styled from "@emotion/styled";
import { type PathData } from "../../../routes";
import MainNavItem from "./MainNavItem";

interface MainNavProps {
  navList: PathData[];
}

const MainNav = ({ navList }: MainNavProps) => {
  return (
    <Box>
      <ul className="main-nav-list">
        {navList.map((navItem, index) => (
          <MainNavItem key={index} to={navItem.path}>
            {navItem.name}
          </MainNavItem>
        ))}
      </ul>
    </Box>
  );
};

const Box = styled.nav`
  flex-grow: 1;
  padding: 12px 0px;
  width: 100%;
  & .main-nav-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default MainNav;
