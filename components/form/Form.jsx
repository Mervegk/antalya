'use client'
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "./FormItem"

export const Form = ({ onSubmit, children }) => {
  const methods = useForm();

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          {/* <Input name="name" label="Label" />
          <button type="submit">Gönder</button> */}
        </form>

      </FormProvider>
    </div>
  );
}