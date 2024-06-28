import { useRef, useState } from "react";
import { SingleValue } from "react-select";
import { useStore } from "../store/useStore";

export const useEmployeeForm = () => {
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const { newEmployee, addEmployee, updateNewEmployee } = useStore((state) => ({
        newEmployee: state.newEmployee,
        addEmployee: state.addEmployee,
        updateNewEmployee: state.updateNewEmployee,
    }));
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [error, setError] = useState('')
    // const [isOpen, setIsOpen] = useState(false)

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

        addEmployee(newEmployee);

        const employees = JSON.parse(localStorage.getItem('employees') ?? '[]');
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        setError('');
        // setIsOpen(true);
        dialogRef.current?.showModal();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateNewEmployee(name, value);
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

    // const handleClose = () => {
    //     setIsOpen(false);
    // };

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
        // isOpen,
        // handleClose,
    }
}