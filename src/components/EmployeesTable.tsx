import { SortingState, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { FormEvent, useEffect, useState } from "react"
import { Employee } from "../types/Employee";
import { columns } from "../constants/columns";
import { filterEmployees } from "../utils/filterEmployees";

export const EmployeesTable = () => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [searchValue, setSearchValue] = useState('');
    const [sorting, setSorting] = useState<SortingState>([]);
    const [storedEmployees, setStoredEmployees] = useState<Employee[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

    const submitSearchForm = (event: FormEvent) => {
        event.preventDefault();
        setSearchValue(inputSearchValue);
    };

    const table = useReactTable({
        data: filteredEmployees,
        columns,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
        onSortingChange: setSorting,
    });

    useEffect(() => {
        const filtered = filterEmployees(storedEmployees, searchValue);
        setFilteredEmployees(filtered);
    }, [searchValue])

    useEffect(() => {
        const fetchedEmployees = JSON.parse(localStorage.getItem('employees') ?? '[]');
        setStoredEmployees(fetchedEmployees)
        setFilteredEmployees(fetchedEmployees)
    }, [])

    return <>
        <div className="table__wrapper">
            <div className="sorting">
                <div className="sorting__select">
                    <label>Show
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={event => {
                                table.setPageSize(Number(event.target.value))
                            }}
                        >
                            {[10, 25, 50, 100].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                        entries</label>
                </div>
                <div className="sorting__searchbar">
                    <form onSubmit={submitSearchForm}>
                        <label htmlFor="searchValue">Search: </label>
                        <input
                            type="text"
                            id="searchValue"
                            value={inputSearchValue}
                            onChange={(event) => setInputSearchValue(event.target.value)}
                        />
                    </form>
                </div>
            </div>
            <table className="employees__table">
                <thead>
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        <div
                                            {...{
                                                className: header.column.getCanSort()
                                                    ? "cursor-pointer select-none"
                                                    : "",
                                                onClick: header.column.getToggleSortingHandler(),
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {header.column.getCanSort() && (
                                                <img
                                                    src={
                                                        header.column.getIsSorted()
                                                            ? header.column.getIsSorted() === 'asc'
                                                                ? '../sort_asc.png'
                                                                : '../sort_desc.png'
                                                            : '../sort_both.png'
                                                    }
                                                    alt="Sort icon"
                                                    style={{ marginLeft: '8px' }}
                                                />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                </thead>
                <tbody>
                    {
                        filteredEmployees.length === 0 ? (<tr>
                            <td colSpan={columns.length}>No data available.</td>
                        </tr>)
                            : (table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            )))
                    }
                </tbody>
            </table>
            <div className="index">
                <div className="index__info">
                    Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
                    {table.getRowCount().toLocaleString()} entries
                </div>
                <div className="index__buttons">
                    <button onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
                        {'First'}
                    </button>
                    <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        {'Previous'}
                    </button>
                    <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        {'Next'}
                    </button>
                    <button onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
                        {'Last'}
                    </button>
                </div>
            </div>
        </div>
    </>
}