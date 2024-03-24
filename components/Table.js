import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function Table({ tableData, columnData }) {
    return (
        <div>
            <DataTable
                value={tableData}
                paginatorTemplate="FirsPageLink PrevPageLink"
                emptyMessage="Veri Bulunamadı"
                currentPageReportTemplate='Showing {first} to {last} of {totalRecords} posts'
                rows={20}
            >
                {
                    columnData?.map((i, index) => <Column key={index} field={i.field} header={i.header}></Column>)
                }
            </DataTable>
        </div>
    )
}
