import styled from "@emotion/styled";
import colors from "../../styles/palette";
import { IoCloseOutline } from "react-icons/io5";
import CustomButton from "../common/CustomButton";
import { TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { type IScoreManage, type IStudent } from "../../types/Student";
import { getStudentGrade, setStudentGrade } from "../../api/classApi";
import getClassParams from "../../hooks/getClassParams";

interface ManageStudentProps {
  closeModal: () => void;
  studentInfo: IStudent | null;
}

const ManageStudent = ({ closeModal, studentInfo }: ManageStudentProps) => {
  const [scoreData, setScoreList] = useState<IScoreManage | null>(null);
  const { classid } = getClassParams();
  const getScoreData = useCallback(async () => {
    try {
      if (classid != null && studentInfo != null) {
        const res = await getStudentGrade(parseInt(classid), studentInfo?.seq);
        const attendList = res?.lectureStudentAttendVO.map(attend => {
          return {
            ...attend,
            editable: false,
          };
        });
        const scoreList = res?.lectureStudentCateListScoreVO.map(score => {
          return {
            ...score,
            editable: false,
          };
        });
        const scoreData: IScoreManage = {
          stuId: res.stuId,
          stuName: res.stuName,
          stuGrade: res.stuGrade,
          stuSubject: res.stuSubject,
          attendList,
          scoreList,
          finalScore: res.finalScore,
        };
        setScoreList(scoreData);
      }
    } catch (err) {
      console.log(err);
    }
  }, [studentInfo]);

  useEffect(() => {
    void getScoreData();
  }, [classid, studentInfo]);

  const editScore = (id: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    if (scoreData != null) {
      const index = scoreData?.scoreList.findIndex(
        item => item.scoreCateSeq === id,
      );
      if (index !== -1) {
        const list = scoreData.scoreList.map(item => {
          if (item.scoreCateSeq === id)
            return { ...item, editable: !item.editable };
          return { ...item };
        });
        setScoreList({
          ...scoreData,
          scoreList: list,
        });
      }
    }
  };
  const confirmScore = async (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
  ) => {
    e.preventDefault();
    const scoreForm = new FormData(e.currentTarget);
    if (scoreData !== null) {
      const index = scoreData?.scoreList.findIndex(
        item => item.scoreCateSeq === id,
      );
      const scoreValue = parseInt(scoreForm.get("score") as string);
      if (scoreValue > scoreData?.scoreList[index].maxScore) {
        return alert(
          `${scoreData?.scoreList[index].scoreCateName} 점수는 ${scoreData?.scoreList[index].maxScore}이하여야합니다.`,
        );
      }
      try {
        if (classid != null && studentInfo != null) {
          const res = await setStudentGrade(
            parseInt(classid),
            studentInfo?.seq,
            id,
            scoreValue,
          );
          const list = scoreData.scoreList.map(item => {
            return {
              ...item,
              score: scoreValue,
            };
          });
          setScoreList({
            ...scoreData,
            scoreList: list,
          });
          editScore(id);
          return alert(res.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Box>
      <Header>
        <p className="student-name">
          {scoreData != null &&
            studentInfo !== null &&
            `${studentInfo.stuName} (${studentInfo.stuId}/${studentInfo.stuSubject})`}
        </p>
        <button className="close-button" onClick={closeModal}>
          <IoCloseOutline size={32} />
        </button>
      </Header>
      <div className="contents-box">
        {scoreData?.attendList.map((attend, index) => {
          return (
            <div className="info-box" key={index}>
              <p className="info-name">출석 정보</p>
              <p className="info-text">
                현재 출석일 {attend.attendCount}일 / 총 출석일
                {attend.attendCountTotal}일
              </p>
            </div>
          );
        })}
        {scoreData?.scoreList.map((item, index) => {
          return (
            <form
              className="info-box"
              key={item.scoreCateSeq !== 0 ? item.scoreCateSeq : index}
              onSubmit={async e => await confirmScore(e, item.scoreCateSeq)}
            >
              <p className="info-name">{item.scoreCateName}</p>
              <TextField
                type="number"
                name="score"
                variant="standard"
                disabled={!item.editable}
                defaultValue={item.score}
                style={{ width: "60%" }}
              />
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
        {scoreData != null && (
          <div className="info-box">
            <p className="info-name">최종 성적</p>
            <p className="info-text">{scoreData.finalScore}</p>
          </div>
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
      & .info-text {
        width: 85%;
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
