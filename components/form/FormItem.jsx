'use client'
import React, { useState } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Input = ({ label, name, type, placeholder, validation }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="flex flex-col">
      <label className="label">{label}</label>
      <input type={type} placeholder={placeholder} {...register(name, validation)} className="form-input" />
      {errors[name] && <p className="text-red-500 mt-1">{errors[name].message}</p>}
    </div>
  );
}

export const Select = ({ label, name, type, placeholder, validation, options }) => {

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
        <select className='hidden' name={name} {...register(name, validation)}><option value={selectedOption}></option></select>
      </div>
      {errors[name] && <p className="text-red-500 mt-1">{errors[name].message}</p>}
    </div>
  )
}

export const Radio = ({ singular }) => {

  const getRadioType = (singular) => {
    if (singular === true) {
      return "Singular";
    } else if (singular === false) {
      return "Not singular";
    }
  }

  return (
    <>{getRadioType(singular)}</>
  )
}