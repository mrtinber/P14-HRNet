import { Link } from "react-router-dom";
import { InputElement } from "../components/InputElement";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { SingleValue } from 'react-select';
import { stateOptions } from "../constants/stateOptions";
import { departmentOptions } from "../constants/departmentOptions";
import { Employee } from "../inmemory/EmployeeInitialList";

export const CreateEmployee = () => {
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [newEmployee, setNewEmployee] = useState<Employee>({ firstName: '', lastName: '', dateOfBirth: null, startDate: null, street: '', city: '', state: '', zipCode: 0, department: '' })
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [error, setError] = useState('')


    const validateForm = (): boolean => {
        for (const [_, value] of Object.entries(newEmployee)) {
            if (value === '' || value === null || value === 0) {
                return false;
            }
        }
        return true;
    };

    const saveEmployee = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('ça sauve');

        if (!validateForm()) {
            setError('Veuillez remplir tous les champs')
            console.error('Veuillez remplir tous les champs')
            return;
        }

        const employees = JSON.parse(localStorage.getItem('employees') ?? '[]');
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        setError('');
        dialogRef.current?.showModal();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewEmployee(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSelectChange = (newValue: SingleValue<{ label: string; value: string }>, field: string) => {
        if (newValue) {
            setNewEmployee(prevValues => ({
                ...prevValues,
                [field]: newValue.value
            }));
        }
    };

    const handleDateOfBirthChange = (date: Date | null) => {
        setDateOfBirth(date);
        setNewEmployee(prevValues => ({
            ...prevValues,
            dateOfBirth: date
        }));
    };

    const handleDateOfStart = (date: Date | null) => {
        setStartDate(date);
        setNewEmployee(prevValues => ({
            ...prevValues,
            startDate: date
        }));
    };

    return <>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to="employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form onSubmit={saveEmployee} id="create-employee">
                <InputElement id='first-name' type='text' name='firstName' content='First Name' onChange={handleChange} />

                <InputElement id='last-name' type='text' name='lastName' content='Last Name' onChange={handleChange} />

                <label htmlFor='date-of-birth'>Date of Birth</label>
                <DatePicker
                    id='date-of-birth'
                    selected={dateOfBirth}
                    onChange={handleDateOfBirthChange}
                    dateFormat='dd/MM/yyyy'
                />

                <label htmlFor='start-date'>Start date</label>
                <DatePicker
                    id='start-date'
                    selected={startDate}
                    onChange={handleDateOfStart}
                    dateFormat='dd/MM/yyyy'
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <InputElement id='street' type='text' name='street' content='Street' onChange={handleChange} />

                    <InputElement id='city' type='text' name='city' content='City' onChange={handleChange} />

                    <label htmlFor="state">State</label>
                    <Select id="state" options={stateOptions} onChange={(option) => handleSelectChange(option, "state")} />

                    <InputElement id='zip-code' type='number' name='zipCode' content='Zip Code' onChange={handleChange} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select id="department" options={departmentOptions} onChange={(option) => handleSelectChange(option, "department")} />

                <button type="submit">Save</button>

                {error && <div className="error__message">{error}</div>}
            </form>
        </div>

        <dialog className="modal" ref={dialogRef}>
            <div id="confirmation" className="modal__message">Employee Created!</div>
            <button className="modal__close" onClick={() => dialogRef.current?.close()}>X</button>
        </dialog>
    </>
}