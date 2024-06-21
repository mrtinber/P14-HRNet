import { Link } from "react-router-dom";
import { InputElement } from "../components/InputElement";

export const CreateEmployee = () => {
    const saveEmployee = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('ça sauve');
    }

    return <>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to="employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <InputElement id='first-name' type='text' content='First Name' />

                <InputElement id='last-name' type='text' content='Last Name' />

                <InputElement id='date-of-birth' type='text' content='Date of Birth' />

                <InputElement id='start-date' type='text' content='Start Date' />

                <fieldset className="address">
                    <legend>Address</legend>

                    <InputElement id='street' type='text' content='Street' />

                    <InputElement id='city' type='text' content='City' />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <InputElement id='zip-code' type='number' content='Zip Code' />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

            <button onClick={saveEmployee}>Save</button>
        </div>
        <div id="confirmation" className="modal">Employee Created!</div>
    </>
}