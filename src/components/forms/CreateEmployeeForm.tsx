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
        handleChange,
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
                    <label htmlFor="department">Department</label>
                    <Select styles={customStyles} id="department" options={departmentOptions} onChange={(option) => handleSelectChange(option, "department")} />
                </div>
                <fieldset className="address">
                    <legend>Address</legend>
                    <InputElement id='street' type='text' name='street' content='Street' onChange={handleChange} />
                    <InputElement id='city' type='text' name='city' content='City' onChange={handleChange} />
                    <label htmlFor="state">State</label>
                    <Select styles={customStyles} id="state" options={stateOptions} onChange={(option) => handleSelectChange(option, "state")} />
                    <InputElement id='zip-code' type='number' name='zipCode' content='Zip Code' onChange={handleChange} />
                </fieldset>
            </div>
            <div className="save-container">
                <button className='save-button' type="submit">Save</button>
                {error && <div className="error__message">{error}</div>}
            </div>
        </form>
    )
}