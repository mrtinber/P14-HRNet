import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEmployee } from "../pages/CreateEmployee";
import { EmployeeList } from "../pages/EmployeeList";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <p>Oups, quelque chose ne s'est pas passé comme prévu</p>,
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