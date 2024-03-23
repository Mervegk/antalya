"use client"
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Form from '@/components/Form';

function Page() {
    const [image, setImage] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    function onSubmit(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        console.log('form values', formValues)
    }

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
        <PageLayout items={items} crumbPageTitle="Burs Başvurusu Yap">
            <Form />
        </PageLayout>
    )
}

export default Page