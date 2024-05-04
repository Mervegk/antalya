'use client'
import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RiArrowDropDownLine } from "react-icons/ri";
import DatePicker from "react-datepicker";
import moment from "moment";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";

export const Input = ({ name, label, type, placeholder, validation, onChange }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="flex flex-col">
      {validation?.required ? <label className='label'><span className="text-red-500 mr-[2px]">*</span>{label}</label> : <label className='label'>{label}</label>}
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
      {validation?.required ? <label className='label'><span className="text-red-500 mr-[2px]">*</span>{label}</label> : <label className='label'>{label}</label>}
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
          {validation?.required ? <p className='label'><span className="text-red-500 mr-[2px]">*</span>{label}</p> : <p className='label'>{label}</p>}
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

export const TextArea = ({ name, label, placeholder, validation, onChange, height }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className='flex flex-col w-full'>
      {validation?.required ? <label className='label'><span className="text-red-500 mr-[2px]">*</span>{label}</label> : <label className='label'>{label}</label>}
      <textarea name={name} {...register(name, validation)} className={`form-input-textarea min-h-3 ${height}`} placeholder={placeholder} onChange={onChange}></textarea>
    </div>
  );
}

export const CheckBox = ({ name, label, validation, value, onChange }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <div className='flex gap-4 checkbox'>
        <div className='flex items-center gap-2'>
          {validation?.required ? <label className='label'><span className="text-red-500 mr-[2px]">*</span>{label}</label> : <label className='label'>{label}</label>}
          <input name={name} type='checkbox' className=' w-auto' value={value} {...register(name, validation)} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export const CustomDatePicker = ({ name, label, placeholder, validation, isClearable, yearLimit, yearLimitMessage }) => {
  const { control, formState: { errors } } = useFormContext();
  const [isValid, setIsValid] = useState(true);

  const isDateValid = (date) => {
    if (yearLimit) {
      const today = moment();
      const minDate = moment(date);
      const year = today.diff(minDate, 'years');
      return year >= yearLimit;
    }
    return true;
  };

  return (
    <div className='flex gap-4 checkbox'>
      <div className='flex flex-col form-date'>
        {validation?.required ? <label className='label'><span className="text-red-500 mr-[2px]">*</span>{label}</label> : <label className='label'>{label}</label>}

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <DatePicker
                {...field}
                selected={field.value ? new Date(field.value) : null}
                isClearable={isClearable}
                onChange={(date) => {
                  const formattedDate = date ? moment(date).format('YYYY-MM-DD') : '';
                  field.onChange(formattedDate);
                  setIsValid(isDateValid(formattedDate));
                }}
                placeholderText={placeholder}
                dateFormat="dd.MM.yyyy"
                className='form-input rounded-[5px] focus-visible:border-maincolor p-2 w-full'
              />
              {!isValid && <div className="text-red-500">{yearLimitMessage}</div>}
              {errors[name] && <div className="text-red-500">{errors[name].message}</div>}
            </div>
          )}
        />
      </div>
    </div>
  );
};