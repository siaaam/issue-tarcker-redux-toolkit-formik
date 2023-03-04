import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {label}
      </label>
      <Field
        className="border border-[#e0e0e0] w-full px-3 py-3 bg-white rounded-md text-base font-medium  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        as="textarea"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
