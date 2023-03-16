import styled from "@emotion/styled";
import colors from "../styles/palette";
import { font } from "../styles/fonts";
import MyClassList from "../components/myclass/MyClassList";

const MyClass = () => {
  return (
    <Box>
      <h2>내 강의 목록</h2>
      <MyClassList />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  & h2 {
    font: ${font.style20Medium};
    color: ${colors.gray900};
  }
`;

export default MyClass;
