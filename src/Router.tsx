import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "./ui/pages/CreateEmployee";
import { EmployeeList } from "./ui/pages/EmployeeList";
import { Header } from "./ui/components/layout/Header";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>Oups, quelque chose ne s'est pas passé comme prévu</p>,
    children: [
      {
        path: "",
        element: <CreateEmployee />,
      },
      {
        path: "employee-list",
        element: <EmployeeList />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
