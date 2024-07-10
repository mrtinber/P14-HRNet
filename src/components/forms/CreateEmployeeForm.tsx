import { useEmployeeForm } from "../../hooks/useEmployeeForm"
import { useStore } from "../../store/useStore";
import DatePicker from "react-datepicker"
import { InputElement } from "./InputElement"
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { CustomSelect } from "./CustomSelect";
import { departmentOptions } from "../../constants/departmentOptions";
import { stateOptions } from "../../constants/stateOptions";

export const CreateEmployeeForm = () => {
    const {
        dateOfBirth,
        startDate,
        error,
        saveEmployee,
        handleSelectChange,
        handleDateOfBirthChange,
        handleDateOfStart,
    } = useEmployeeForm()

    const isDark = useStore((state) => state.isThemeDark);

    const customStyles = CustomSelect(isDark);

    return (
        <form onSubmit={saveEmployee} id="create-employee">
            <div className="input-container">
                <div className="personal-information">
                    <InputElement id='first-name' type='text' name='firstName' content='First Name' pattern="^[A-Za-z\-\s]+$"
                        errorMessage="First name should contain only letters." />
                    <InputElement id='last-name' type='text' name='lastName' content='Last Name' pattern="^[A-Za-z\-\s]+$"
                        errorMessage="Last name should contain only letters." />
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
                    <label htmlFor="department">Department</label>
                    <Select styles={customStyles} id="department" options={departmentOptions} onChange={(option) => handleSelectChange(option, "department")} aria-label="select-department" />
                </div>
                <fieldset className="address">
                    <legend>Address</legend>
                    <InputElement id='street' type='text' name='street' content='Street' pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9' ]+$"
                        errorMessage="Address should not contain any special character." />
                    <InputElement id='city' type='text' name='city' content='City' pattern="^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$"
                        errorMessage="City name should contain only letters." />
                    <label htmlFor="state">State</label>
                    <Select styles={customStyles} id="state" options={stateOptions} onChange={(option) => handleSelectChange(option, "state")} aria-label="select-state" />
                    <InputElement id='zip-code' type='number' name='zipCode' content='Zip Code' pattern="^\d{5}$"
                        errorMessage="Zip code should be a 5-digit number." />
                </fieldset>
            </div>
            <div className="save-container">
                <button className='save-button' type="submit">Save</button>
                {error && <div className="error__message">{error}</div>}
            </div>
        </form>
    )
}