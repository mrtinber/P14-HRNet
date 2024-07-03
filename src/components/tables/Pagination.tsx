import { Table } from "@tanstack/react-table";
import { Employee } from "../../types/Employee";

export type PaginationProps = {
    pagination: {
        pageIndex: number,
        pageSize: number,
    },
    table: Table<Employee>,
};

export const Pagination = ({ pagination, table }: PaginationProps) => {
    const pageIndex = pagination.pageIndex;
    const pageCount = table.getPageCount();

    const showFirstButton = pageCount >= 2 && pageIndex >= 1;
    const showEllipsisStart = pageCount >= 5 && pageIndex > 2;
    const showPageMinusTwo = (pageIndex + 1) === pageCount && pageCount > 3;
    const showPageMinusOne = pageIndex > 1;
    const showPagePlusTwo = pageIndex < pageCount - 2;
    const showPagePlusThree = pageIndex === 0 && pageCount > 3;
    const showEllipsisEnd = pageCount >= 5 && pageIndex < pageCount - 3;
    const showLastButton = pageCount >= 2 && pageIndex <= pageCount - 2;

    return (
        <div className="index">
            <div className="index__info">
                Showing {pagination.pageIndex * pagination.pageSize + 1}
                {' '} to {Math.min((pagination.pageIndex + 1) * pagination.pageSize, table.getRowCount())}
                {' '} of {' '} {table.getRowCount().toLocaleString()} entries
            </div>
            <div className="index__wrapper">
                <button 
                    className='index__button' 
                    onClick={() => table.previousPage()} 
                    disabled={!table.getCanPreviousPage()}
                    aria-label="Previous Page"
                >
                    {'Previous'}
                </button>
                {showFirstButton && (
                    <button 
                        className='index__button' 
                        onClick={() => table.firstPage()} 
                        disabled={!table.getCanPreviousPage()}
                        aria-label="First Page"
                    >
                        {'1'}
                    </button>
                )}
                {showEllipsisStart && <div className='index__ellipse'>...</div>}
                {showPageMinusTwo && (
                    <button 
                        className='index__button' 
                        onClick={() => table.setPageIndex(pageIndex - 2)}
                        aria-label={`Page ${pageIndex - 1}`}
                    >
                        {pageIndex - 1}
                    </button>
                )}
                {showPageMinusOne && (
                    <button 
                        className='index__button' 
                        onClick={() => table.setPageIndex(pageIndex - 1)}
                        aria-label={`Page ${pageIndex}`}
                    >
                        {pageIndex}
                    </button>
                )}
                <button className="index__button--current" aria-current="page">
                    {pageIndex + 1}
                </button>
                {showPagePlusTwo && (
                    <button 
                        className='index__button' 
                        onClick={() => table.setPageIndex(pageIndex + 1)}
                        aria-label={`Page ${pageIndex + 2}`}
                    >
                        {pageIndex + 2}
                    </button>
                )}
                {showPagePlusThree && (
                    <button 
                        className='index__button' 
                        onClick={() => table.setPageIndex(pageIndex + 2)}
                        aria-label={`Page ${pageIndex + 3}`}
                    >
                        {pageIndex + 3}
                    </button>
                )}
                {showEllipsisEnd && <div className='index__ellipse'>...</div>}
                {showLastButton && (
                    <button 
                        className='index__button' 
                        onClick={() => table.lastPage()} 
                        disabled={!table.getCanNextPage()}
                        aria-label="Last Page"
                    >
                        {pageCount}
                    </button>
                )}
                <button 
                    className='index__button' 
                    onClick={() => table.nextPage()} 
                    disabled={!table.getCanNextPage()}
                    aria-label="Next Page"
                >
                    {'Next'}
                </button>
            </div>
        </div>
    );
};
