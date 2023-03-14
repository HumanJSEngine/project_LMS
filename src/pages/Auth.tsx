import React from "react";
import styled from "@emotion/styled";
import CustomToggleButton from "../components/common/CustomToggleButton";
import CustomToggleButtonGroup from "../components/common/CustomToggleButtonGroup";
import CustomTextField from "../components/common/CustomTextField";
import CustomButton from "../components/common/CustomButton";
import colors from "../styles/palette";

const Auth = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  };

  return (
    <Box>
      <AuthForm onSubmit={onSubmitHandler}>
        <CustomToggleButtonGroup
          color="primary"
          // value={alignment}
          exclusive
          // onChange={handleChange}
          aria-label="user-type"
        >
          <CustomToggleButton color="primary" value="web" selected={false}>
            학생
          </CustomToggleButton>
          <CustomToggleButton color="primary" value="android" selected={false}>
            교수
          </CustomToggleButton>
          <CustomToggleButton color="primary" value="ios" selected={true}>
            교직원
          </CustomToggleButton>
        </CustomToggleButtonGroup>
        <AuthTextArea>
          <AuthError>
            <p>에러 발생 텍스트</p>
          </AuthError>
          <CustomTextField
            type="text"
            label="계정"
            id="account"
            name="account"
          />
          <CustomTextField
            type="password"
            label="암호"
            id="password"
            name="password"
          />
        </AuthTextArea>
        <CustomButton type="submit" variant="contained" color="primary">
          로그인
        </CustomButton>
      </AuthForm>
    </Box>
  );
};

const Box = styled.div`
  margin: 0 auto;
  margin-top: 200px;
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

const AuthError = styled.div`
  & p {
    font: 15px 500;
    color: ${colors.error};
  }
`;

export default Auth;
