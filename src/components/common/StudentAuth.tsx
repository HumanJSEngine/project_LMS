import React from "react";
import getUserLogin from "../../utils/getUserLogin";
import useRoute from "../../utils/useRoute";

const StudentAuth = ({ children }: { children: React.ReactNode }) => {
  const { userInfo } = getUserLogin();
  const { route } = useRoute();
  if (userInfo?.type !== "student") {
    alert("잘못된 접근입니다.");
    route("/");
  }
  return <>{children}</>;
};

export default StudentAuth;
