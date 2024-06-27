import { createColumnHelper } from "@tanstack/react-table";
import { Employee } from "../types/Employee";

const columnHelper = createColumnHelper<Employee>()

export const columns = [
    columnHelper.accessor('firstName', {
        header: () => 'First Name',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
        header: () => 'Last Name',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('startDate', {
        header: () => 'Start Name',
        cell: (info) => {
            const date = info.getValue();
            return date ? new Date(date).toLocaleDateString() : 'N/A';
        }
    }),
    columnHelper.accessor('department', {
        header: () => 'Department',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('dateOfBirth', {
        header: () => 'Date of Birth',
        cell: (info) => {
            const date = info.getValue();
            return date ? new Date(date).toLocaleDateString() : 'N/A';
        },
    }),
    columnHelper.accessor('street', {
        header: () => 'Street',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('city', {
        header: () => 'City',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('state', {
        header: () => 'State',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('zipCode', {
        header: () => 'Zip Code',
        cell: (info) => info.getValue(),
    }),
]