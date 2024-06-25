import { Link } from "react-router-dom";
import { InputElement } from "../components/InputElement";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { stateOptions } from "../constants/stateOptions";
import { departmentOptions } from "../constants/departmentOptions";

export const CreateEmployee = () => {
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const saveEmployee = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('ça sauve');
        dialogRef.current?.showModal();
    }

    return <>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to="employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form onSubmit={saveEmployee} id="create-employee">
                <InputElement id='first-name' type='text' content='First Name' />

                <InputElement id='last-name' type='text' content='Last Name' />

                <label htmlFor='date-of-birth'>Date of Birth</label>
                <DatePicker
                    id='date-of-birth'
                    selected={dateOfBirth}
                    onChange={(date) => setDateOfBirth(date)}
                    dateFormat='dd/MM/yyyy'
                />

                <label htmlFor='start-date'>Start date</label>
                <DatePicker
                    id='start-date'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat='dd/MM/yyyy'
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <InputElement id='street' type='text' content='Street' />

                    <InputElement id='city' type='text' content='City' />

                    <label htmlFor="state">State</label>
                    <Select id="state" options={stateOptions} />

                    <InputElement id='zip-code' type='number' content='Zip Code' />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select id="department" options={departmentOptions} />

                <button type="submit">Save</button>
            </form>
        </div>

        <dialog className="modal" ref={dialogRef}>
            <div id="confirmation" className="modal__message">Employee Created!</div>
            <button className="modal__close" onClick={() => dialogRef.current?.close()}>X</button>
        </dialog>
    </>
}