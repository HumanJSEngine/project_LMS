import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import MyClass from "./pages/MyClass";
import Attend from "./pages/Attend";
import Auth from "./pages/Auth";
import Finterm from "./pages/Finterm";
import Midterm from "./pages/Midterm";
import Report from "./pages/Report";
import MySchedule from "./pages/MySchedule";
import LastResult from "./pages/LastResult";
import Student from "./pages/Student";
import MyClassLayout from "./components/myclass/MyClassLayout";
import { type UserType } from "./types/User";
import React from "react";
import EditClass from "./pages/EditClass";
import MakeClass from "./pages/MakeClass";
type MenuDepthType = "main";

interface IRoute {
  name: string;
  path: string;
  element: React.ReactNode;
  withAuth: boolean;
  menuDepth?: MenuDepthType;
  authType?: UserType;
}
export interface PathData {
  name: string;
  path: string;
}
export const routerData: IRoute[] = [
  {
    name: "로그인",
    path: "/",
    element: <Auth />,
    withAuth: false,
  },
  {
    name: "내 강의 시간표",
    path: "/myschedule",
    element: <MySchedule />,
    withAuth: true,
    menuDepth: "main",
    authType: "professor",
  },
  {
    name: "내 강의",
    path: "/myclass",
    element: <MyClass />,
    withAuth: true,
    menuDepth: "main",
    authType: "professor",
  },
  {
    name: "수강생 관리",
    path: "/myclass/:classInfo/student",
    element: (
      <MyClassLayout>
        <Student />
      </MyClassLayout>
    ),
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 출결",
    path: "/myclass/:classInfo/grade/attend",
    element: (
      <MyClassLayout>
        <Attend />
      </MyClassLayout>
    ),
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 중간시험",
    path: "/myclass/:classInfo/grade/midterm",
    element: (
      <MyClassLayout>
        <Midterm />
      </MyClassLayout>
    ),
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 기말시험",
    path: "/myclass/:classInfo/grade/finterm",
    element: (
      <MyClassLayout>
        <Finterm />
      </MyClassLayout>
    ),
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 과제",
    path: "/myclass/:classInfo/grade/report",
    element: (
      <MyClassLayout>
        <Report />
      </MyClassLayout>
    ),
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 최종성적",
    path: "/myclass/:classInfo/grade/total",
    element: (
      <MyClassLayout>
        <LastResult />
      </MyClassLayout>
    ),
    withAuth: true,
    authType: "professor",
  },
  // {
  //   name: "학생, 교수 관리",
  //   path: "/management",
  //   element: <Auth />,
  //   withAuth: true,
  //   menuDepth: "main",
  //   authType: "staff",
  // },
  // {
  //   name: "전체 계정 조회",
  //   path: "/account",
  //   element: <Auth />,
  //   withAuth: true,
  //   menuDepth: "main",
  //   authType: "staff",
  // },
  {
    name: "강의 개설",
    path: "/makeclass",
    element: <MakeClass />,
    withAuth: true,
    menuDepth: "main",
    authType: "staff",
  },
  {
    name: "강의 수정",
    path: "/editclass",
    element: <EditClass />,
    withAuth: true,
    menuDepth: "main",
    authType: "staff",
  },
  {
    name: "404",
    path: "*",
    element: <Auth />,
    withAuth: false,
  },
];

export const routers = createBrowserRouter(
  routerData.map(router => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <Layout authType={router.authType}>{router.element}</Layout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  }),
);
