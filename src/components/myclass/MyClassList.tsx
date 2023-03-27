import styled from "@emotion/styled";
import MyClassItem from "./MyClassItem";
import { useQuery } from "@tanstack/react-query";
import { getMyClass } from "../../api/classApi";
import { useState } from "react";
import { type IClass } from "../../types/Class";

const MyClassList = () => {
  const [proNum] = useState<number>(6);
  const { data, isLoading, error } = useQuery(
    ["studentList", proNum],
    async (): Promise<IClass[]> => {
      return await getMyClass(proNum);
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
