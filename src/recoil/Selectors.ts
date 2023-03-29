import { attendAllState } from "./Atoms";
import { selector } from "recoil";

export const attendAllSelector = selector({
  key: "attendAllSelector",
  get: ({ get }) => {
    const attendAllList = get(attendAllState);
    return attendAllList.filter(item => item.attend == true);
  },
});
