import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const AttendButtons = ({ total }) => {
  const [change, setChange] = useState(false);

  useEffect(() => {
    setChange(total);
  }, [total]);

  return (
    <BtnWrapper>
      <AttendBtn colors={change} onClick={() => setChange(prev => !prev)}>
        출석
      </AttendBtn>
      <AttendBtn colors={!change} onClick={() => setChange(prev => !prev)}>
        결석
      </AttendBtn>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  display: flex;
  gap: 0 10px;
`;

const AttendBtn = styled.button`
  color: ${props => (props.colors ? "white" : "black")};
  padding: 10px;
  font-size: 20px;
  border: ${props => (props.colors ? "2px solid green" : "white")};
  background: ${props => (props.colors ? "#5ee45e" : "white")};
  white-space: nowrap;
  border-radius: 10px;
`;
export default AttendButtons;
