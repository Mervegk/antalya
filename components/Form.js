import React, { useState } from 'react'
import { RiAddFill } from "react-icons/ri";
import classNames from 'classnames';

export default function Form() {
    const [image, setImage] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

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
                    value: 1
                },
                {
                    label: "Hayır",
                    value: 0
                }
            ]
        },
        {
            label: "Üniversite eğitim ve öğretiminizin İstanbul il ve ilçelerinden birisinde olduğunu onaylıyor musunuz?",
            name: "schoolCity",
            options: [
                {
                    label: "Evet",
                    value: 1
                },
                {
                    label: "Hayır",
                    value: 0
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
                        <p>{i.label}</p>
                        <div className='radio-field'>
                            {
                                i.options.map((item, insideIndex) => <label key={insideIndex}><input type="radio" name={i.name} value={item.value} />{item.label}</label>)
                            }
                        </div>
                    </fieldset>)
                }
            </div>
            <div className='flex flex-col gap-8 w-full'>
                <div className='flex justify-center'>
                    <label className='w-44 h-44 flex items-center justify-center border p-1 rounded'>
                        {
                            image ? <img src={image} alt='' className='w-full h-full object-cover' /> : <RiAddFill />
                        }
                        <input className='hidden w-full h-full' type="file" onChange={handleChange} accept='.png, .jpg, .jpeg, .webp' />
                    </label>
                </div>
                <div className='flex-class flex-col'>
                    <div className='flex-class flex-wrap'>
                        {
                            textInputs.map((i, index) =>
                                <div key={index} className='flex-grow flex flex-col'>
                                    <label>{i.label}</label>
                                    <input type='text' name={i.name} className='form-input' />
                                </div>)
                        }
                    </div>

                    <div className='flex-class w-full'>
                        <div className="custom-select flex-grow form-input w-1/3">
                            <div onClick={toggleOpen} className="custom-select-selected">
                                {selectedOption || 'Kan Grubu'}
                            </div>
                            {isOpen && (
                                <div className="custom-select-options">
                                    {options.map((option, index) => (
                                        <div key={index} onClick={() => handleSelect(option.name)}>
                                            {option.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <select className='hidden' name='bloodType'><option value={selectedOption}></option></select>
                        </div>
                        <div className='flex flex-grow w-1/3'>
                            <input type='checkbox' className='form-input' />
                        </div>
                        <div className='flex flex-grow w-1/3'>
                            <textarea className='form-input'></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <button type='submit' className='bg-yellow-500 p-4'>Gönder</button>
        </form>
    )
}
