'use client'
import React, { useState } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import { RiArrowDropDownLine } from "react-icons/ri";
import { label } from "yet-another-react-lightbox";

export const Input = ({ name, label, type, placeholder, validation, onChange }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="flex flex-col">
      <label className="label">{label}</label>
      <input type={type} placeholder={placeholder} {...register(name, validation)} className="form-input" onChange={onChange} />
      {errors[name] && <p className="text-red-500 mt-1">{errors[name].message}</p>}
    </div>
  );
}

export const Select = ({ label, name, type, placeholder, validation, options, onChange }) => {

  const { register, formState: { errors } } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='flex flex-col flex-grow w-1/3'>
      <label className='label'>{label}</label>
      <div className="custom-select form-input flex items-center">
        <div onClick={toggleOpen} className="custom-select-selected  flex justify-between w-full">
          <span className={classNames({ 'text-black': selectedOption, 'text-thirdcolor': !selectedOption })}>{selectedOption || placeholder}</span><span><RiArrowDropDownLine className={classNames('text-xl transition-all duration-150 ease-linear', { 'rotate-180': isOpen })} /></span>
        </div>
        {isOpen && (
          <div className="custom-select-options form-input !p-0 !h-auto">
            {options?.map((option, index) => (
              <div key={index} onClick={() => handleSelect(option.name)}>
                {option.name}
              </div>
            ))}
          </div>
        )}
        <select className='hidden' name={name} {...register(name, validation)} onChange={onChange}><option value={selectedOption}></option></select>
      </div>
      {errors[name] && <p className="text-red-500 mt-1">{errors[name].message}</p>}
    </div>
  )
}

export const Radio = ({ name, label, value, placeholder, validation, group, options, onChange }) => {
  const { register, formState: { errors } } = useFormContext();
  const getRadioType = (group) => {
    if (group) {
      return <div>
        <fieldset className='text-center mb-2' id='radio-group'>
          <p className='label'>{label}</p>
          <div className='radio-field'>
            {
              options?.map((item, insideIndex) => <label key={insideIndex}><input type="radio" name={name} value={item.value} {...register(name, validation)} onChange={onChange} />{item.label}</label>)
            }
          </div>
        </fieldset>
      </div>
    } else if (!group) {
      return <div id="radio-group">
        <p className='label'>{label}</p>
        <div>
          <label ><input type="radio" name={name} value={value} {...register(name, validation)} onChange={onChange} />{placeholder}</label>
        </div>
      </div>;

    }
  }

  return (
    <>{getRadioType(group)}</>
  )
}

export const TextArea = ({ name, label, placeholder, validation, onChange }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className='flex flex-col w-full'>
      <label className='label'>{label}</label>
      <textarea name={name} {...register(name, validation)} className='form-input !h-32' placeholder={placeholder} onChange={onChange}></textarea>
    </div>
  );
}

export const CheckBox = ({ name, label, placeholder, validation, value, onChange }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className='flex gap-4 checkbox'>
        <div className='flex items-center gap-2'>
          <label className='label'>{placeholder}</label>
          <input name={name} type='checkbox' className=' w-auto' value={value} {...register(name, validation)} onChange={onChange} />
        </div>
      </div>
    </div>
  );


}