import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className="mb-3">
      <label
        className="block mb-2 text-base font-medium text-gray-900"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className="border border-[#e0e0e0] w-full px-3 py-3 bg-white rounded-md text-base font-medium  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
