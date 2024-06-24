export type Employee = {
    firstName: string,
    lastName: string,
    startDate: Date,
    department: string,
    birthDate: Date,
    street: string,
    city: string,
    state: string,
    zipCode: number,
}

export const EmployeeInitialList: Employee[] = [
    { 
        firstName: 'Kevin', 
        lastName: 'Bertin', 
        startDate: new Date('2025-01-06'), 
        department: 'Sales', 
        birthDate: new Date('1993-09-06'), 
        street: 'Jl. Blong Poh', 
        city: 'Jimbaran', 
        state: 'Bali', 
        zipCode: 250000 
    },
    { 
        firstName: 'Joy', 
        lastName: 'Koh', 
        startDate: new Date('2025-01-06'), 
        department: 'Sales', 
        birthDate: new Date('1997-08-11'), 
        street: 'Jl. Blong Poh', 
        city: 'Jimbaran', 
        state: 'Bali', 
        zipCode: 250000 
    },
    { 
        firstName: 'Rafael', 
        lastName: 'Lopes', 
        startDate: new Date('2025-01-06'), 
        department: 'Sales', 
        birthDate: new Date('1992-11-12'), 
        street: 'Rue des peupliers', 
        city: 'Bordeaux', 
        state: 'Gironde', 
        zipCode: 33000 }
];