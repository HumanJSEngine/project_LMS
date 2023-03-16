import { createTheme } from "@mui/material";
import colors from "./palette";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.white,
    },
    error: {
      main: colors.error,
    },
    success: {
      main: colors.success,
    },
    info: {
      main: colors.info,
    },
  },
  typography: {
    fontFamily: ["Noto Sans KR"].join(","),
  },
});

export default theme;
