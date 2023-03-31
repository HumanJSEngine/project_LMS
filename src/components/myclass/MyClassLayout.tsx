import styled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";
import { font } from "../../styles/fonts";
import colors from "../../styles/palette";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowBarLeft } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import React, { useState } from "react";
import getClassParams from "../../hooks/getClassParams";

interface MyClassLayoutProps {
  children: React.ReactNode;
}

const MyClassLayout = ({ children }: MyClassLayoutProps) => {
  const pathname = location.pathname;
  const { classname, classInfo } = getClassParams();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <Box isOpen={isMenuOpen}>
      <Menu isOpen={isMenuOpen}>
        {classInfo != null && (
          <ul className="myclass-list">
            <MyClassMenuItem>
              <Link to={`/myclass`}>
                <IoIosArrowBack />
                {classname}
              </Link>
            </MyClassMenuItem>
            <MyClassMenuItem
              isActive={`/myclass/${classInfo}/student` === pathname}
            >
              <Link to={`/myclass/${classInfo}/student`}>수강생 관리</Link>
            </MyClassMenuItem>
            <MyClassMenuItem
              isActive={`/myclass/${classInfo}/grade/attend` === pathname}
            >
              <Link to={`/myclass/${classInfo}/grade/attend`}>성적 관리</Link>
            </MyClassMenuItem>
          </ul>
        )}
        <button className="menu-close" onClick={toggleMenu}>
          {isMenuOpen ? <BsArrowBarLeft size={24} /> : <GrClose size={24} />}
        </button>
      </Menu>
      <div className="content-box">{children}</div>
    </Box>
  );
};

const Box = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  height: 100%;
  & .content-box {
    width: 100%;
    padding: 20px 32px 20px ${({ isOpen }) => (isOpen ? "272px" : "32px")};
    overflow-y: auto;
    transition: padding 0.3s ease-in-out;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "0" : "-240px")};
  top: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  border-right: 1px solid ${colors.gray300};
  transition: left 0.3s ease-in-out;
  }
  & .menu-close {
    position: absolute;
    right: -32px;
    bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid ${colors.gray300};
    border-radius: 0 8px 8px 0;
    background: ${colors.white};
  }
`;

const MyClassMenuItem = styled.li<{ isActive?: boolean }>`
  width: 100%;
  height: 52px;
  background: ${colors.white};
  transition: background 0.2s ease-in-out;
  & a {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font: ${font.style15Medium};
    color: ${({ isActive }) =>
      isActive === true ? colors.primary : colors.gray900};
  }
  &:hover {
    background: ${colors.gray200};
  }
`;

export default MyClassLayout;
