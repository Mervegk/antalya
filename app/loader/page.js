'use client'
import React, { useState } from 'react';
import classNames from 'classnames';
import PageLayout from '@/components/layout/PageLayout';
import { Form } from '@/components/form/Form'
import { Input, Select, Radio, TextArea, CheckBox, CustomDatePicker } from '@/components/form/FormItem';
import { useForm } from 'react-hook-form';
export default function LoaderTest() {
    const [fcChecked, setFcChecked] = useState(false);
    const [igChecked, setIgChecked] = useState(false);
    const onSubmit = (e) => {
        console.log(e)
    }

    const items = [
        {
            name: "Custom Form",
            link: "/loader"
        }
    ]

    const yesNoOptions = [
        {
            label: "Evet",
            value: 1
        },
        {
            label: "Hayır",
            value: 0
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
                <div className='flex flex-col mt-8 gap-4'>
                    <Radio group label="Vakıf-Özel üniversitelerinden öğreniminizi 100% burslu yapacağınızı onaylıyor musunuz?" name="burs" options={yesNoOptions} />
                    <Radio group label="Üniversite eğitim ve öğretiminizin İstanbul il ve ilçelerinden birisinde olduğunu onaylıyor musunuz?" name="schoolCity" options={yesNoOptions} />
                    <Input name="name" label="Name?" placeholder="name" /* validation={{
                        required: {
                            value: true,
                            message: 'Zorunlu Alan!',
                        },
                    }} */ />
                    <Select name="bloodType" label="Kan Grubu" placeholder="Kan grubu" options={options} />
                    <TextArea name="dusunceleriniz" label="Düşünceleriniz?" height="h-28" />
                    <CheckBox name="fc" placeholder="Facebook" value="facebook" onChange={(e) => {
                        if (e.target.checked === true) {
                            setFcChecked(true);
                        } else if (e.target.checked === false) {
                            setFcChecked(false);
                        }
                    }
                    } />
                    <CheckBox name="ig" placeholder="Instagram" value="instagram" onChange={(e) => {
                        if (e.target.checked === true) {
                            setIgChecked(true);
                        } else if (e.target.checked === false) {
                            setIgChecked(false);
                        }
                    }
                    } />
                    <div className='flex items-center gap-4'>
                        <div className={classNames('flex-grow flex-col w-1/2', { 'flex': fcChecked, 'hidden': !fcChecked })}>
                            <Input name="facebook" label="Facebook" />
                        </div>
                        <div className={classNames('flex-grow flex-col w-1/2', { 'flex': igChecked, 'hidden': !igChecked })}>
                            <Input name="instagram" label="Instagram" />
                        </div>
                    </div>
                    <CustomDatePicker name="ADay" label="tarih" placeholder="Tarih seç" required />
                    <button type="submit" className='button-main mt-8'>Gönder</button>
                </div>
            </Form>
        </PageLayout>

    )
}
