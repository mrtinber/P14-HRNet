import { create } from 'zustand'
import { Employee } from '../types/Employee'
import { devtools } from 'zustand/middleware'

interface EmployeesList {
    employees: Employee[],
    filteredEmployees: Employee[],
    newEmployee: Employee,
    addEmployee: (employee: Employee) => void,
    updateEmployees: (employees: Employee[]) => void,
    updateNewEmployee: (field: string, value: any) => void,
    filterEmployees: (searchValue: string) => void,
}

export const useStore = create<EmployeesList>()(devtools((set) => ({
    employees: [],
    filteredEmployees: [],
    newEmployee: {
        firstName: '',
        lastName: '',
        startDate: null,
        department: '',
        dateOfBirth: null,
        street: '',
        city: '',
        state: '',
        zipCode: 0
    },
    addEmployee: (employee) => set((state) => ({
        employees: [...state.employees, employee]
    })),
    updateEmployees: (employees) => set(() => ({
        employees: employees
    })),
    updateNewEmployee: (field, value) => set((state) => ({
        newEmployee: { ...state.newEmployee, [field]: value }
    })), 
    filterEmployees: (searchValue) => set((state) => ({
        filteredEmployees: state.employees.filter(employee => 
            Object.values(employee).some(val => 
                val?.toString().toLowerCase().includes(searchValue.toLowerCase())
            )
        )
    })),
})))