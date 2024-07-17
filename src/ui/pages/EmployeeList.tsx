import { Link } from "react-router-dom"
import { EmployeesTable } from "../components/tables/EmployeesTable"

export const EmployeeList = () => {
    return <>
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