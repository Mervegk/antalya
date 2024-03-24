"use client"
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Form from '@/components/Form';

function Page() {

    const bursDate = '2024-03-23';
    const currentDate = new Date().toISOString().split('T')[0];

    let bursFormuGoster = false;
    const items = [
        {
            name: "Burs",
            link: ""
        },
        {
            name: "Burs Başvurusu Yap",
            link: "/burs/burs-basvurusu-yap"
        }
    ];
    return (
        <PageLayout items={items} crumbPageTitle="Burs Başvurusu Yap" pageTitle={bursFormuGoster == true ? "Burs Başvuru Formu" : "Burs başvuruları sona erdi. İlginiz için teşekkür ederiz."}>
            {
                bursFormuGoster == true ? <Form /> : null
            }
        </PageLayout>
    )
}

export default Page