import { useRef, useState } from "react";
import { Employee } from "../types/Employee";
import { SingleValue } from "react-select";

export const useEmployeeForm = () => {
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

        if (!validateForm()) {
            setError('Veuillez remplir tous les champs')
            console.error({ error })
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


    return {
        dateOfBirth,
        startDate,
        newEmployee,
        dialogRef,
        error,
        setDateOfBirth,
        setStartDate,
        saveEmployee,
        handleChange,
        handleSelectChange,
        handleDateOfBirthChange,
        handleDateOfStart,
    }
}