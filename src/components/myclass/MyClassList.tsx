import styled from "@emotion/styled";
import { type PathData } from "../../routes";
import MyClassItem from "./MyClassItem";

const MyClassList = () => {
  const myclasslist: PathData[] = [{ name: "자바", path: "java" }];
  return (
    <Box>
      {myclasslist.map((myclass, index) => (
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
