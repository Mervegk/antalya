"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DataTable from 'react-data-table-component';
import Loading from '@/public/svg/loading.svg';

export default function Table({ data, columnsData, className }) {
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    const paginationComponentOptions = {
        rowsPerPageText: 'Satır sayısı',
        rangeSeparatorText: '/',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Hepsi',
    };

    const columns = columnsData.map((column) => {
        return {
            name: column.name,
            selector: row => row[column.selector],
            wrap: true,
        };
    });

    const customStyles = {
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                fontWeight: 700,
                fontSize: 16,
                background: 'rgba(0,0,0,0.1)',
                textalign: 'center'
            },
        },
        cells: {
            style: {
                padding: '6px',
                hoverColor: 'red'
            },
        },
    };

    return (
        <div className={`${className}`}>
            <DataTable
                columns={columns}
                data={data}
                striped
                pagination
                paginationPerPage={20}
                paginationComponentOptions={paginationComponentOptions}
                paginationRowsPerPageOptions={[5, 10, 15]}
                customStyles={customStyles}
                progressPending={pending}
                progressComponent={<Image src={Loading} alt='loading' />}
            />
        </div>
    )
}
