import { useRecoilValue } from "recoil";
import { type IUser } from "../types/User";
import { userAtom } from "../store/user/atom";

const getUserLogin = (): { isLoginned: boolean; userInfo: IUser | null } => {
  const userInfo = useRecoilValue<IUser>(userAtom);
  const isLoginned = userInfo.seq !== null;
  return { isLoginned, userInfo };
};

export default getUserLogin;
