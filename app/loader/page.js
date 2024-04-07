'use client'
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Form } from '@/components/form/Form'
import { Input, Select, Radio } from '@/components/form/FormItem';

export default function LoaderTest() {

    const onSubmit = (e) => {
        console.log(e)
    }

    const items = [
        {
            name: "Custom Form",
            link: "/loader"
        }
    ]

    const options = [
        {
            name: "0Rh+"
        },
        {
            name: "0Rh-"
        },
        {
            name: "ARh+"
        },
        {
            name: "ARh-"
        },
        {
            name: "BRh+"
        },
        {
            name: "BRh-"
        },
        {
            name: "ABRh+"
        },
        {
            name: "ABRh-"
        }
    ]
    return (
        <PageLayout items={items} pageTitle="Custom Form Component">
            <Form onSubmit={onSubmit}>
                <div className='flex flex-col'>
                    <Input name="name" label="Name?" placeholder="name" validation={{
                        required: {
                            value: true,
                            message: 'Required!',
                        },
                    }} />
                    <Select name="bloodType" label="Kan Grubu" placeholder="Kan grubu" options={options} />
                    <Radio singular={false} />
                    <button type="submit">Gönder</button>
                </div>

            </Form>
        </PageLayout>

    )
}
