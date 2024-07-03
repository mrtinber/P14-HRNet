import { Link } from "react-router-dom"
import { EmployeesTable } from "../components/tables/EmployeesTable"

export const EmployeeList = () => {
    return <>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div id="employee-div" className="container">
            <div className="container__header">
                <h2>Current Employees</h2>
                <Link to="/">Home</Link>
            </div>
            <EmployeesTable />
        </div>
    </>
}