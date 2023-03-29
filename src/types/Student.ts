export interface IStudent {
  seq: number;
  stuId: string;
  stuName: string;
  stuGrade: number;
  stuSubject: string;
}

export type finalScore =
  | "A+"
  | "A0"
  | "A-"
  | "B+"
  | "B0"
  | "B-"
  | "C+"
  | "C0"
  | "C-"
  | "D+"
  | "D0"
  | "D-"
  | "F"
  | "미평가";

interface IScoreItem {
  scoreCateSeq: number;
  scoreCateName: string;
  score: number;
  maxScore: number;
}

interface IScoreItemAttend {
  attendCount: number;
  attendCountTotal: number;
}

interface IScoreItemScore extends IScoreItem {
  score: number;
}

interface IScoreManageScore extends IScoreItemScore {
  editable: boolean;
}

export interface IScoreManage {
  stuId: string;
  stuName: string;
  stuGrade: number;
  stuSubject: string;
  attendList: IScoreItemAttend[];
  scoreList: IScoreManageScore[];
  finalScore: finalScore;
}
