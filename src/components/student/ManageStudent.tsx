import styled from "@emotion/styled";
import colors from "../../styles/palette";
import { IoCloseOutline } from "react-icons/io5";
import CustomButton from "../common/CustomButton";
import { TextField } from "@mui/material";
import { useState } from "react";

interface ManageStudentProps {
  closeModal: () => void;
}

const testdata = [
  {
    id: 1,
    name: "출결",
    currentScore: 50,
    editable: false,
  },
  {
    id: 2,
    name: "중간",
    currentScore: 50,
    editable: false,
  },
  {
    id: 3,
    name: "기말",
    currentScore: 50,
    editable: false,
  },
  {
    id: 4,
    name: "과제",
    currentScore: 50,
    editable: false,
  },
  {
    id: 5,
    name: "과제2",
    currentScore: 50,
    editable: false,
  },
  {
    id: 6,
    name: "과제3",
    currentScore: 50,
    editable: false,
  },
  {
    id: 7,
    name: "최종",
    currentScore: "A+",
    editable: false,
  },
];

const ManageStudent = ({ closeModal }: ManageStudentProps) => {
  const [scoreList, setScoreList] = useState(testdata);
  const editScore = (id: number) => {
    const update = scoreList.map(item => {
      if (item.id === id) {
        return { ...item, editable: true };
      }
      return item;
    });
    setScoreList(update);
  };
  const confirmScore = (id: number) => {
    const update = scoreList.map(item => {
      if (item.id === id) {
        return { ...item, editable: true };
      }
      return item;
    });
    setScoreList(update);
  };
  return (
    <Box>
      <Header>
        <p className="student-name">정대만(2021156721/스포츠체육학과)</p>
        <button className="close-button" onClick={closeModal}>
          <IoCloseOutline size={32} />
        </button>
      </Header>
      <div className="contents-box">
        {scoreList.map(item => {
          return (
            <form className="info-box" key={item.id}>
              <p className="info-name">{item.name}</p>
              <TextField
                variant="standard"
                disabled={!item.editable}
                value={item.currentScore}
              />
              <CustomButton
                color="primary"
                variant="contained"
                // onClick={() => !item.editable && editScore(item.id)}
              >
                {item.editable ? "입력" : "수정"}
              </CustomButton>
            </form>
          );
        })}
      </div>
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: auto;
  height: auto;
  background: ${colors.white};
  transform: translate(-50%, -50%);
  & .contents-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;
    padding: 20px;
    & .info-box {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 100%;
      & .info-name {
        width: 15%;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 0 4px;
  border-bottom: 1px solid ${colors.gray300};
  & .student-name {
    padding: 0 16px;
  }
  & .close-button {
    width: 48px;
    height: 48px;
    border: 0;
    background: transparent;
  }
`;

export default ManageStudent;
