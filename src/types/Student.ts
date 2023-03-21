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
  | "F";

export interface IScoreResponse {
  stuId: string;
  stuName: string;
  stuGrade: number;
  stuSubject: string;
  list: Array<IScoreItemAttend | IScoreItemScore>;
  finalScore: finalScore;
}

interface IScoreItem {
  scoreCateSeq: number;
  scoreCateName: string;
}

interface IScoreItemAttend extends IScoreItem {
  attendCount: number;
  attendCountTotal: number;
}

interface IScoreItemScore extends IScoreItem {
  score: number;
}

interface ISCoreManageAttend extends IScoreItemAttend {
  editable: boolean;
}

interface ISCoreManageScore extends IScoreItemScore {
  editable: boolean;
}

export interface IScoreManage extends IScoreResponse {
  list: Array<ISCoreManageAttend | ISCoreManageScore>;
  finalScoreEditable: boolean;
}
