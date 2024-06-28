import { Link } from "react-router-dom";
import { InputElement } from "../components/InputElement";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { stateOptions } from "../constants/stateOptions";
import { departmentOptions } from "../constants/departmentOptions";
import { useEmployeeForm } from "../hooks/useEmployeeForm";
import { Modal } from "../components/Modal";

export const CreateEmployee = () => {
    const {
        dateOfBirth,
        startDate,
        // dialogRef,
        error,
        saveEmployee,
        handleChange,
        handleSelectChange,
        handleDateOfBirthChange,
        handleDateOfStart,
        isOpen,
        handleClose,
    } = useEmployeeForm()

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

        {/* <Modal ref={dialogRef}/> */}
        <Modal
            open={isOpen}
            onClose={handleClose}
            message='Employee Created!'
            containerClassName='modal'
            messageClassName='modal__message'
            closeButtonClassName='modal__close'
            closeButtonLabel='X'
        />
    </>
}