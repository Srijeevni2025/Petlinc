import React, { useEffect, useState } from "react";
import { StatusBadge } from "../StatusBadge";
import { Td } from "./Td";
import { Actions } from "../Actions";
export const TableHeader = ({ headers }) => {
    return (
        <thead className="bg-gray-100">
            <tr>
                {headers.map((header, index) => (
                    <th
                        key={index}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border-b"
                    >
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};


export const TableRow = ({ row, headers }) => {
    const [status, setStatus] = useState(row["Status"] || "pending");
     const [maskedContact, setMaskedContact] = useState('XXXXXXXXX');
    useEffect(() => {
        console.log(`Status for row updated to: ${status}`);
        status === 'accepted' ? setMaskedContact(row["Contact"]) : setMaskedContact("XXXXXXXXX");
        console.log(maskedContact);
    }, [status,row]);
    return (
        <tr className="hover:bg-gray-50 transition">
            {headers.map((header, index) => (
                <Td align='left' key={index} className="px-4 py-2 border-b text-gray-600">
                    {header === 'Status' ? (
                        <StatusBadge status={status} />
                    ) : header === 'Action' ? (
                        <Actions status={status} setStatus={setStatus} />
                    ) : header === 'Contact' ? (
                        maskedContact
                    ) : (
                        row[header] ?? "-"
                    )}
                </Td>
            ))}
        </tr>
    );
};
