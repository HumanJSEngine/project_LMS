export type UserType = "student" | "professor" | "staff" | "all";

export interface IUser {
  seq: number | null;
  id: string | null;
  name: string | null;
  type: UserType | null;
}
