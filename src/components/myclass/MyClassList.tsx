import styled from "@emotion/styled";
import MyClassItem from "./MyClassItem";
import { useQuery } from "@tanstack/react-query";
import { getMyClass } from "../../api/classApi";
import { type IClass } from "../../types/Class";
import { useRecoilValue } from "recoil";
import { type IUser } from "../../types/User";
import { userAtom } from "../../store/user/atom";

const MyClassList = () => {
  const { seq } = useRecoilValue<IUser>(userAtom);
  const { data, isLoading, error } = useQuery(
    ["studentList", seq],
    async (): Promise<IClass[] | null> => {
      if (seq != null) {
        return await getMyClass(seq);
      }
      return null;
    },
  );
  return (
    <Box>
      {!isLoading &&
        error === null &&
        data?.map((myclass, index) => (
          <MyClassItem key={index} myclass={myclass} />
        ))}
    </Box>
  );
};

const Box = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default MyClassList;
