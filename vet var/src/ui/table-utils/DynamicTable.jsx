import React from 'react';
import { TableHeader, TableRow } from '../table-utils/table';
export const DynamicTable = ({ headers, data }) => {
    // Extract status from each row in the data array
    if (!headers || headers.length === 0)
        return <p className="text-gray-500">No headers provided.</p>;
    if (!data || data.length === 0)
        return <p className="text-gray-500">No data available.</p>;
    return (
        <div className="p-4">
            <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
                <TableHeader headers={headers} />
                <tbody>
                    {data.map((row, idx) => (
                        <TableRow key={idx} row={row} headers={headers} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};