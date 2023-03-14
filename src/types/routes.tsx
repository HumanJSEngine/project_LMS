import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import ManageScore from "../pages/ManageScore";
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
  { id: "route1", name: "Auth", path: "/", element: <Auth />, withAuth: false },
  {
    id: "route2",
    name: "ManageScore",
    path: "/managescore",
    element: <ManageScore />,
    withAuth: true,
    AuthType: "professor",
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
