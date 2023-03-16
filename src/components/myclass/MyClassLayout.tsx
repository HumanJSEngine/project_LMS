import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { font } from "../../styles/fonts";
import colors from "../../styles/palette";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowBarLeft } from "react-icons/bs";
import { useState } from "react";

interface MyClassLayoutProps {
  children: React.ReactNode;
}

const MyClassLayout = ({ children }: MyClassLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <Box isOpen={isMenuOpen}>
      <Menu isOpen={isMenuOpen}>
        <ul className="myclass-list">
          <li className="myclass-item">
            <Link to={`/myclass`}>
              <IoIosArrowBack />
              JAVA
            </Link>
          </li>
          <li className="myclass-item">
            <Link to={`/myclass/:classid/student`}>수강생 관리</Link>
          </li>
          <li className="myclass-item">
            <Link to={`/myclass/:classid/grade/attend`}>성적 관리</Link>
          </li>
        </ul>
        <button className="menu-close" onClick={toggleMenu}>
          <BsArrowBarLeft size={24} />
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
  & .myclass-list {
    flex-grow: 1;
    background: ${colors.white};
    & .myclass-item {
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
        color: ${colors.gray900};
      }
      &:hover {
        background: ${colors.gray200};
      }
      &.active {
        color: ${colors.primary};
      }
    }
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
    & svg {
      transform: ${({ isOpen }) => (isOpen ? "0" : "rotate(180deg)")};
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export default MyClassLayout;
