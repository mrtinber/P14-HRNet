import { Link } from "react-router-dom"
import { EmployeesTable } from "../components/tables/EmployeesTable"
import { Header } from "../components/ui/Header"

export const EmployeeList = () => {
    return <>
        <Header />
        <div className="content">
            <div id="employee-div" className="container">
                <div className="container__header">
                    <h2>Current Employees</h2>
                    <Link to="/">Home</Link>
                </div>
                <EmployeesTable />
            </div>
        </div>
    </>
}