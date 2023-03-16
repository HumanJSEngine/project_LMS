import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import Auth from "./pages/Auth";
import MyClass from "./pages/MyClass";
import Attend from "./pages/Attend";
import MySchedule from "./pages/MySchedule";
import Finterm from "./pages/Finterm";
import Midterm from "./pages/Midterm";
import Report from "./pages/Report";
export type UserType = "student" | "professor" | "staff";
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
    path: "/mychedule",
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
    path: "/myclass/:classid/student",
    element: <Auth />,
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 출결",
    path: "/myclass/:classid/grade/attend",
    element: <Attend />,
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 중간시험",
    path: "/myclass/:classid/grade/midterm",
    element: <Midterm />,
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 기말시험",
    path: "/myclass/:classid/grade/finterm",
    element: <Finterm />,
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 과제",
    path: "/myclass/:classid/grade/report",
    element: <Auth />,
    withAuth: true,
    authType: "professor",
  },
  {
    name: "성적 관리 - 최종성적",
    path: "/myclass/:classid/grade/total",
    element: <Report />,
    withAuth: true,
    authType: "professor",
  },
  {
    name: "학생, 교수 관리",
    path: "/management",
    element: <Auth />,
    withAuth: true,
    menuDepth: "main",
    authType: "staff",
  },
  {
    name: "전체 계정 조회",
    path: "/account",
    element: <Auth />,
    withAuth: true,
    menuDepth: "main",
    authType: "staff",
  },
  {
    name: "강의 개설",
    path: "/makeclass",
    element: <Auth />,
    withAuth: true,
    menuDepth: "main",
    authType: "staff",
  },
  {
    name: "강의 수정",
    path: "/editclass",
    element: <Auth />,
    withAuth: true,
    menuDepth: "main",
    authType: "staff",
  },
];

export const routers = createBrowserRouter(
  routerData.map(router => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <Layout>{router.element}</Layout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  }),
);
