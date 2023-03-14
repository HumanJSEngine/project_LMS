import { authClient } from "./authClient";
const user = {
  login: async (account: string, password: string) => {
    try {
      const res = await authClient.get("");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default user;
