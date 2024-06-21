import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "../pages/CreateEmployee";
import { EmployeeList } from "../pages/EmployeeList";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <p>Oups, ça marche pas</p>,
        children: [
            {
                path: '',
                element: <CreateEmployee />
            },
            {
                path: 'employee-list',
                element: <EmployeeList />
            },
        ]
    }
])

export function Router() {
    return <RouterProvider router={router} />
}