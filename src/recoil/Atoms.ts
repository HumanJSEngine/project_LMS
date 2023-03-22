import { atom, selector } from "recoil";

export const attendAllState = atom({
  key: "attendAllState",
  default: [],
});



export const attendAllStateFilter = atom({
  key: "attendAllStateFilter",
  default: 'Show All',
});
