import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { useStore } from "../../coreLogic/store/useStore";

export const useEmployeeForm = () => {
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const { newEmployee, addEmployee, updateNewEmployee, isOpen, toggleOpen, resetNewEmployee } = useStore()
    const [error, setError] = useState('')

    useEffect(() => {
        resetNewEmployee()
    }, []);
    
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

        if (!validateForm()) {
            setError('All inputs must be completed.')
            console.error({ error })
            return;
        }

        addEmployee(newEmployee);

        const employees = JSON.parse(localStorage.getItem('employees') ?? '[]');
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        setError('');
        toggleOpen(true);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, pattern } = event.target;
        updateNewEmployee(name, value);

        if (!new RegExp(pattern).test(value)) {
            setError('Wrong input pattern')
            console.error({ error })
        } else {
            setError('')
        }
    };

    const handleSelectChange = (newValue: SingleValue<{ label: string; value: string }>, field: string) => {
        if (newValue) {
            updateNewEmployee(field, newValue.value);
        }
    };

    const handleDateOfBirthChange = (date: Date | null) => {
        setDateOfBirth(date);
        updateNewEmployee('dateOfBirth', date)
    };

    const handleDateOfStart = (date: Date | null) => {
        setStartDate(date);
        updateNewEmployee('startDate', date);
    };

    const handleClose = () => {
        toggleOpen(false);
    };

    return {
        dateOfBirth,
        startDate,
        newEmployee,
        error,
        setDateOfBirth,
        setStartDate,
        saveEmployee,
        handleChange,
        handleSelectChange,
        handleDateOfBirthChange,
        handleDateOfStart,
        isOpen,
        toggleOpen,
        handleClose,
    }
}