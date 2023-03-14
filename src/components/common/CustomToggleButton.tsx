import styled from "@emotion/styled";
import colors from "../../styles/palette";
import ToggleButton from "@mui/material/ToggleButton";

const CustomToggleButton = styled(ToggleButton)<{ selected: boolean }>`
  width: calc(100% / 3);
  height: 100%;
  /* color: ${({ selected }) => selected && colors.white} !important;
  background: ${({ selected }) =>
    selected ? colors.primary : colors.white} !important; */
`;

export default CustomToggleButton;
