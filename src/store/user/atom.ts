import { atom, type AtomEffect } from "recoil";
import { type IUser } from "../../types/User";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const userAtom = atom<IUser>({
  key: "user",
  default: {
    seq: null,
    id: null,
    name: null,
    type: null,
  },
  effects: [localStorageEffect<IUser>("user")],
});
