'use client'
import React from 'react'
import PageLayout from '@/components/layout/PageLayout';
import Table from '@/components/Table';
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/paginator'

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

async function Page() {
    const post = await fetchData()
    console.log(post);
    let currentPage = 1;

    const handlePageChange = (e) => {
        currentPage = (e.page + 1);
    };
    const items = [
        {
            name: "Faaliyetlerimiz",
            link: "#"
        },
        {
            name: "Faaliyet Raporu",
            link: "/burs/faaliyet-raporu"
        }
    ];
    return (
        <PageLayout items={items} crumbPageTitle="Bursiyerlerimiz" pageTitle="Bursiyerlerimiz">
            <DataTable
                value={post}
                showGridlines={true}
                stripedRows
                emptyMessage="Veri Bulunamadı"
                paginator
                rows={10}
                rowsPerPageOptions={[3, 7, 10]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate='Showing {first} to {last} of {totalRecords} posts'
            >
                <Column field='userId' header='User ID' style={{ width: '10%' }}></Column>
                <Column field='title' header='Title'></Column>
                <Column field='body' header='Body'></Column>
            </DataTable>
        </PageLayout>

    )
}

export default Page