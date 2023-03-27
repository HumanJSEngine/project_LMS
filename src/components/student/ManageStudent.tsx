import styled from "@emotion/styled";
import colors from "../../styles/palette";
import { IoCloseOutline } from "react-icons/io5";
import CustomButton from "../common/CustomButton";
import { MenuItem, Select, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import {
  type finalScore,
  type IScoreManage,
  type IScoreResponse,
  type IStudent,
} from "../../types/Student";

interface ManageStudentProps {
  closeModal: () => void;
  studentInfo: IStudent | null;
}

const finalScoreList: finalScore[] = [
  "A+",
  "A0",
  "A-",
  "B+",
  "B0",
  "B-",
  "C+",
  "C0",
  "C-",
  "D+",
  "D0",
  "D-",
  "F",
];

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
      attendCountTotal: 20,
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

const ManageStudent = ({ closeModal, studentInfo }: ManageStudentProps) => {
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

  const editScore = (id: number | "final", e?: React.MouseEvent) => {
    e?.preventDefault();
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
    const scoreData = new FormData(e.currentTarget);
    if (scoreList !== null) {
      if (typeof id === "number") {
        const list = scoreList.list.map(item => {
          if (item.scoreCateSeq === id) {
            if ("attendCount" in item) {
              return {
                ...item,
                attendCount: parseInt(scoreData.get("score") as string),
              };
            } else if ("score" in item) {
              return {
                ...item,
                score: parseInt(scoreData.get("score") as string),
              };
            }
          }
          return { ...item };
        });
        setScoreList({
          ...scoreList,
          list,
        });
      } else if (id === "final") {
        setScoreList({
          ...scoreList,
          finalScore: scoreData.get("finalScore") as finalScore,
        });
      }
      editScore(id);
    }
  };
  return (
    <Box>
      <Header>
        <p className="student-name">
          {scoreList != null &&
            studentInfo !== null &&
            `${studentInfo.stuName} (${studentInfo.stuId}/${studentInfo.stuSubject})`}
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
                    type="number"
                    name="score"
                    variant="standard"
                    disabled={!item.editable}
                    defaultValue={item.attendCount}
                    style={{ width: "calc(30% - 25px)" }}
                  />
                  /
                  <TextField
                    type="number"
                    name="score"
                    variant="standard"
                    disabled={true}
                    defaultValue={item.attendCountTotal}
                    style={{ width: "calc(30% - 25px)" }}
                  />
                </>
              ) : (
                <TextField
                  type="number"
                  name="score"
                  variant="standard"
                  disabled={!item.editable}
                  defaultValue={item.score}
                  style={{ width: "60%" }}
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
                  onClick={e => editScore(item.scoreCateSeq, e)}
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
            <Select
              variant="standard"
              name="finalScore"
              disabled={!scoreList.finalScoreEditable}
              defaultValue={scoreList.finalScore}
              style={{ width: "60%" }}
            >
              {finalScoreList.map(finalScore => (
                <MenuItem key={finalScore} value={finalScore}>
                  {finalScore}
                </MenuItem>
              ))}
            </Select>
            {scoreList.finalScoreEditable ? (
              <CustomButton color="primary" variant="contained" type="submit">
                완료
              </CustomButton>
            ) : (
              <CustomButton
                color="primary"
                variant="contained"
                type="button"
                onClick={e => editScore("final", e)}
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
  width: 460px;
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
