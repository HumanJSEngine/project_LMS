import React, { useEffect } from "react";
import styled from "@emotion/styled";
import CustomTextField from "../components/common/CustomTextField";
import CustomButton from "../components/common/CustomButton";
import { userLogin } from "../api/userApi";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { type IUser } from "../types/User";
import { userAtom } from "../store/user/atom";
import getUserLogin from "../utils/getUserLogin";
import { useNavigate } from "react-router-dom";
import logo from "../../src/logo.png";

const Auth = () => {
  const { isLoginned, userInfo } = getUserLogin();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoginned) {
      if (userInfo?.type === "professor") {
        navigate("/myschedule");
      } else if (userInfo?.type === "staff") {
        navigate("/management");
      } else if (userInfo?.type === "student") {
        navigate("/");
      }
    }
  }, [userInfo]);
  const setUserAtom = useSetRecoilState<IUser>(userAtom);
  const { isLoading, mutate } = useMutation(userLogin, {
    onSuccess: res => {
      const { status } = res;
      if (status) {
        const { seq, id, name, type } = res;
        setUserAtom({
          seq,
          id,
          name,
          type,
        });
        if (res.type === "professor") {
          navigate("/myschedule");
        } else if (res.type === "staff") {
          navigate("/management");
        } else if (res.type === "student") {
          navigate("/");
        }
      } else if (!status) {
        const { message } = res;
        return alert(message);
      } else {
        return alert("알수 없는 에러 발생. 다시 시도해주세요.");
      }
    },
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginForm = new FormData(e.currentTarget);
    const loginData = {
      id: loginForm.get("account") as string,
      pwd: loginForm.get("password") as string,
    };
    if (loginData.id === "" || loginData.pwd === "") {
      return alert("아이디와 비밀번호를 입력해주세요.");
    }
    mutate(loginData);
  };

  return (
    <Box>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "300px",
          height: "200px",
          paddingBottom: "50px",
        }}
      />
      <AuthForm onSubmit={onSubmitHandler}>
        <AuthTextArea>
          <CustomTextField
            type="text"
            label="계정"
            id="account"
            name="account"
            disabled={isLoading}
          />
          <CustomTextField
            type="password"
            label="암호"
            id="password"
            name="password"
            disabled={isLoading}
          />
        </AuthTextArea>
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          로그인
        </CustomButton>
      </AuthForm>
    </Box>
  );
};

const Box = styled.div`
  margin: 200px auto 0;
  width: 296px;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const AuthTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export default Auth;
