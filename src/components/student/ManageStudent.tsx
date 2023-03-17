import styled from "@emotion/styled";
import colors from "../../styles/palette";
import { IoCloseOutline } from "react-icons/io5";
import CustomButton from "../common/CustomButton";
import { TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { type IScoreManage, type IScoreResponse } from "../../types/Student";

interface ManageStudentProps {
  closeModal: () => void;
}

const testdata: IScoreResponse = {
  stuId: "20201025",
  stuName: "김그린",
  stuGrade: 2,
  stuSubject: "컴퓨터공학과",
  list: [
    {
      scoreCateSeq: 1,
      scoreCateName: "출석",
      attendCount: 10,
      attendCountTotal: 10,
    },
    {
      scoreCateSeq: 2,
      scoreCateName: "중간",
      score: 50,
    },
    {
      scoreCateSeq: 3,
      scoreCateName: "기말",
      score: 60,
    },
    {
      scoreCateSeq: 4,
      scoreCateName: "과제",
      score: 50,
    },
  ],
  finalScore: "B0",
};

const ManageStudent = ({ closeModal }: ManageStudentProps) => {
  const [scoreList, setScoreList] = useState<IScoreManage | null>(null);
  const getScoreData = useCallback(() => {
    const res = testdata;
    const editableList = res.list.map(score => {
      return {
        ...score,
        editable: false,
      };
    });
    const scoreData: IScoreManage = {
      ...res,
      list: editableList,
      finalScoreEditable: false,
    };
    setScoreList(scoreData);
  }, [testdata]);
  useEffect(() => {
    getScoreData();
  }, [testdata]);

  const editScore = (id: number | "final") => {
    if (scoreList != null) {
      if (id === "final") {
        const finalScoreEditable = !scoreList.finalScoreEditable;
        setScoreList({ ...scoreList, finalScoreEditable });
      } else {
        const index = scoreList?.list.findIndex(
          item => item.scoreCateSeq === id,
        );
        if (index !== -1) {
          const list = scoreList.list.map(item => {
            if (item.scoreCateSeq === id)
              return { ...item, editable: !item.editable };
            return { ...item };
          });
          setScoreList({
            ...scoreList,
            list,
          });
        }
      }
    }
  };
  const confirmScore = (
    e: React.FormEvent<HTMLFormElement>,
    id: number | "final",
  ) => {
    e.preventDefault();
  };
  return (
    <Box>
      <Header>
        <p className="student-name">
          {scoreList != null &&
            `${scoreList.stuName}(${scoreList.stuId}/${scoreList.stuSubject})`}
        </p>
        <button className="close-button" onClick={closeModal}>
          <IoCloseOutline size={32} />
        </button>
      </Header>
      <div className="contents-box">
        {scoreList?.list.map(item => {
          return (
            <form
              className="info-box"
              key={item.scoreCateSeq}
              onSubmit={e => confirmScore(e, item.scoreCateSeq)}
            >
              <p className="info-name">{item.scoreCateName}</p>
              {"attendCount" in item ? (
                <>
                  <TextField
                    variant="standard"
                    style={{ width: "50%" }}
                    disabled={!item.editable}
                    defaultValue={item.attendCount}
                  />
                </>
              ) : (
                <TextField
                  variant="standard"
                  disabled={!item.editable}
                  defaultValue={item.score}
                />
              )}
              {item.editable ? (
                <CustomButton color="primary" variant="contained" type="submit">
                  완료
                </CustomButton>
              ) : (
                <CustomButton
                  color="primary"
                  variant="contained"
                  type="button"
                  onClick={() => editScore(item.scoreCateSeq)}
                >
                  수정
                </CustomButton>
              )}
            </form>
          );
        })}
        {scoreList != null && (
          <form className="info-box" onSubmit={e => confirmScore(e, "final")}>
            <p className="info-name">최종성적</p>
            <TextField
              variant="standard"
              disabled={!scoreList.finalScoreEditable}
              defaultValue={scoreList.finalScore}
            />
            {scoreList.finalScoreEditable ? (
              <CustomButton color="primary" variant="contained" type="submit">
                완료
              </CustomButton>
            ) : (
              <CustomButton
                color="primary"
                variant="contained"
                type="button"
                onClick={() => editScore("final")}
              >
                수정
              </CustomButton>
            )}
          </form>
        )}
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
        width: 30%;
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
