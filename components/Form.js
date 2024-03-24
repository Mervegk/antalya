import React, { useState, useEffect } from 'react'
import { RiAddFill, RiArrowDropDownLine } from "react-icons/ri";
import classNames from 'classnames';
import { SocialMedia } from '@/app/data/social-media';

export default function Form() {
    const [display, setDisplay] = useState(false);
    const [burs, setBurs] = useState('');
    const [schoolCity, setSchoolCity] = useState('');
    const [image, setImage] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [fcChecked, setFcChecked] = useState(false);
    const [igChecked, setIgChecked] = useState(false);

    const onRadioTrue = (e) => {
        const { name, value } = e.target
        if (name == 'burs') {
            setBurs(value);
        } else if (name == 'schoolCity') {
            setSchoolCity(value);
        }

    };
    useEffect(() => {
        if (burs === '1' && schoolCity === '1') {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }, [burs, schoolCity]);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

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
    const radioInputs = [
        {
            label: "Vakıf-Özel üniversitelerinden öğreniminizi 100% burslu yapacağınızı onaylıyor musunuz?",
            name: "burs",
            options: [
                {
                    label: "Evet",
                    value: '1'
                },
                {
                    label: "Hayır",
                    value: '0'
                }
            ]
        },
        {
            label: "Üniversite eğitim ve öğretiminizin İstanbul il ve ilçelerinden birisinde olduğunu onaylıyor musunuz?",
            name: "schoolCity",
            options: [
                {
                    label: "Evet",
                    value: '1'
                },
                {
                    label: "Hayır",
                    value: '0'
                }
            ]
        }
    ]
    const textInputs = [
        {
            label: "Adınız",
            name: "name"
        },
        {
            label: "Soyadınız",
            name: "surname"
        },
        {
            label: "E-posta Adresiniz",
            name: "email"
        },
        {
            label: "Telefon Numaranız",
            name: "phone"
        },
        {
            label: "Adres Bilgileriniz",
            name: "address"
        },
        {
            label: "Mezun Olduğunuz Okul",
            name: "school"
        },
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
        <form className='flex flex-col gap-4 text-gray-800' onSubmit={onSubmit}>
            <div className='my-10'>
                {
                    radioInputs.slice(0, 2).map((i, index) => <fieldset key={index} className='text-center mb-2' id='radio-group'>
                        <p className='label'>{i.label}</p>
                        <div className='radio-field'>
                            {
                                i.options.map((item, insideIndex) => <label key={insideIndex}><input type="radio" name={i.name} value={item.value} onChange={onRadioTrue} />{item.label}</label>)
                            }
                        </div>
                    </fieldset>)
                }
            </div>
            {
                display == true ?
                    <div className='flex flex-col gap-8 w-full'>
                        <div className='text-center'>
                            <label className='label'>Fotoğraf Seç</label>
                            <div className='flex justify-center mt-2'>
                                <label className='w-56 h-56 flex items-center justify-center border p-1 rounded'>
                                    {
                                        image ? <img src={image} alt='' className='w-full h-full object-cover' /> : <RiAddFill />
                                    }
                                    <input className='hidden w-full h-full' type="file" onChange={handleChange} accept='.png, .jpg, .jpeg, .webp' />
                                </label>
                            </div>
                        </div>
                        <div className='flex-class flex-col'>
                            <div className='flex-class flex-wrap'>
                                {
                                    textInputs.map((i, index) =>
                                        <div key={index} className='flex-grow flex flex-col'>
                                            <label className='label'>{i.label}</label>
                                            <input type='text' name={i.name} className='form-input' />
                                        </div>)
                                }
                            </div>

                            <div className='flex-class  w-full'>
                                <div className='flex flex-col flex-grow w-1/3'>
                                    <label className='label'>Kan Grubu</label>
                                    <div className="custom-select form-input flex items-center">
                                        <div onClick={toggleOpen} className="custom-select-selected  flex justify-between w-full">
                                            <span className={classNames({ 'text-black': selectedOption, 'text-thirdcolor': !selectedOption })}>{selectedOption || 'Kan Grubu'}</span><span><RiArrowDropDownLine className={classNames('text-xl transition-all duration-150 ease-linear', { 'rotate-180': isOpen })} /></span>
                                        </div>
                                        {isOpen && (
                                            <div className="custom-select-options form-input !p-0 !h-auto">
                                                {options.map((option, index) => (
                                                    <div key={index} onClick={() => handleSelect(option.name)}>
                                                        {option.name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <select className='hidden' name='bloodType'><option value={selectedOption}></option></select>
                                    </div>
                                </div>
                                <div className='flex flex-col flex-grow w-1/3'>
                                    <label>Kayıt Tarihi</label>
                                    <input type='date' name='date' className='form-input' />
                                </div>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='label'>Düşünceleriniz</label>
                                <textarea className='form-input !h-32'></textarea>
                            </div>
                            <div className='w-full flex flex-col gap-4'>
                                <div className='flex flex-col items-center w-full'>
                                    <label className='mb-2 label'>Hangi Sosyal Medya Adreslerini Kullanıyorsunuz?</label>
                                    <div className='flex gap-4 checkbox'>
                                        <div className='flex items-center gap-2'>
                                            <label className='label'>Facebook</label>
                                            <input name='fc' type='checkbox' className=' w-auto' onChange={(e) => {
                                                if (e.target.checked === true) {
                                                    setFcChecked(true);
                                                } else if (e.target.checked === false) {
                                                    setFcChecked(false);
                                                }
                                            }
                                            } />
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <label className='label'>Instagram</label>
                                            <input name='ig' type='checkbox' className=' w-auto' onChange={(e) => {
                                                if (e.target.checked === true) {
                                                    setIgChecked(true);
                                                } else if (e.target.checked === false) {
                                                    setIgChecked(false);
                                                }
                                            }
                                            } />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className={classNames('flex-grow flex-col w-1/2', { 'flex': fcChecked, 'hidden': !fcChecked })}>
                                        <label className='label'>Facebook</label>
                                        <input type='text' name='facebook' className='form-input' />
                                    </div>
                                    <div className={classNames('flex-grow flex-col w-1/2', { 'flex': igChecked, 'hidden': !igChecked })}>
                                        <label className='label'>Instagram</label>
                                        <input type='text' name='instagram' className='form-input' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end items-center w-full'>
                            <button type='submit' className='button-main'>Gönder</button>
                        </div>
                    </div> : null
            }
        </form>
    )
}
