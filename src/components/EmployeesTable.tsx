import { SortingState, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { FormEvent, useEffect, useState } from "react"
import { columns } from "../constants/columns";
// import { EmployeeInitialList } from "../inmemory/EmployeeInitialList";
import { Pagination } from "./Pagination";
import { useStore } from "../store/useStore";

export const EmployeesTable = () => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [searchValue, setSearchValue] = useState('');
    const [sorting, setSorting] = useState<SortingState>([]);
    const { filteredEmployees, updateEmployees, filterEmployees } = useStore()

    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 10, //default page size
    });

    const submitSearchForm = (event: FormEvent) => {
        event.preventDefault();
        setSearchValue(inputSearchValue);
    };

    const table = useReactTable({
        data: filteredEmployees,  // 'EmployeeInitialList' for test or 'filteredEmployees' for real data
        columns,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            pagination,
        },
        onSortingChange: setSorting,
    });

    useEffect(() => {
        filterEmployees(searchValue);
    }, [searchValue])

    useEffect(() => {
        const fetchedEmployees = JSON.parse(localStorage.getItem('employees') ?? '[]');
        updateEmployees(fetchedEmployees)
    }, [updateEmployees])

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
            <Pagination pagination={pagination} table={table}/>
        </div>
    </>
}