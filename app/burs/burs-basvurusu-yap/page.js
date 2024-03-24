"use client"
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Form from '@/components/Form';

function Page() {

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