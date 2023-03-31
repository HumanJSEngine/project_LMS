import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import colors, { transition } from "../../../styles/palette";
import React from "react";

interface MainNavItemProps {
  to: string;
  children: React.ReactNode;
}

const MainNavItem = ({ to, children }: MainNavItemProps) => {
  const pathname = location.pathname.split("/");
  return (
    <Box isActive={pathname[1] === to.split("/")[1]}>
      <NavLink to={to}>
        <span>{children}</span>
      </NavLink>
    </Box>
  );
};

const Box = styled.li<{ isActive: boolean }>`
  width: 100%;
  height: 52px;
  background: ${({ isActive }) => (isActive ? colors.white : colors.primary)};
  transition: background ${transition};
  cursor: pointer;
  & a {
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    & span {
      color: ${({ isActive }) => (isActive ? colors.primary : colors.white)};
      transition: color 0.3s ease-in-out;
    }
  }
  &:hover {
    background: ${colors.white};
    & a {
      & span {
        color: ${colors.primary};
      }
    }
  }
`;

export default MainNavItem;
