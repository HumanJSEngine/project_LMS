import styled from "@emotion/styled";
import { type PathData } from "../../routes";
import MyClassItem from "./MyClassItem";

const MyClassList = () => {
  const myclasslist: PathData[] = [
    { name: "자바", path: "java" },
    { name: "C언어", path: "languagec" },
    { name: "자료 구조", path: "datastructure" },
    { name: "알고리즘", path: "algorithm" },
  ];
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
