import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import colors, { transition } from "../../../styles/palette";
import React from "react";

interface MainNavItemProps {
  clickEvent: () => void;
  children: React.ReactNode;
}

const MainButtonItem = ({ clickEvent, children }: MainNavItemProps) => {
  return (
    <Box>
      <button onClick={clickEvent}>
        <span>{children}</span>
      </button>
    </Box>
  );
};

const Box = styled.li`
  width: 100%;
  height: 52px;
  background: ${colors.primary};
  transition: background ${transition};
  cursor: pointer;
  & button {
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 0;
    & span {
      color: ${colors.white};
      transition: color 0.3s ease-in-out;
    }
  }
  &:hover {
    background: ${colors.white};
    & button {
      & span {
        color: ${colors.primary};
      }
    }
  }
`;

export default MainButtonItem;
