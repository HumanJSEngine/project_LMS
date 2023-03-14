import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
type UserType = "student" | "professor" | "staff";
interface IRoute {
  id: string;
  name: string;
  path: string;
  element: React.ReactNode;
  withAuth: boolean;
  AuthType?: UserType;
}
export const routerData: IRoute[] = [
  {
    id: "route1",
    name: "로그인",
    path: "/",
    element: <Auth />,
    withAuth: false,
  },
  {
    id: "route2",
    name: "내 강의 시간표",
    path: "/mychedule",
    element: <Auth />,
    withAuth: true,
    AuthType: "professor",
  },
  {
    id: "route3",
    name: "수강생 관리",
    path: "/:classid/student",
    element: <Auth />,
    withAuth: true,
    AuthType: "professor",
  },
  {
    id: "route4",
    name: "성적 관리 - 출결",
    path: "/:classid/grade/attend",
    element: <Auth />,
    withAuth: true,
    AuthType: "professor",
  },
  {
    id: "route5",
    name: "성적 관리 - 중간시험",
    path: "/:classid/grade/midterm",
    element: <Auth />,
    withAuth: true,
    AuthType: "professor",
  },
  {
    id: "route6",
    name: "성적 관리 - 기말시험",
    path: "/:classid/grade/finterm",
    element: <Auth />,
    withAuth: true,
    AuthType: "professor",
  },
  {
    id: "route7",
    name: "성적 관리 - 과제",
    path: "/:classid/grade/report",
    element: <Auth />,
    withAuth: true,
    AuthType: "professor",
  },
  {
    id: "route8",
    name: "학생, 교수 관리",
    path: "/management",
    element: <Auth />,
    withAuth: true,
    AuthType: "staff",
  },
  {
    id: "route9",
    name: "전체 계정 조회",
    path: "/account",
    element: <Auth />,
    withAuth: true,
    AuthType: "staff",
  },
  {
    id: "route10",
    name: "강의 개설",
    path: "/makeclass",
    element: <Auth />,
    withAuth: true,
    AuthType: "staff",
  },
  {
    id: "route11",
    name: "강의 수정",
    path: "/editclass",
    element: <Auth />,
    withAuth: true,
    AuthType: "staff",
  },
];

export const routers = createBrowserRouter(
  routerData.map(router => {
    return {
      path: router.path,
      element: router.element,
    };
  }),
);
