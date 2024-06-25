import { Employee } from "../inmemory/EmployeeInitialList";

export function filterEmployees(employees: Employee[], searchTerm: string): Employee[] {
    const lowerCaseResearch = searchTerm.toLowerCase().trim()

    if (lowerCaseResearch.length === 0) {
        return employees
    } else {
        return employees.filter(employee => {
            return Object.values(employee).some(value =>
                value?.toString().toLowerCase().includes(lowerCaseResearch)
            );
        });
    }
}