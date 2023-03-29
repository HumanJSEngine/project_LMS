export interface ScoreListProps {
  explanation: string;
  lecture: string;
  maxScore: number;
  name: string;
  score: number;
  seq: number;
  student: string;
  totalMaxScore: number;
}

export interface FListsProps {
  grade: string;
  rank: number;
  scoreList: ScoreListProps[];
  studentCode: string;
  studentName: string;
  totalMaxScore: number;
  totalScore: number;
}

